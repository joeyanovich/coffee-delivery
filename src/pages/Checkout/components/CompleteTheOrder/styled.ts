import styled from "styled-components";

export const LeftContainer = styled.div`
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    
    color: ${props => props.theme['base-subtitle']};
  }
`

export const LeftContentContainer = styled.div` // container
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
`

export const FormatModel = styled.div` //address and payment
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 6px;

  padding: 2.5rem;

  background-color: ${props => props.theme['base-card']};
`
export const TitleContent = styled.div` //subtitle
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  h5 {
    font-size: 1rem;
    font-weight: 400;

    color: ${props => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
  }
`

export const AddressContainer = styled(FormatModel)`
  svg {
    color: ${props => props.theme['yellow-dark']};
  }
` 

export const PaymentContainer = styled(FormatModel)`
  svg {
    color: ${props => props.theme['purple']};
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;

  > p {
        font-size: 0.75rem;
        color: ${props => props.theme['base-error']};
  }
`