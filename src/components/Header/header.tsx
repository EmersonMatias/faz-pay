import { Container } from "./styled";
import Logo from "../../assets/img/Logo.png"
import { ExitButton } from "../ui/button";
import Loggout from "../../utils/loggout";

export default function Header() {
    return (
        <Container>
            <img src={Logo} alt="Logo"/>
            <ExitButton onClick={() => Loggout()}>Sair</ExitButton>
        </Container>
    )
}