import HeaderScreen from '../../Header';
import ProposalTimeLine from '../../Proposal';
import Container from "./style";
import Button from '../../../utils/Button';

function TimelineCompany() {
    return (
        <Container>
            <HeaderScreen />
            <h1>Propostas enviadas</h1>
            <div className='button'>
                <Button conteudo="Criar nova proposta" />
            </div>
            <nav>
                <ProposalTimeLine />
                <ProposalTimeLine />
                <ProposalTimeLine />
            </nav>
        </Container>
    );
}

export default TimelineCompany;
