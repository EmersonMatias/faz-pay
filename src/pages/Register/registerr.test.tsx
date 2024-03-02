import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CustomRender from "../../utils/custom-render";
import Register from "./register";
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';


jest.mock('../../hooks/users-hooks', () => ({
    useRegisterUser: jest.fn(() => ({ mutate: jest.fn(), isSuccess: false, reset: jest.fn() }))
}));

describe('Register Component', () => {

    beforeEach(() => {
        render(<CustomRender><Register /></CustomRender>);
    });

    it("should render the register form", () => {
        const nameInput = screen.getByLabelText("Nome completo");
        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Senha");
        const logo = screen.getByAltText("Logo");
        const button = screen.getByText("Cadastrar");
        const loginLink = screen.getByText("Login");

        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
    });

    it('displays error message for invalid input', async () => {
        fireEvent.click(screen.getByText("Cadastrar"));

        await waitFor(() => {
            const inputName = screen.findByText('Digite seu nome completo')
            const inputEmail = screen.findByText('Digite um email')
            const inputPassword = screen.findByText('Digite um senha')

            expect(inputName).toBeVisible
            expect(inputEmail).toBeVisible
            expect(inputPassword).toBeVisible
        });
    });

    it('submits register form with valid inputs', async () => {
        fireEvent.change(screen.getByLabelText('Nome completo'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText('Senha'), { target: { value: 'password123' } });
        fireEvent.click(screen.getByText('Cadastrar'));

        await waitFor(() => {
            const sucessMessage = screen.findByText('Conta criada com sucesso!');

            expect(sucessMessage).toBeVisible
        });
    });

    it("should change page on click login", async () => {
        const toLoginPage = screen.getByTestId("to-login-page")
        fireEvent.click(toLoginPage)
        
        await waitFor(() => {
            expect(window.location.pathname).toEqual('/');
        });
    })

});
