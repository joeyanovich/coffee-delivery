import { AddAndRemove, ContentContainer, InfoCardNameAndQuantity, ItemCartContainer, Price, RemoveButton } from "./styled";
import { InputCount } from '../../../../../components/InputCount';
import { Trash } from 'phosphor-react';
import { CartItem } from '../../../../../contexts/CartContext';


interface ItemCardProps {
  coffee: CartItem
}

export function ItemCart({ coffee }: ItemCardProps) {
  return (
    <ItemCartContainer>
      <ContentContainer>
        <img src={`/coffees/${coffee.img}`} />
        <InfoCardNameAndQuantity>
          <span>{coffee.title}</span>
          <AddAndRemove>
            <InputCount />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </AddAndRemove>
        </InfoCardNameAndQuantity>
      </ContentContainer>
      <Price>
        <p>R$ {}</p>
      </Price>
    </ItemCartContainer>
  )
}