import { ItemCart } from "./ItemCart";
import { CartSelectotContainer } from "./styles";

export function CartSelector() {
  return (
    <CartSelectotContainer>
      <h2>Complete seu pedido</h2>
      <div className="container">
        <div className="items-info">
          <ItemCart />
          <div className="line" />
        </div>
        <div className="price-info">
          <div className="items-total">
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </div>
          <div className="delivery">
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>
          <div className="total">
            <p>Total</p>
            <span>R$ 33,20</span>
          </div>
        </div>
        <button>Confirmar Pedido</button>
      </div>
    </CartSelectotContainer>
  )
}