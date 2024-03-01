import { useForm } from "react-hook-form";
import { Container, ImgLogo } from "./styled";
import InputForm from "../../components/Input-Form/input-form";
import { Button } from "../../components/ui/button";
import Logo from "../../assets/img/Logo.png"
import { FormContainer, Form } from "../../components/ui/form";
import { CustomLink } from "../../components/ui/custom-link";
import { useLoginUser } from "../../hooks/users-hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie"


export default function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm<LoginForm>()
    const { mutate: login, data: user } = useLoginUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.length === 1) {

            Cookies.set("email", user[0].email)
            navigate("/home")
        }
    }, [user, navigate])

    return (
        <Container>

            <FormContainer>

                <ImgLogo src={Logo} />

                <Form onSubmit={handleSubmit((e) => login(e))}>
                    <InputForm
                        label="Email"
                        name="email"
                        register={register}
                        type="email"
                        required="Digite um email"
                        message={errors?.email?.message}
                    />

                    <InputForm
                        label="Senha"
                        name="password"
                        register={register}
                        type="password"
                        required="Digite um senha"
                        message={errors?.password?.message}
                    />

                    <Button>Logar</Button>

                    {user?.length === 0 && <p className="errorLogin">Email ou senha incorretos!</p>}
                </Form>

                <p className="signupMessage">Não tem uma conta? <CustomLink to={"/register"}>Criar minha conta</CustomLink></p>
            </FormContainer>

        </Container>
    )
}

export interface LoginForm {
    email: string,
    password: string
}