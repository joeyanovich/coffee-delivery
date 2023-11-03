
import { CompleteTheOrder } from "./components/CompleteTheOrder";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteTheOrder />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}