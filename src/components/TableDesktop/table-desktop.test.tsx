import { fireEvent, render, screen } from "@testing-library/react";
import CustomRender from '../../utils/custom-render';
import TableDesktop from "./table-desktop";
import { Products, useDeleteProduct } from '../../hooks/products-hooks';

jest.mock('../../hooks/products-hooks', () => ({
    useDeleteProduct: jest.fn(() => {
        const callBackFunction = jest.fn()
        return callBackFunction
    }),
    useUpdateProduct: jest.fn(() => {
        const callBackFunction = jest.fn()
        return callBackFunction
    })
}));

describe('TableDesktop', () => {
    const products = [
        {
            id: '1',
            name: 'Product 1',
            price: 10.99,
            category: 'Category 1',
            description: 'Description 1',
        },
        {
            id: '2',
            name: 'Product 2',
            price: 20.99,
            category: 'Category 2',
            description: 'Description 2',
        },
    ];

    const product: Products = products[0]

    beforeEach(() => {
        render(<CustomRender><TableDesktop products={products} /></CustomRender>);
    }
    );

    it('it should render products correctly', async () => {

        const productId = screen.getByText(product.id)
        const productName = screen.getByText(product.name)
        const productCategory = screen.getByText(product.category)
        const productDescription = screen.getByText(product.description)
        const constPrice = screen.getByText("R$ 10,99")

        expect(productId).toBeInTheDocument();
        expect(productName).toBeInTheDocument();
        expect(productCategory).toBeInTheDocument();
        expect(productDescription).toBeInTheDocument();
        expect(constPrice).toBeInTheDocument();

    });

    it('should call useDeletProduct on click delete product', () => {
        const deleteIcon = screen.getByAltText(`Delete ${product.name}`);
        fireEvent.click(deleteIcon);

        expect(useDeleteProduct).toHaveBeenCalled();
    });

    it('should show edit form on click edit product', () => {
        const editIcon = screen.getByAltText(`Edit ${product.name}`);
        fireEvent.click(editIcon);

        const editProductCard = screen.getByTestId("edit-product-card")
        expect(editProductCard).toBeInTheDocument();
    });
});