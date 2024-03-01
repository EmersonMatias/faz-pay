import { render, screen } from "@testing-library/react";
import CustomRender from '../../utils/custom-render';
import InputForm from "./input-form.tsx";
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

describe("Input Form", () => {
    it("should render an input with placeholder", async () => {
        const label = "Email"
        const name = "email"
        const type = "text"
        const placeholder = "Digite seu email"
        const register = jest.fn()

        const inputProps = {
            label,
            name,
            type,
            placeholder,
            register,
        };

        render(
            <CustomRender>
                <InputForm {...inputProps} />
            </CustomRender>
        );

        const input  = screen.getByPlaceholderText(placeholder)
        expect(input).toBeInTheDocument()
    });

    it("should render a label", async () => {
        const label = "Email"
        const name = "email"
        const type = "text"
        const placeholder = "Digite seu email"
        const register = jest.fn()

        const inputProps = {
            label,
            name,
            type,
            placeholder,
            register,
        };

        render(
            <CustomRender>
                <InputForm {...inputProps} />
            </CustomRender>
        );

        const labelText  = screen.getByLabelText(label)
        expect(labelText).toBeInTheDocument()
    });

    it("should render a message error", async () => {
        const label = "Email"
        const name = "email"
        const type = "text"
        const placeholder = "Digite seu email"
        const message = "Mensagem de erro" 
        const register = jest.fn()

        const inputProps = {
            label,
            name,
            type,
            placeholder,
            message,
            register,
        };

        render(
            <CustomRender>
                <InputForm {...inputProps} />
            </CustomRender>
        );

        const messageError  = screen.getByText(message)
        expect(messageError).toBeInTheDocument()
    });
});
