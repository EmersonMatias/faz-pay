import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CustomRender from "../../utils/custom-render";
import Login from "./login";
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { act } from "react-dom/test-utils";

let mockUser: [] | string[] = []

jest.mock('../../hooks/users-hooks', () => ({
    useLoginUser: jest.fn(() => ({ mutate: jest.fn(), data: mockUser }))
}));

describe('Login Component', () => {

    beforeEach(() => {
        render(<CustomRender><Login /></CustomRender>);
    })

    it("should change page when click create my account", async () => {
        const createAccount = screen.getByTestId("create-account")
        fireEvent.click(createAccount)
        
        await waitFor(() => {
            expect(window.location.pathname).toEqual('/register');
        });

    })

    it("should renders the login form", () => {

        const emailInput = screen.getByLabelText("Email")
        const passwordInput = screen.getByLabelText("Senha")
        const logo = screen.getByAltText("Logo")
        const button = screen.getByText("Logar")
        const paragraph = screen.getByTestId("paragraph")


        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(logo).toBeInTheDocument()
        expect(button).toBeInTheDocument()
        expect(paragraph).toBeInTheDocument()

    })

    it('should displays error message for invalid credentials', async () => {
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'adriana@gmail.com' } });
        fireEvent.change(screen.getByLabelText('Senha'), { target: { value: '12345678' } });
        
        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: 'Logar' }));

        })

        expect(screen.getByText('Email ou senha incorretos!')).toBeInTheDocument();
    });

    it('should submits login form with valid credentials', async () => {
        mockUser = [""]
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Senha'), { target: { value: 'password' } });
        fireEvent.click(screen.getByRole('button', { name: 'Logar' }));

        await waitFor(() => {
            expect(window.location.pathname).toEqual('/home');
        });
    });

  



});