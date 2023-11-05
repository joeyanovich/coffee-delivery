import styled from "styled-components";

export const InfoDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  padding: 2.5rem;

  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(${props => props.theme['background']}, ${props => props.theme['background']}) padding-box padding-box, linear-gradient(90deg, ${props => props.theme['yellow']}, ${props => props.theme['purple']}) border-box border-box;

  /* border: 1px solid transparent;
  border-image: linear-gradient(45deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);
  border-image-slice: 1;
  border-radius: 6px 36px 6px 36px; */
  `
const PositionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    border-radius: 50%;

    color: ${props => props.theme['background']};;
  }

  span {
    font-weight: bold;
  }
`

export const DeliveryAddress = styled(PositionContent)`
  svg {
    background-color: ${props => props.theme['purple']};
  }
`

export const DeliveryForecast = styled(PositionContent)`
  svg {
    background-color: ${props => props.theme['yellow']};
  }
`

export const PaymentMethod = styled(PositionContent)`
  svg {
      background-color: ${props => props.theme['yellow-dark']};
    }
`

export const TextContent = styled.div``