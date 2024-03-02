import Header from './header';
import { fireEvent, render, screen } from "@testing-library/react";
import * as loggout from '../../utils/loggout';
import CustomRender from '../../utils/custom-render';

describe("Header Component", () => {

    it("should render an image with Logo alt", () => {
        render(<CustomRender><Header /></CustomRender>);
        screen.getByAltText("Logo")
    });

    it("should render a exit button", () => {
        render(<CustomRender><Header /></CustomRender>);
        screen.getByText("Sair")
    });

    it("should call loggout function on click", () => {
        render(<CustomRender><Header /></CustomRender>);
        const loggoutMock = jest.spyOn(loggout, 'default');
        const exitButton = screen.getByText('Sair');
        fireEvent.click(exitButton);

        expect(loggoutMock).toHaveBeenCalled()

    });
});
