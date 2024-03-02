import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme"
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config/queryClient";
import { BrowserRouter } from "react-router-dom";

export default function CustomRender({ children }) {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={defaultTheme}>
                    <MockedProvider>
                        {children}
                    </MockedProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>

    )
}