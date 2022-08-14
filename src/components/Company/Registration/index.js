import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import Swal from "sweetalert2";
import axios from "axios";

import { server } from "../../../api/api";
import ContextSignupCompany from "../../../api/context/signupCompany";
import { arrayPlaceholderSignUpCompany } from "../../../utils/Placeholder";

import Button from "../../../utils/Button";
import Header from "../../../utils/Header";
import Paragraph from "../../../utils/Paragraph";
import Container from "../../Global/style";

function CompanyRegistration() {
    const { dataCompany, setDataCompany } = useContext(ContextSignupCompany);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function backPage(){
        setTimeout(()=> {
            navigate('/company/information');
        } , 2000);
    }

    function clearForm(){
        setDataCompany({
            name: '', city: '', state: '', type: '', cnpj: '', url: '', email: '', password: '', confirmPassword: ''
        });
    }

    function executeTimeOut(){
        setTimeout(()=> {
            setLoading(false);
            setDisabled(false);
            Swal.close();
        }, 2000);
    }

    function verifyPassword(){
        if (dataCompany.password !== dataCompany.confirmPassword) return true;
        return false;
    }

    function verifyContext(){
        for (let key in dataCompany){
            if (!dataCompany[key]) return true;
        }
        return false;
    }

    function verifyData(){
        if (dataCompany.cnpj.includes(' ')) return true;
        if (dataCompany.url.includes(' ')) return true;
        if (dataCompany.email.includes(' ')) return true;
        if (dataCompany.password.includes(' ')) return true;
        if (dataCompany.confirmPassword.includes(' ')) return true;
        return false;
    }

    async function registrationCompany(){
        try {
            await axios.post(`${server}/company/sign-up`, dataCompany);
            Swal.fire({
                title: 'Cadastro realizado com sucesso!',
                icon: 'success'
            });
            executeTimeOut();
            clearForm();
            navigate('/company');
        } catch (err) {
            Swal.fire({
                title: 'Erro ao realizar o cadastro!',
                icon: 'error',
                text: err.response.data
            });
            executeTimeOut();
            clearForm();
            navigate('/company/information');
        }
    }

    async function sendDataForRegistration(e){
        e.preventDefault();
        setDisabled(true);
        setLoading(true);

        if (verifyPassword()){
            Swal.fire({
                icon: 'error',
                title: 'Senhas não conferem',
                text: 'Por favor, verifique se as senhas estão corretas'
            });
            executeTimeOut();
            setDataCompany({ ...dataCompany, password: '', confirmPassword: '' });
            return;
        }

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
                text: 'Espaços em branco não são permitidos!'
            });
            executeTimeOut();
            setDataCompany({ ...dataCompany, cnpj: '', url: '', email: '', password: '', confirmPassword: '' });
            return;
        }

        await registrationCompany();
    }

    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form onSubmit={sendDataForRegistration}>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderSignUpCompany[0]}
                    value={dataCompany.cnpj} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, cnpj: e.target.value})} />
                    <input type="text" placeholder={arrayPlaceholderSignUpCompany[1]}
                    value={dataCompany.url} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, url: e.target.value})} />
                    <input type="text" placeholder={arrayPlaceholderSignUpCompany[2]}
                    value={dataCompany.email} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, email: e.target.value})} />
                    <input type="password" placeholder={arrayPlaceholderSignUpCompany[3]}
                    value={dataCompany.password} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, password: e.target.value})} />
                    <input type="password" placeholder={arrayPlaceholderSignUpCompany[4]}
                    value={dataCompany.confirmPassword} required disabled={disabled}
                    onChange={(e)=> setDataCompany({ ...dataCompany, confirmPassword: e.target.value})} />
                </div>
                <div className="button">
                    {
                        !loading ? <Button conteudo="Cadastrar" tipo="submit" disabled={disabled}/>
                        : <Button conteudo={<ThreeDots color="#fff" height={13}/>} disabled={disabled}/>
                    }
                </div>
            </form>
            <Link to="/company/information">
                <Paragraph conteudo="Alterar dados da empresa"/>
            </Link>
        </Container>
    );
}

export default CompanyRegistration;
