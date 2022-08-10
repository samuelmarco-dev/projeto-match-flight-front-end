import Button from "../../../utils/Button";
import Header from "../../../utils/Header";
import Paragraph from "../../../utils/Paragraph";
import { arrayPlaceholderProposalInformation } from "../../../utils/Placeholder";
import Container from "../../Global/style";

function ProposalInformation() {
    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[0]} />
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[1]} />
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[2]} />
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[3]} />
                    <input type="text" placeholder={arrayPlaceholderProposalInformation[4]} />
                </div>
                <div className="button">
                    <Button conteudo="Seguir para envio" tipo="submit" />
                </div>
            </form>
            <Paragraph conteudo="Cancelar proposta de viagem?" />
        </Container>
    );
}

export default ProposalInformation;
