import { useForm } from "react-hook-form";
import { Container, ImgLogo } from "./styled";
import InputForm from "../../components/Input-Form/input-form";
import { Button } from "../../components/ui/button";
import Logo from "../../assets/img/Logo.png"
import { FormContainer, Form } from "../../components/ui/form";
import { CustomLink } from "../../components/ui/custom-link";


export default function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm<LoginForm>()
    console.log(errors)


    function onSubmitLogin(e: LoginForm) {

        console.log(e)
    }

    return (
        <Container>

            <FormContainer>

                <ImgLogo src={Logo} />

                <Form onSubmit={handleSubmit((e) => onSubmitLogin(e))}>
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
                </Form>

                <p className="signupMessage">Não tem uma conta? <CustomLink to={"/register"}>Criar minha conta</CustomLink></p>
            </FormContainer>



        </Container>
    )
}

interface LoginForm {
    email: string,
    password: string
}