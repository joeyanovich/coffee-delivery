import styled from "styled-components";

export const CartSelectotContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 28rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    color: ${props => props.theme['base-subtitle']};
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    padding: 2.5rem;

    background-color: ${props => props.theme['base-card']};
  }
  .line {
    width: 23rem;
    height: 1px;

    margin-top: 1.5rem;

    background-color:${props => props.theme['base-button']};
  }
  .price-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .items-total, .delivery, .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .items-total p, .delivery p {
    font-size: 0.875rem;
  }
  .total {
    font-size: 1.25rem;
    font-weight: bold;
  }
  button {
    width: 100%;
    padding: 0.75rem;
    cursor: pointer;
    border-radius: none;

    background-color: ${props => props.theme['yellow']};
  }
`