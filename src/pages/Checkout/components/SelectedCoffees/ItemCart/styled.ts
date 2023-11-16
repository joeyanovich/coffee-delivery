import styled from "styled-components";

export const ItemCartContainer = styled.div`
  max-width: 23rem;
  padding: 0.5rem 0.25rem;
  
  display: flex;
  justify-content: space-between;

  background-color: ${props => props.theme['base-card']};

  border-bottom: 1px solid ${props => props.theme['base-button']};
  padding-bottom: 1.5rem;
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

export const RemoveButton = styled.button`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-size: 0.75rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;

  background-color: ${props => props.theme['base-button']};

  svg {
    transition: 0.3s ease-in-out;

    color: ${props => props.theme['purple']};
  }

  &:hover {
    background-color: ${props => props.theme['base-hover']};
    color: ${props => props.theme['text-subtitle']};

    svg {
      color: ${props => props.theme['purple-dark']};
    }
  }
`

export const AddAndRemove = styled.div`
  display: flex;
  gap: 0.8rem;
`