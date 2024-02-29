import { useForm } from "react-hook-form";
import { Container, Form, FormContainer, ImgLogo } from "./styled";
import InputForm from "../../components/Input-Form/input-form";
import { Button } from "../../components/ui/button";
import Logo from "../../assets/img/Logo.png"

export default function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm<LoginForm>()
    console.log(errors)


    function onSubmitLogin(e: LoginForm) {

        console.log(e)
    }

    return (
        <Container>

            <FormContainer>
                <ImgLogo src={Logo}/>

                <Form  onSubmit={handleSubmit((e) => onSubmitLogin(e))}>
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
                        minLength={{
                            value: 8,
                            message: "Digite uma senha de no minimo 8 digitos"
                        }}
                        message={errors?.password?.message}
                    />

                    <Button>Logar</Button>
                </Form>
            </FormContainer>

            <p>Não tem uma conta? Criar minha conta</p>

        </Container>
    )
}

interface LoginForm {
    email: string,
    password: string
}