import cafe from '../../../../../../public/americano.png'
import { ContentContainer, InfoCardNameAndQuantity, ItemCartContainer, Price } from "./styled";
import { InputCount } from '../../../../../components/InputCount';

export function ItemCart() {
  return (
    <ItemCartContainer>
      <ContentContainer>
        <img src={cafe} />
        <InfoCardNameAndQuantity>
          <span>Expresso Tradicional</span>
          <InputCount size='small' />
        </InfoCardNameAndQuantity>
      </ContentContainer>
      <Price>
        <p>R$ 9,90</p>
      </Price>
    </ItemCartContainer>
  )
}