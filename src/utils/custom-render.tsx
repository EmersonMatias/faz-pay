import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme"

export default function CustomRender({ children }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MockedProvider>
                {children}
            </MockedProvider>
        </ThemeProvider>
    )
}