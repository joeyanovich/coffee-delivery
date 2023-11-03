import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  min-height: 19.375rem;

  padding: 0 1.25rem;
  margin-bottom: 1rem;

  border-radius: 6px 36px 6px 36px;

  background-color: ${props => props.theme['base-card']};
  
  img {
    display: flex;
    justify-content: center;
    width: 7.5rem;
    margin: -1.25rem auto 0;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    margin-top: 0.75rem;

    font-size: 0.625rem;
    font-weight: bold;

    padding: 0.25rem 0.5rem;

    border-radius: 100px;

    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  }
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1rem; 
  margin-bottom: 2.0625rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    text-align: center;
    font-weight: bold;

    color: ${props => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    text-align: center;

    color: ${props => props.theme['base-label']};
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  
  padding-bottom: 1.25rem;

  
`

export const PriceContainer = styled.div`
  font-weight: bold;
  font-size: 0.875rem;

  span {
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  }
`

export const CartCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  color: ${props => props.theme['base-card']};
  background-color: ${props => props.theme['purple-dark']};

  &:hover {
    background-color: ${props => props.theme['purple']};
  }
`