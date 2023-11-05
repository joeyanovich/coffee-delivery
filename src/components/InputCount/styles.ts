import styled from "styled-components";

interface ButtonProps {
  size: 'small' | 'large'
}

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const InputCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;

  background-color: ${props => props.theme['base-button']};

`

export const ButtonIcon = styled.div<ButtonProps>`

display: flex;
align-items: center;
justify-content: center;

border-radius: 6px;
cursor: pointer;
/* padding: 1rem 0.25rem; */
/* padding: 0.75rem 0.25rem; */
padding: ${props => props.size === 'small' ? '0.5625rem 0.25rem 0.5625rem 0.25rem' : '0.75rem 0.25rem'};


transition: 0.3s ease-in-out;

svg {
  transition: 0.3s ease-in-out;
  
    color: ${props => props.theme['purple']};
}

&:hover {
  color: ${props => props.theme['purple-dark']};
  background-color: ${props => props.theme['base-hover']};
}
`

export const AmountQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
`
