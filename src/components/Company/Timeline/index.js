import { useContext, useEffect, useState } from 'react';
import ContextTokenCompany from '../../../api/context/tokenCompany';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

import { server } from '../../../api/api';

import HeaderScreen from '../../Header';
import ProposalTimeLine from '../../Proposal';
import Button from '../../../utils/Button';
import Container from "./style";

function TimelineCompany() {
    const { tokenCompany } = useContext(ContextTokenCompany);
    const [proposals, setProposals] = useState([]);
    const navigate = useNavigate();

    async function getProposalsCompany(){
        const objBody = {
            headers: {
                Authorization: `Bearer ${tokenCompany ? tokenCompany : localStorage.getItem('token')}`
            }
        };

        try {
            const promise = await axios.get(`${server}/proposals/company/${localStorage.getItem('companyId')}`, objBody);
            const { data } = promise;
            console.log(data, data.proposals);
            setProposals(data.proposals);
        } catch (err) {
            Swal.fire({
                title: 'Erro ao buscar propostas',
                icon: 'error',
                text: err.response.data,
            });
        }
    }

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

        getProposalsCompany();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(proposals);

    return (
        <Container>
            <HeaderScreen />
            <h1>Propostas enviadas</h1>
            <div className='button'>
                <Link to='/proposal/information'>
                    <Button conteudo="Criar nova proposta" />
                </Link>
            </div>
            <nav>
                {
                    !proposals.length ?
                    <></>
                    :
                    <ProposalTimeLine />
                }
            </nav>
        </Container>
    );
}

export default TimelineCompany;
