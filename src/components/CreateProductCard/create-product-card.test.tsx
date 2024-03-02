import { fireEvent, render, screen } from "@testing-library/react";
import CustomRender from '../../utils/custom-render';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import CreateProductCard from "./create-product-card";

describe("CreateProductCard Component", () => {
    const setCreateProductCardOpen = jest.fn();

    beforeEach(() => {
        render(<CustomRender><CreateProductCard setCreateProductCardOpen={setCreateProductCardOpen} /></CustomRender>);
    });

    it("should render all form fields", async () => {
        expect(screen.getByLabelText("Nome do investimento")).toBeInTheDocument();
        expect(screen.getByLabelText("Preço")).toBeInTheDocument();
        expect(screen.getByLabelText("Categoria do investimento")).toBeInTheDocument();
        expect(screen.getByLabelText("Descrição")).toBeInTheDocument();
        expect(screen.getByText("Criar investimento")).toBeInTheDocument();
    });

    it("should call setCreateProductCardOpen with false when exit icon is clicked", () => {
        const exitIcon = screen.getByAltText("ExitIcon")

        fireEvent.click(exitIcon)

        expect(setCreateProductCardOpen).toHaveBeenCalledWith(false)
    });

    it("should display error messages for invalid inputs", async () => {
        const button = screen.getByText("Criar investimento")
        fireEvent.click(button);

        const nameMessageError = await screen.findByText("Digite o nome do investimento")
        const priceMessageError = await screen.findByText("Digite o preço")
        const categoryMessageError = await screen.findByText("Digite a categoria do investimento")
        const descriptionMessageError = await screen.findByText("Digite a descrição do investimento")

        expect(nameMessageError).toBeInTheDocument();
        expect(priceMessageError).toBeInTheDocument();
        expect(categoryMessageError).toBeInTheDocument();
        expect(descriptionMessageError).toBeInTheDocument();
    });
});
