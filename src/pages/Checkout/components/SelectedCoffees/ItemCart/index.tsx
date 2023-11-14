import cafe from '../../../../../../public/americano.png'
import { AddAndRemove, ContentContainer, InfoCardNameAndQuantity, ItemCartContainer, Price, RemoveButton } from "./styled";
import { InputCount } from '../../../../../components/InputCount';
import { Trash } from 'phosphor-react';
import { CartItem } from '../../../../../contexts/CartContext';

// interface InputCountProps {
//   size?: 'small' | 'large'
//   quantity: number
//   onIncrement: () => void
//   onDecrement: () => void
// }

interface ItemCardProps {
  coffee: CartItem
}

export function ItemCart({ coffe }: ItemCardProps) {
// export function ItemCart({ size, quantity, onIncrement, onDecrement }: InputCountProps) {
  return (
    <ItemCartContainer>
      <ContentContainer>
        <img src={} />
        <InfoCardNameAndQuantity>
          <span>Expresso Tradicional</span>
          <AddAndRemove>
            <InputCount size='small' /*onDecrement={onDecrement} onIncrement={onIncrement} quantity={quantity}*/ />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </AddAndRemove>
        </InfoCardNameAndQuantity>
      </ContentContainer>
      <Price>
        <p>R$ 9,90</p>
      </Price>
    </ItemCartContainer>
  )
}