import styled from "styled-components";

export const AddressInfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    
    color: ${props => props.theme['base-subtitle']};
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    width: 100%;
  }
  .address, .payment {
    max-width: 40rem;
  }
  .address, .payment {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    border-radius: 6px;

    padding: 2.5rem;

    background-color: ${props => props.theme['base-card']};
  }
  .subtitle {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .subtitle .icon-address {
    color: ${props => props.theme['yellow-dark']};
  }
  .subtitle .icon-payment {
    color: ${props => props.theme['purple']};
  }
  .subtitle h5 {
    font-weight: 400;

    color: ${props => props.theme['base-subtitle']};
  }
  .subtitle p {
    font-size: 0.875rem;
  }
  .buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`