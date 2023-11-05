import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 1.5rem;

    background-color: ${props => props.theme['background']};
    color: ${props => props.theme['base-text']};

    -webkit-font-smoothing: antialiased;

    /* margin-bottom: 1000px; */

  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }
`