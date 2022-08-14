import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import Swal from "sweetalert2";

import { arrayPlaceholderProposalInformation } from "../../../utils/Placeholder";
import ContextRegistrationProposal from "../../../api/context/registrationProposal";
import ContextTokenCompany from "../../../api/context/tokenCompany";

import Button from "../../../utils/Button";
import Header from "../../../utils/Header";
import Paragraph from "../../../utils/Paragraph";
import Container from "../../Global/style";

function ProposalInformation() {
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

    function avancePage(){
        setTimeout(()=> {
            navigate('/proposal/sign-up');
        } , 2000);
    }

    function verifyData(){
        if (dataProposal.type.includes(' ')) return true;
        if (dataProposal.url.includes(' ')) return true;
        return false;
    }

    function verifyTypeProposal(){
        if (dataProposal.type === 'Viagem' || dataProposal.type === 'Travel') {
            setDataProposal({...dataProposal, type: 'Travel'});
            return avancePage();
        }
        if (dataProposal.type === 'Intercâmbio' || dataProposal.type === 'Exchange') {
            setDataProposal({...dataProposal, type: 'Exchange'});
            return avancePage();
        }
        if (dataProposal.type === 'Mochilão' || dataProposal.type === 'Backpack') {
            setDataProposal({...dataProposal, type: 'Backpack'});
            return avancePage();
        }
        if (dataProposal.type === 'Voluntária' || dataProposal.type === 'Voluntary') {
            setDataProposal({...dataProposal, type: 'Voluntary'});
            return avancePage();
        }

        Swal.fire({
            icon: 'error',
            text: 'Escolha uma opção de tipo de empresa (Viagem, Intercâmbio, Mochilão ou Voluntária)'
        });
        setDisabled(false);
        setLoading(false);
        setDataProposal({ ...dataProposal, type: '' });
    }

    async function sendInformation(e){
        e.preventDefault();
        setDisabled(true);
        setLoading(true);

        if (verifyData()){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Espaços em branco não são permitidos nos inputs: Tipo e URL!',
                timer: 1500
            });
            setDisabled(false);
            setLoading(false);
            setDataProposal({ ...dataProposal, type: '', url: '' });
            return;
        }

        verifyTypeProposal();
    }

    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form onSubmit={sendInformation}>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[0]}
                    value={dataProposal.name} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, name: e.target.value})} />
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[1]}
                    value={dataProposal.destiny} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, destiny: e.target.value})} />
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[2]}
                    value={dataProposal.type} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, type: e.target.value})} />
                    <input type="number" placeholder={arrayPlaceholderProposalInformation[3]}
                    value={dataProposal.year} required disabled={disabled} min="2022" max="2030"
                    onChange={(e)=> setDataProposal({ ...dataProposal, year: e.target.value})} />
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[4]}
                    value={dataProposal.url} required disabled={disabled}
                    onChange={(e)=> setDataProposal({ ...dataProposal, url: e.target.value})} />
                </div>
                <div className="button">
                    {
                        !loading ? <Button conteudo="Seguir para envio" tipo="submit" disabled={disabled}/>
                        : <Button conteudo={<ThreeDots color="#fff" height={13}/>} disabled={disabled}/>
                    }
                </div>
            </form>
            <Link to='/company/timeline'>
                <Paragraph conteudo="Cancelar proposta de viagem?" />
            </Link>
        </Container>
    );
}

export default ProposalInformation;
