import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import Swal from "sweetalert2";
import axios from "axios";

import ContextTokenCompany from "../../../api/context/tokenCompany";
import { server } from "../../../api/api";
import { arrayPlaceholderLogin } from "../../../utils/Placeholder";

import Header from "../../../utils/Header";
import Button from "../../../utils/Button";
import Paragraph from "../../../utils/Paragraph";
import Container from "../../Global/style";

function LoginCompany() {
    const { setTokenCompany } = useContext(ContextTokenCompany);
    const [login, setLogin] = useState({
        email: '', password: ''
    });
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function verifyData(){
        if (login.email.includes(' ')) return true;
        if (login.password.includes(' ')) return true;
        return false;
    }

    function clearForm(){
        setLogin({
            email: '', password: ''
        });
    }

    function executeTimeOut(){
        setTimeout(()=> {
            setLoading(false);
            setDisabled(false);
            Swal.close();
        }, 2000);
    }

    async function sendLoginCompany(){
        try {
            const promise = await axios.post(`${server}/company/sign-in`, login);
            const { data } = promise;
            setTokenCompany(data.token);
            localStorage.setItem('token', data.token);
            localStorage.setItem('companyId', data.companyId);
            Swal.fire({
                title: 'Login realizado com sucesso!',
                icon: 'success'
            });
            executeTimeOut();
            clearForm();
        } catch (err) {
            Swal.fire({
                title: 'Erro ao fazer login',
                icon: 'error',
                text: err.response.data
            });
            executeTimeOut();
            clearForm();
        }
    }

    async function loginCompany(e){
        e.preventDefault();
        setLoading(true);
        setDisabled(true);

        if(verifyData()){
            Swal.fire({
                title: 'Preencha os campos corretamente!',
                icon: 'error'
            });
            executeTimeOut();
            clearForm();
            return;
        }

        await sendLoginCompany();
        navigate('/company/timeline');
    }

    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form onSubmit={loginCompany}>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderLogin[0]}
                    value={login.email} required disabled={disabled}
                    onChange={(e)=> setLogin({ ...login, email: e.target.value})} />
                    <input type="password" placeholder={arrayPlaceholderLogin[1]}
                    value={login.password} required disabled={disabled}
                    onChange={(e)=> setLogin({ ...login, password: e.target.value})} />
                </div>
                <div className="button">
                    {
                        !loading ? <Button conteudo="Entrar" tipo="submit" disabled={disabled}/>
                        : <Button conteudo={<ThreeDots color="#fff" height={13}/>} disabled={disabled}/>
                    }
                </div>
            </form>
            <Link to="/company/information">
                <Paragraph conteudo="Primeira vez? Cadastre-se" />
            </Link>
        </Container>
    );
}

export default LoginCompany;
