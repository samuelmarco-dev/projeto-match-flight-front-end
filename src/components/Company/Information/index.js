import Button from "../../../utils/Button";
import Header from "../../../utils/Header";
import Paragraph from "../../../utils/Paragraph";
import { arrayPlaceholderInformation } from "../../../utils/Placeholder";
import Container from "../../Global/style";

function CompanyInformation() {
    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderInformation[0]} />
                    <input type="text" placeholder={arrayPlaceholderInformation[1]} />
                    <input type="text" placeholder={arrayPlaceholderInformation[2]} />
                    <input type="text" placeholder={arrayPlaceholderInformation[3]} />
                </div>
                <div className="button">
                    <Button conteudo="Seguir para cadastro" />
                </div>
            </form>
            <Paragraph conteudo="Já tem conta? Entre agora!" />
        </Container>
    );
}

export default CompanyInformation;
