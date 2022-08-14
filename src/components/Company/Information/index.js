import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';

import ContextSignupCompany from "../../../api/context/signupCompany";
import { arrayPlaceholderInformation } from "../../../utils/Placeholder";

import Button from "../../../utils/Button";
import Header from "../../../utils/Header";
import Paragraph from "../../../utils/Paragraph";
import Container from "../../Global/style";
import Swal from "sweetalert2";

function CompanyInformation() {
    const { dataCompany, setDataCompany } = useContext(ContextSignupCompany);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function avancePage(){
        setTimeout(()=> {
            navigate('/company/sign-up');
        } , 2000);
    }

    function verifyData(){
        if (dataCompany.type.includes(' ')) return true;
        return false;
    }

    function verifyTypeCompany(){
        if (dataCompany.type === ('Viagens' || 'TravelAgency')) {
            setDataCompany({...dataCompany, type: 'TravelAgency'});
            return avancePage();
        }
        if (dataCompany.type === ('Intercâmbio' || 'ExchangeAgency')) {
            setDataCompany({...dataCompany, type: 'ExchangeAgency'});
            return avancePage();
        }
        if (dataCompany.type === ('Ambos' || 'TravelAndExchangeAgency')) {
            setDataCompany({...dataCompany, type: 'TravelAndExchangeAgency'});
            return avancePage();
        }

        Swal.fire({
            icon: 'error',
            text: 'Escolha uma opção de tipo de empresa (Viagens, Intercâmbio ou Ambos)'
        });
        setDisabled(false);
        setLoading(false);
        setDataCompany({ ...dataCompany, type: '' });
    }

    async function sendInformation(e){
        e.preventDefault();
        setDisabled(true);
        setLoading(true);

        if (verifyData()){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Espaços em branco não são permitidos no input: Tipo da empresa!',
                timer: 1500
            });
            setDisabled(false);
            setLoading(false);
            setDataCompany({ ...dataCompany, type: '' });
            return;
        }
        verifyTypeCompany();
    }

    console.log(dataCompany);

    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form onSubmit={sendInformation}>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderInformation[0]}
                    value={dataCompany.name} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, name: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderInformation[1]}
                    value={dataCompany.city} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, city: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderInformation[2]}
                    value={dataCompany.state} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, state: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderInformation[3]}
                    value={dataCompany.type} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, type: e.target.value })} />
                </div>
                <div className="button">
                    {
                        !loading ? <Button conteudo="Seguir para cadastro" tipo="submit" disabled={disabled}/>
                        : <Button conteudo={<ThreeDots color="#fff" height={13}/>} disabled={disabled}/>
                    }
                </div>
            </form>
            <Link to="/company">
                <Paragraph conteudo="Já tem conta? Entre agora!" />
            </Link>
        </Container>
    );
}

export default CompanyInformation;
