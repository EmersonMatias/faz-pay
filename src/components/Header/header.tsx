import { ImgLogo } from "../../pages/Login/styled";
import { Container } from "./styled";
import Logo from "../../assets/img/Logo.png"

export default function Header() {
    return (
        <Container>
            <ImgLogo src={Logo}/>

        </Container>
    )
}