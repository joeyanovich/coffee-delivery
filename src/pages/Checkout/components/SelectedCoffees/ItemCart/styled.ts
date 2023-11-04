import styled from "styled-components";

export const ItemCartContainer = styled.div`
  max-width: 23rem;
  padding: 0.5rem 0.25rem;
  
  display: flex;
  justify-content: space-between;

  background-color: ${props => props.theme['base-card']};
`

export const ContentContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
  }
`

export const InfoCardNameAndQuantity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${props => props.theme['base-subtitle']};
  }
`

export const Price = styled.div`
  font-weight: bold;
`