import styled from "styled-components";

export const CoffeeListContainer = styled.main`
  max-width: 70rem;
  margin: auto;
  
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 2rem;

    margin-top: 2rem;
    margin-bottom: 3.375rem;

    color: ${props => props.theme['base-subtitle']};
  }

  @media  (max-width: 70rem) {
    margin: 0 1.5rem 0;

    h2 {
      text-align: center;
    }
  }

  @media (max-width: 30rem) {
      margin-top: 5rem;
  }
`

export const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media  (max-width: 70rem) {
    justify-content: center;
  }
`