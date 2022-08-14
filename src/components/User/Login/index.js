import { Link } from "react-router-dom";

import Header from "../../../utils/Header";
import Button from "../../../utils/Button";
import Paragraph from "../../../utils/Paragraph";
import { arrayPlaceholderLogin } from "../../../utils/Placeholder";
import Container from "../../Global/style";

function LoginUser() {
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
            <Link to='/user/sign-up'>
                <Paragraph conteudo="Primeira vez? Cadastre-se" />
            </Link>
        </Container>
    );
}

export default LoginUser;
