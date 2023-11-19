import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ItemCart } from "./ItemCart";
import { ConfirmButton, ContentContainer, Delivery, PriceInfoContainer, SelectedCoffeesContainer, Total, TotalItems } from "./styles";

const DELIVERY_PRICE = 3.5

export function SelectedCoffees() { 
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formatedItemsTotal = formatMoney(cartItemsTotal)
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const formatedCartTotal = formatMoney(cartTotal)

  return (
    <SelectedCoffeesContainer>
      <h2>Cafés selecionados</h2>
      <ContentContainer>
        {cartItems.map((item) => (
          <ItemCart  key={item.id} coffee={item}/>
        ))}
        <PriceInfoContainer>
          <TotalItems>
            <p>Total de itens</p>
            <span>R$ {formatedItemsTotal}</span>
          </TotalItems>
          <Delivery>
            <p>Entrega</p>
            <span>R$ {formatDeliveryPrice}</span>
          </Delivery>
          <Total>
            <p>Total</p>
            <span>R$ {formatedCartTotal}</span>
          </Total>
        </PriceInfoContainer>
        <ConfirmButton disabled={cartQuantity <= 0}>
          Confirmar Pedido
        </ConfirmButton>
      </ContentContainer>
    </SelectedCoffeesContainer>
  )
}