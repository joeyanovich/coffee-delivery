import delivery from '../../../public/img-delivery.svg'

import { OrderConfirmed } from "./components/OrderConfirmed";
import { LeftSideContainer, RightSideContainer, SuccessContainer } from "./styles";


export function Success() {

  return (
    <SuccessContainer>
      <LeftSideContainer>
        <OrderConfirmed />
      </LeftSideContainer>
      <RightSideContainer>
        <img src={delivery} alt="Imagem de uma pessoa em uma moto para fazer a entrega do pedido" />
      </RightSideContainer>
    </SuccessContainer>
  )
}