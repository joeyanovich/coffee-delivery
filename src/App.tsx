import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Router } from './Router';
import { CartContextProvider } from './contexts/CartContext';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
