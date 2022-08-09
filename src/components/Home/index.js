import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAirplaneSharp } from 'react-icons/io5';
import { ThreeDots } from 'react-loader-spinner';

import Paragraph from '../../utils/Paragraph';
import Button from '../../utils/Button';
import Container from "./style";

function Home() {
    const navigate = useNavigate();
    const [disable, setDisable] = useState({
        disableUser: false,
        disableCompany: false
    });
    const [loading, setLoading] = useState({
        loadingUser: false,
        loadingCompany: false
    });

    function avancePage(page) {
        if(page === 'user'){
            setDisable({ ...disable, disableUser: true })
            setLoading({ ...loading, loadingUser: true })
            setInterval(()=> {
                navigate(`/${page}`);
                setDisable({ ...disable, disableUser: false })
                setLoading({ ...loading, loadingUser: false })
            }, 400);
        }
        if(page === 'company'){
            setDisable({ ...disable, disableCompany: true })
            setLoading({ ...loading, loadingCompany: true })
            setInterval(()=> {
                navigate(`/${page}`);
                setDisable({ ...disable, disableCompany: false })
                setLoading({ ...loading, loadingCompany: false })
            }, 400);
        }
    }

    return (
        <Container>
            <header>
                <IoAirplaneSharp />
                <Paragraph conteudo="MatchFlight" />
            </header>
            <div>
                {
                    !loading.loadingCompany ? <Button conteudo="Para empresas" tipo="button"
                    disabled={disable.disableCompany} click={()=> avancePage('company')} />
                    :
                    <Button conteudo={<ThreeDots color="#fff" height={13} />} tipo="button"
                    disabled={disable.disableCompany} />
                }
                {
                    !loading.loadingUser ? <Button conteudo="Para usuários" tipo="button"
                    disabled={disable.disableUser} click={()=> avancePage('user')} />
                    :
                    <Button conteudo={<ThreeDots color="#fff" height={13} />} tipo="button"
                    disabled={disable.disableUser} />
                }
            </div>
        </Container>
    );
}

export default Home;
