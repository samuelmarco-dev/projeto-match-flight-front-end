import Paragraph from "../../utils/Paragraph";

function ProposalMain(props) {
    const { destiny, year, boarding, landing, date, image, airline } = props;

    return (
        <>
            <img src={image.url} alt="ImageMain" />
            <nav>
                <h1>{`${destiny}, ${year}`}</h1>
                <div>
                    <strong>Companhia Aérea:</strong>
                    <Paragraph conteudo={`${airline.name} (${airline.initials})`} />
                    <Paragraph conteudo={`Data: ${date.start.slice(0, 5)} a ${date.end.slice(0, 5)}`} />
                    <strong>Embarque:</strong>
                    <Paragraph conteudo={`${boarding.name} (${boarding.initials})`} />
                    <strong>Desembarque:</strong>
                    <Paragraph conteudo={`${landing.name} (${landing.initials})`} />
                </div>
            </nav>
        </>
    );
}

export default ProposalMain;
