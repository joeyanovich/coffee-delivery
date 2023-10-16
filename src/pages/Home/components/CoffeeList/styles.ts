import styled from "styled-components";

export const CoffeeListContainer = styled.main`
  width: 100%;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 2rem;

    margin-top: 2rem;
    margin-bottom: 3.375rem;

    color: ${props => props.theme['base-subtitle']};
  }
`