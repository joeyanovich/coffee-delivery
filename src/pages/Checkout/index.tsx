import { AddressInfo } from "./components/AddressInfo";
import { CartSelector } from "./components/CartSelector";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressInfo />
      <CartSelector />
    </CheckoutContainer>
  )
}