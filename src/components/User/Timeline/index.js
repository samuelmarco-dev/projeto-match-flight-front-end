import { MdFavorite, MdUnsubscribe, MdClear } from 'react-icons/md';

import ProposalMain from '../../ProposalMain';
import HeaderScreen from "../../Header";
import Container from "./style";

function TimelineUser() {
    return (
        <Container>
            <HeaderScreen />
            <main>
                <ProposalMain />
            </main>
            <footer>
                <div className='clear'><MdClear /></div>
                <div className='subscribe'><MdUnsubscribe /></div>
                <div className='favorite'><MdFavorite /></div>
            </footer>
        </Container>
    );
}

export default TimelineUser;
