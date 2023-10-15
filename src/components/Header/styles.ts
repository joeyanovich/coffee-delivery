import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .cart-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .city, .cart {
    display: flex;
    align-items: center;

    padding: 0.5rem;
  }

  .city {
    gap: 0.25rem;

    border-radius: 6px;

    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple']};
  }
  .city span {
    font-size: 0.875rem;

    color: ${props => props.theme['purple-dark']};
  }
  .cart-container{
    position: relative;
    cursor: pointer;
  }
  .cart {
    border-radius: 6px;
    border: none;
    cursor: pointer;

    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  }
  .cart-number {
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;

    font-size: 0.75rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;

    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};
  }
`