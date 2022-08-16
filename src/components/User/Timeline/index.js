import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdFavorite, MdUnsubscribe, MdClear } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';

import ContextTokenUser from '../../../api/context/tokenUser';
import { server } from '../../../api/api';

import ProposalMain from '../../ProposalMain';
import HeaderScreen from "../../Header";
import Container from "./style";

function TimelineUser() {
    const { tokenUser } = useContext(ContextTokenUser);
    const [proposals, setProposals] = useState([]);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    async function getProposals(){
        const objBody = {
            headers: {
                Authorization: `Bearer ${tokenUser ? tokenUser : localStorage.getItem('token')}`
            }
        };

        try {
            const promise = await axios.get(`${server}/proposals/user`, objBody);
            const { data } = promise;
            setProposals(data.proposals);
            setProposals(cloneProposals(data.proposals, index));
        } catch (err) {
            Swal.fire({
                title: 'Erro ao buscar propostas',
                icon: 'error',
                text: err.response.data,
            });
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            navigate('/user');
        }
    }

    useEffect(() => {
        if(!tokenUser && !localStorage.getItem('token')){
            Swal.fire({
                title: 'Você precisa estar logado para acessar esta página!',
                icon: 'error',
                timer: 1500
            });
            navigate('/user');
            return;
        }

        if(!localStorage.getItem('userId')){
            Swal.fire({
                title: 'Algumas informações estão faltando. Faça o login novamente!',
                icon: 'error',
                timer: 1500
            });
            navigate('/user');
            return;
        }

        if(tokenUser || localStorage.getItem('token')){
            getProposals();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function notImplemented() {
        Swal.fire({
            title: 'Em breve!',
            text: 'Esta funcionalidade ainda não está disponível!',
            icon: 'info',
            timer: 2000
        });
    }

    function cloneProposals(proposals, index) {
        if(index === proposals.length) {
            return [];
        }

        return proposals.map((proposal, id) => {
            if(id === index) return {
                ...proposal, render: true
            }
            return {
                ...proposal,
                render: false
            };
        })
    }

    function verify(proposal){
        const { id, destiny, year, Boarding, Landing, Date, Image, Airline, render } = proposal;
        if(render === true) {
            return <ProposalMain key={id} destiny={destiny} year={year} boarding={Boarding}
            landing={Landing} date={Date} image={Image} airline={Airline} />
        }
        return <></>
    }

    function updateRender() {
        const existRender = proposals.filter(proposal => proposal.render === true);
        if(existRender.length === 0){
            Swal.fire({
                icon: 'info',
                title: 'Não há propostas para serem exibidas curtidas ou desmarcadas!'
            });
            return;
        }

        setIndex(index + 1);
        setProposals(cloneProposals(proposals, index));
    }

    return (
        <Container>
            <HeaderScreen />
            <main>
                {
                    !proposals.length ? <></>
                    :
                    proposals.map(proposal => verify(proposal))
                }
            </main>
            <footer>
                <div className='clear' onClick={()=> updateRender()}><MdClear /></div>
                <div className='subscribe' onClick={()=> notImplemented()}><MdUnsubscribe /></div>
                <div className='favorite' onClick={()=> updateRender()}><MdFavorite /></div>
            </footer>
        </Container>
    );
}

export default TimelineUser;
