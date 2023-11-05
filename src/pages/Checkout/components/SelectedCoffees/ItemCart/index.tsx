import cafe from '../../../../../../public/americano.png'
import { AddAndRemove, ContentContainer, InfoCardNameAndQuantity, ItemCartContainer, Price, RemoveButton } from "./styled";
import { InputCount } from '../../../../../components/InputCount';
import { Trash } from 'phosphor-react';

export function ItemCart() {
  return (
    <ItemCartContainer>
      <ContentContainer>
        <img src={cafe} />
        <InfoCardNameAndQuantity>
          <span>Expresso Tradicional</span>
          <AddAndRemove>
            <InputCount size='small' />
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