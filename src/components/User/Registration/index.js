import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import Swal from "sweetalert2";
import axios from "axios";

import { arrayPlaceholderSignUpUser } from "../../../utils/Placeholder";
import { server } from "../../../api/api";

import Header from "../../../utils/Header";
import Button from "../../../utils/Button";
import Paragraph from "../../../utils/Paragraph";
import Container from "../../Global/style";

function UserRegistration() {
    const [signupData, setSignupData] = useState({
        name: '', url: '', email: '', password: '', confirmPassword: ''
    });
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function clearForm(){
        setSignupData({
            name: '', url: '', email: '', password: '', confirmPassword: ''
        });
    }

    function verifyData(){
        if (signupData.url.includes(' ')) return true;
        if (signupData.email.includes(' ')) return true;
        if (signupData.password.includes(' ')) return true;
        if (signupData.confirmPassword.includes(' ')) return true;
        return false;
    }

    function verifyPassword(){
        if (signupData.password !== signupData.confirmPassword) return true;
        return false;
    }

    function executeTimeOut(){
        setTimeout(()=> {
            setLoading(false);
            setDisabled(false);
            Swal.close();
        }, 2000);
    }

    async function registrationUser(){
        try{
            await axios.post(`${server}/user/sign-up`, signupData);
            Swal.fire({
                title: 'Cadastro realizado com sucesso!',
                icon: 'success',
            });
            executeTimeOut();
            clearForm();
            navigate('/user');
        }
        catch(err){
            Swal.fire({
                title: 'Erro ao realizar o cadastro!',
                icon: 'error',
                text: err.response.data
            });
            executeTimeOut();
            clearForm();
        }
    }

    async function sendDataForRegistration(e){
        e.preventDefault();
        setLoading(true);
        setDisabled(true);

        if (verifyPassword()){
            Swal.fire({
                icon: 'error',
                title: 'Senhas não conferem',
                text: 'Por favor, verifique se as senhas estão corretas'
            });
            executeTimeOut();
            setSignupData({ ...signupData, password: '', confirmPassword: '' });
            return;
        }

        if (verifyData()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Espaços em branco não são permitidos!'
            });
            executeTimeOut();
            clearForm();
            return;
        }

        await registrationUser();
    }

    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form onSubmit={sendDataForRegistration}>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[0]}
                    value={signupData.name} required disabled={disabled}
                    onChange={(e)=> setSignupData({ ...signupData, name: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[1]}
                    value={signupData.url} required disabled={disabled}
                    onChange={(e)=> setSignupData({ ...signupData, url: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[2]}
                    value={signupData.email} required disabled={disabled}
                    onChange={(e)=> setSignupData({ ...signupData, email: e.target.value })} />
                    <input type="password" placeholder={arrayPlaceholderSignUpUser[3]}
                    value={signupData.password} required disabled={disabled}
                    onChange={(e)=> setSignupData({ ...signupData, password: e.target.value })} />
                    <input type="password" placeholder={arrayPlaceholderSignUpUser[4]}
                    value={signupData.confirmPassword} required disabled={disabled}
                    onChange={(e)=> setSignupData({ ...signupData, confirmPassword: e.target.value })} />
                </div>
                <div className="button">
                    {
                        !loading ? <Button conteudo="Cadastrar" tipo="submit" disabled={disabled}/>
                        : <Button conteudo={<ThreeDots color="#fff" height={13}/>} disabled={disabled}/>
                    }
                </div>
            </form>
            <Link to='/user'>
                <Paragraph conteudo="Já tem conta? Entre agora!" />
            </Link>
        </Container>
    );
}

export default UserRegistration;
