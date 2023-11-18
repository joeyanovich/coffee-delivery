import { AddAndRemove, ContentContainer, InfoCardNameAndQuantity, ItemCartContainer, Price, RemoveButton } from "./styled";
import { InputCount } from '../../../../../components/InputCount';
import { Trash } from 'phosphor-react';
import { CartItem } from '../../../../../contexts/CartContext';
import { formatMoney } from "../../../../../utils/formatMoney";
import { useCart } from "../../../../../hooks/useCart";


interface ItemCardProps {
  coffee: CartItem
}

export function ItemCart({ coffee }: ItemCardProps) {
  const { changeCartItemQuantity } = useCart()

  function handleIncrement() {
    changeCartItemQuantity(coffee.id, "increment")
  }
  function handleDecrement() {
    if (coffee.quantity > 1) {
    changeCartItemQuantity(coffee.id, "decrement")
    }
  }

  const totalPriceCoffee = coffee.price * coffee.quantity
  const formatedPrice = formatMoney(totalPriceCoffee)

  return (
    <ItemCartContainer>
      <ContentContainer>
        <img src={`/coffees/${coffee.img}`} />
        <InfoCardNameAndQuantity>
          <span>{coffee.title}</span>
          <AddAndRemove>
            <InputCount quantity={coffee.quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </AddAndRemove>
        </InfoCardNameAndQuantity>
      </ContentContainer>
      <Price>
        <p>R$ {formatedPrice}</p>
      </Price>
    </ItemCartContainer>
  )
}