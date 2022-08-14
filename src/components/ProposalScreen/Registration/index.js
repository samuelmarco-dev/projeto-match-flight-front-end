import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import Swal from "sweetalert2";
import axios from "axios";

import { arrayPlaceholderProposalCreate } from "../../../utils/Placeholder";
import ContextRegistrationProposal from "../../../api/context/registrationProposal";
import ContextTokenCompany from "../../../api/context/tokenCompany";
import { server } from "../../../api/api";

import Button from "../../../utils/Button";
import Header from "../../../utils/Header";
import Paragraph from "../../../utils/Paragraph";
import Container from "../../Global/style";

function ProposalCreate() {
    const { dataProposal, setDataProposal } = useContext(ContextRegistrationProposal);
    const { tokenCompany } = useContext(ContextTokenCompany);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(!tokenCompany && !localStorage.getItem('token')){
            Swal.fire({
                title: 'Você precisa estar logado para acessar esta página!',
                icon: 'error',
                timer: 1500
            });
            navigate('/company');
            return;
        }

        if(!localStorage.getItem('companyId')){
            Swal.fire({
                title: 'Algumas informações estão faltando. Faça o login novamente!',
                icon: 'error',
                timer: 1500
            });
            navigate('/company');
            return;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function backPage(){
        setTimeout(()=> {
            navigate('/proposal/information');
        } , 2000);
    }

    function clearForm(){
        setDataProposal({
            name: '', destiny: '', type: '', year: '', url: '', airline: '', boarding: '',
            landing: '', start: '', end: ''
        });
    }

    function executeTimeOut(){
        setTimeout(()=> {
            setLoading(false);
            setDisabled(false);
            Swal.close();
        }, 2000);
    }

    function verifyContext(){
        for (let key in dataProposal){
            if (!dataProposal[key]) return true;
        }
        return false;
    }

    function verifyData(){
        if (dataProposal.start.includes(' ')) return true;
        if (dataProposal.end.includes(' ')) return true;
        return false;
    }

    async function registrationProposal(){
        const objBody = {
            headers: {
                Authorization: `Bearer ${tokenCompany ? tokenCompany : localStorage.getItem('token')}`
            }
        };
        try {
            await axios.post(`${server}/proposal`, { ...dataProposal, companyId: Number(localStorage.getItem('companyId')) }, objBody);
            Swal.fire({
                title: 'Proposta cadastrada com sucesso!',
                icon: 'success'
            });
            executeTimeOut();
            clearForm();
            navigate('/company/timeline');
        } catch (err) {
            Swal.fire({
                title: 'Erro ao cadastrar proposta!',
                icon: 'error',
                text: err.response.data
            });
            executeTimeOut();
            clearForm();
            navigate('/company/timeline');
        }
    }

    async function sendDataForRegistration(e){
        e.preventDefault();
        setDisabled(true);
        setLoading(true);

        if (verifyContext()){
            Swal.fire({
                icon: 'error',
                text: 'Preencha todos os campos'
            });
            executeTimeOut();
            return backPage();
        }

        if (verifyData()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Espaços em branco não são permitidos em datas!'
            });
            executeTimeOut();
            setDataProposal({ ...dataProposal, start: '', end: '' });
            return;
        }

        await registrationProposal();
    }

    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form onSubmit={sendDataForRegistration}>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[0]}
                    value={dataProposal.airline} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, airline: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[1]}
                    value={dataProposal.boarding} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, boarding: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[2]}
                    value={dataProposal.landing} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, landing: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[3]}
                    value={dataProposal.start} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, start: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[4]}
                    value={dataProposal.end} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, end: e.target.value })} />
                </div>
                <div className="button">
                    {
                        !loading ? <Button conteudo="Cadastrar proposta" tipo="submit" disabled={disabled}/>
                        : <Button conteudo={<ThreeDots color="#fff" height={13}/>} disabled={disabled}/>
                    }
                </div>
            </form>
            <Link to='/proposal/information'>
                <Paragraph conteudo="Alterar dados de viagem" />
            </Link>
        </Container>
    );
}

export default ProposalCreate;
