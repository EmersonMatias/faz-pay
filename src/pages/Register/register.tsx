import InputForm from "../../components/Input-Form/input-form";
import Logo from "../../assets/img/Logo.png"
import { useForm } from "react-hook-form";
import { Container } from "./styled";
import { ImgLogo } from "../Login/styled";
import { FormContainer, Form, FormContainerLogin } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { useRegisterUser } from "../../hooks/users-hooks";
import { CustomLink } from "../../components/ui/custom-link";
import { SucessMessage } from "../../components/ui/sucess-message";
import { resetMutation } from "../../utils/reset-mutation";

export default function Register() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>()
    const { mutate: registerUser, isSuccess, reset: resetRegister } = useRegisterUser(reset)

    resetMutation(isSuccess, resetRegister)

    return (
        <Container>
            <FormContainerLogin>

                <ImgLogo src={Logo} alt="Logo" />

                <Form onSubmit={handleSubmit((e) => registerUser(e))}>

                    <InputForm
                        label="Nome completo"
                        name="name"
                        register={register}
                        type="text"
                        required="Digite seu nome completo"
                        minLength={{
                            value: 5,
                            message: "Digite seu nome completo"
                        }}
                        message={errors?.name?.message}
                    />

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

                    <Button>Cadastrar</Button>
                </Form>
                <p className="loginMessage">
                    Já possui uma conta?
                    <CustomLink to={"/"} data-testid="to-login-page">Login</CustomLink>
                </p>

            </FormContainerLogin>

            {isSuccess && <SucessMessage>Conta criada com sucesso!</SucessMessage>}
        </Container>
    )
}

export interface RegisterForm {
    name: string,
    email: string,
    password: string
}