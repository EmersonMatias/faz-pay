import { fireEvent, render, screen } from "@testing-library/react";
import CustomRender from '../../utils/custom-render';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import EditProductCard from "./edit-product-card";

describe("CreateProductCard Component", () => {

    const product = {
        id: 1,
        name: "Product Name",
        price: 10.99,
        category: "Category",
        description: "Product Description"
    };

    const setProduct = jest.fn();

    beforeEach(() => {
        render(<CustomRender><EditProductCard setProduct={setProduct} product={product} /></CustomRender>);
    });

    it("should render all form fields with correct values", () => {
        expect(screen.getByLabelText("Nome do investimento")).toHaveValue(
            product.name
        );
        expect(screen.getByLabelText("Preço")).toHaveValue(product.price.toString());
        expect(screen.getByLabelText("Categoria do investimento")).toHaveValue(
            product.category
        );
        expect(screen.getByLabelText("Descrição")).toHaveValue(
            product.description
        );
    });

    it("should call setProduct when exit icon is clicked", () => {
        const exitIcon = screen.getByAltText("Exit Icon");
        fireEvent.click(exitIcon);
        expect(setProduct).toHaveBeenCalledWith(null);
    });

});
