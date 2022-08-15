import { BsArrowDownUp } from "react-icons/bs";

function ProposalTimeLine(props) {
    const { destiny, year, boarding, landing, date, image } = props;

    return (
        <div>
            <img src={image.url} alt="" />
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
