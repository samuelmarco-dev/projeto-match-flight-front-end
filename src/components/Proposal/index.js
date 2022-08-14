import { BsArrowDownUp } from "react-icons/bs";

import Profile from "../../assets/img/profile.png";

function ProposalTimeLine(props) {
    const { destiny, year, boarding, landing, date } = props;

    return (
        <div>
            <img src={Profile} alt="ImageProfile" />
            <aside>
                <p>{`${destiny}, ${year}`}</p>
                <p>{`Data: ${date.start.slice(0, 5)} a ${date.end.slice(0, 5)}`}</p>
            </aside>
            <article>
                <p>{boarding.initials}</p>
                <BsArrowDownUp />
                <p>{landing.initials}</p>
            </article>
        </div>
    );
}

export default ProposalTimeLine;
