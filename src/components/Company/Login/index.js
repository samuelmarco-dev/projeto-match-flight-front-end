import Header from "../../../utils/Header";
import Button from "../../../utils/Button";
import Paragraph from "../../../utils/Paragraph";
import { arrayPlaceholderLogin } from "../../../utils/Placeholder";
import Container from "../../Global/style";

function LoginCompany() {
    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderLogin[0]} />
                    <input type="password" placeholder={arrayPlaceholderLogin[1]} />
                </div>
                <div className="button">
                    <Button conteudo="Entrar" tipo="submit" />
                </div>
            </form>
            <Paragraph conteudo="Primeira vez? Cadastre-se" />
        </Container>
    );
}

export default LoginCompany;
