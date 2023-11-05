import { InfoDelivery } from "./components/InfoDelivery";
import { OrderConfirmedContainer, OrderTitle } from "./styles";

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer>
      <OrderTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </OrderTitle>
      <InfoDelivery />
    </OrderConfirmedContainer>
  )
}