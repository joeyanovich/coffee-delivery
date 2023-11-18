import { useCart } from "../../../../hooks/useCart";
import { ItemCart } from "./ItemCart";
import { ConfirmButton, ContentContainer, Delivery, PriceInfoContainer, SelectedCoffeesContainer, Total, TotalItems } from "./styles";

export function SelectedCoffees() { 
  const { cartItems } = useCart()

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
            <span>R$ 29,70</span>
          </TotalItems>
          <Delivery>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </Delivery>
          <Total>
            <p>Total</p>
            <span>R$ 33,20</span>
          </Total>
        </PriceInfoContainer>
        <ConfirmButton>
          Confirmar Pedido
        </ConfirmButton>
      </ContentContainer>
    </SelectedCoffeesContainer>
  )
}