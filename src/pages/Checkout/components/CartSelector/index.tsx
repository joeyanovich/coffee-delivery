import { ItemCart } from "./ItemCart";
import { CartSelectotContainer } from "./styles";

export function CartSelector() {
  return (
    <CartSelectotContainer>
      <h2>Complete seu pedido</h2>
      <ItemCart />
    </CartSelectotContainer>
  )
}