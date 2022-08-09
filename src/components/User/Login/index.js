import Button from "../../../utils/Button";
import Paragraph from "../../../utils/Paragraph";
import { arrayPlaceholder } from "../../../utils/Placeholder";
import Container from "./style";

function LoginUser() {
    return (
        <Container>
            <header>MatchFlight</header>
            <form>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholder[0]} />
                    <input type="password" placeholder={arrayPlaceholder[1]} />
                </div>
                <div className="button">
                    <Button conteudo="Entrar" tipo="submit" />
                </div>
            </form>
            <Paragraph conteudo="Primeira vez? Cadastre-se" />
        </Container>
    );
}

export default LoginUser;
