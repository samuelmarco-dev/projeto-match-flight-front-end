import Button from "../../../utils/Button";
import Header from "../../../utils/Header";
import Paragraph from "../../../utils/Paragraph";
import { arrayPlaceholderSignUpCompany } from "../../../utils/Placeholder";
import Container from "../../Global/style";

function CompanyRegistration() {
    return (
        <Container>
            <Header conteudo="MatchFlight" />
            <form>
                <div className="input">
                    <input type="text" placeholder={arrayPlaceholderSignUpCompany[0]} />
                    <input type="text" placeholder={arrayPlaceholderSignUpCompany[1]} />
                    <input type="text" placeholder={arrayPlaceholderSignUpCompany[2]} />
                    <input type="text" placeholder={arrayPlaceholderSignUpCompany[3]} />
                    <input type="text" placeholder={arrayPlaceholderSignUpCompany[4]} />
                </div>
                <div className="button">
                    <Button conteudo="Cadastrar" />
                </div>
            </form>
            <Paragraph conteudo="Alterar dados"/>
        </Container>
    );
}

export default CompanyRegistration;
