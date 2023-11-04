import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    color: ${props => props.theme['base-subtitle']};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  
  max-width: 100%;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;

  background-color: ${props => props.theme['base-card']};
`
export const Coffees = styled.div`
  max-width: 100%;
`

export const LineContainer = styled.div`
  width: 23rem;
  height: 1px;

  margin-top: 1.5rem;

  background-color:${props => props.theme['base-button']};
`



export const PriceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
const Format = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TotalItems = styled(Format)`

p {
  font-size: 0.875rem;
}
`

export const Delivery = styled(Format)`
p {
  font-size: 0.875rem;
}
`

export const Total = styled(Format)`
  font-size: 1.25rem;
  font-weight: bold;
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: 0.3s ease-in-out;

  background-color: ${props => props.theme['yellow']};
  color: ${props => props.theme['white']};

  &:hover {
    background-color: ${props => props.theme['yellow-dark']};
  }
`