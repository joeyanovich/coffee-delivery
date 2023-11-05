import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LocalizationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

// const AlignPosition = styled.div`
//   display: flex;
//   align-items: center;

//   padding: 0.5rem;
// `

export const CityContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;

  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple']};

  span {
    font-size: 0.875rem;

    color: ${props => props.theme['purple-dark']};
  }
`

export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  
  &:hover span {
    background-color: ${props => props.theme['purple']};
    color: ${props => props.theme['purple-light']};
  }
  span {
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
    transition: 0.3s ease-in-out;

    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};

  &:hover {
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple']};
  }
`