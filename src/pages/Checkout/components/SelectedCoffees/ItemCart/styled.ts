import styled from "styled-components";

export const ItemCartContainer = styled.div`
  max-width: 23rem;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;

  display: flex;

  background-color: ${props => props.theme['base-card']};

  .info-coffee {
    display: flex;
    gap: 1.25rem;
  }
  .img-coffee{
    width: 4rem;
  }
  .content {
    color: ${props => props.theme['base-subtitle']};
  }
  .amount-coffee {
    margin-top: 0.5rem;

    display: flex;
    gap: 0.5rem ;
  }
  .amount-coffee button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;

    border: none;
    border-radius: 6px;
    cursor: pointer;

    text-transform: uppercase;
    font-size: 0.75rem;

    background-color: ${props => props.theme['base-button']};

    svg {
      color: ${props => props.theme['purple']};
    }
  }
  .price {
    font-weight: bold;
  }
`