import Button from "../../../utils/Button";
import Header from "../../../utils/Header";
import Paragraph from "../../../utils/Paragraph";
import { arrayPlaceholderProposalCreate } from "../../../utils/Placeholder";
import Container from "../../Global/style";

function ProposalCreate() {
    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[0]} />
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[1]} />
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[2]} />
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[3]} />
                    <input type="text" placeholder={arrayPlaceholderProposalCreate[4]} />
                </div>
                <div className="button">
                    <Button conteudo="Cadastrar viagem" tipo="submit" />
                </div>
            </form>
            <Paragraph conteudo="Alterar dados de viagem" />
        </Container>
    );
}

export default ProposalCreate;
