
import { fireEvent, render, screen } from "@testing-library/react";
import Home from './home';
import CustomRender from '../../utils/custom-render';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

const mockProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
  ];

  jest.mock('../../hooks/products-hooks', () => ({
    useGetAllProducts: jest.fn(() => ({ data: mockProducts, isSuccess: true })),
    useDeleteProduct: jest.fn(() => {
        const callBackFunction = jest.fn()
        return callBackFunction
    }),
    useCreateProduct: jest.fn(() => {
        const callBackFunction = jest.fn()
        return callBackFunction
    }),
  }));

describe('Home Component', () => {

    beforeEach(() => {
        render(<CustomRender><Home /></CustomRender>)
    })

    it('should renders title correctly', () => {
        const title = screen.getByTestId("title")

        expect(title).toBeInTheDocument();
    });

    it('should renders header correctly', () => {
        const header = screen.getByTestId("header")

        expect(header).toBeInTheDocument()
    });

    it('should renders table correctly', async () => {
        const table = screen.getByTestId("table")

        expect(table).toBeInTheDocument()
        
    });

    it('should renders create product button correctly', () => {
        const buttonCreateInvestiments = screen.getByText("Criar Investimento")
        expect(buttonCreateInvestiments).toBeInTheDocument();
    });

    it('should show create form on click create investiment button', () => {
        const buttonCreateInvestiments = screen.getByText("Criar Investimento")
        fireEvent.click(buttonCreateInvestiments);

        const createProductCard = screen.getByTestId("create-product-card")
        expect(createProductCard).toBeInTheDocument();
    });
});
