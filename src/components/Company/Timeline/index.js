import { IoMdExit } from 'react-icons/io';

import Container from "./style";
import Profile from "../../../assets/img/profile.png";

function TimelineCompany() {
    return (
        <Container>
            <header>
                <img src={Profile} alt="ImageProfile" />
                <p>MatchFlight</p>
                <IoMdExit />
            </header>
            <h1>Propostas enviadas</h1>
            <div className='button'>
                <button>Criar nova proposta</button>
            </div>
            <nav>
                algumas propostas...
            </nav>
        </Container>
    );
}

export default TimelineCompany;
