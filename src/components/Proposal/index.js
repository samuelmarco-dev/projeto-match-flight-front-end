import { BsArrowDownUp } from "react-icons/bs";

import Profile from "../../assets/img/profile.png";

function ProposalTimeLine(props) {
    return (
        <div>
            <img src={Profile} alt="ImageProfile" />
            <aside>
                <p>São Paulo, 2022</p>
                <p>Data: 09/11 a 14/12</p>
            </aside>
            <article>
                <p>POA</p>
                <BsArrowDownUp />
                <p>CNH</p>
            </article>
        </div>
    );
}

export default ProposalTimeLine;
