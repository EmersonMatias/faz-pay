import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/global-style.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/queryClient.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
