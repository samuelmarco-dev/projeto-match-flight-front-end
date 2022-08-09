import Header from "../../../utils/Header";
import Button from "../../../utils/Button";
import Paragraph from "../../../utils/Paragraph";
import { arrayPlaceholderSignUpUser } from "../../../utils/Placeholder";
import Container from "../../Global/style";

function UserRegistration() {
    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[0]} />
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[1]} />
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[2]} />
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[3]} />
                    <input type="text" placeholder={arrayPlaceholderSignUpUser[4]} />
                </div>
                <div className="button">
                    <Button conteudo="Cadastrar" />
                </div>
            </form>
            <Paragraph conteudo="Já tem conta? Entre agora!" />
        </Container>
    );
}

export default UserRegistration;
