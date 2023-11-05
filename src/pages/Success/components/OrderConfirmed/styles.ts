import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const OrderTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: 63.75rem) {
    text-align: center;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;

    color: ${props => props.theme['yellow-dark']};
  }
  h2 {
    font-size: 1.25rem;
    font-weight: 400;

    color: ${props => props.theme['base-subtitle']};
  }
`