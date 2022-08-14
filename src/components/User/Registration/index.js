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
        for (let key in signupData){
            if (signupData[key].includes(' ')) return true;
        }
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
        }, 1500);
    }

    async function registrationUser(){
        try{
            await axios.post(`${server}/user/sign-up`, signupData);
            Swal.fire({
                title: 'Cadastro realizado com sucesso!',
                icon: 'success',
                timer: 1500
            });
            setTimeout(()=> {
                setDisabled(false);
                setLoading(false);
                clearForm();
                navigate('/user');
            }, 1500);
        }
        catch(err){
            Swal.fire({
                title: 'Erro ao realizar o cadastro!',
                icon: 'error'
            });
            executeTimeOut();
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
        }

        if (verifyData()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Espaços em branco não são permitidos!'
            });
            executeTimeOut();
            clearForm();
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
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[3]}
                    value={signupData.password} required disabled={disabled}
                    onChange={(e)=> setSignupData({ ...signupData, password: e.target.value })} />
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[4]}
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
