import cafe from '../../../../../../public/americano.png'
import { ItemCartContainer } from "./styled";
import { InputCount } from '../../../../../components/InputCount';

export function ItemCart() {
  return (
    <ItemCartContainer>
      <div className="info-coffee">
        <img className='img-coffee' src={cafe} />
        <div className="content">
          <span>Expresso Tradicional</span>
          <InputCount />
        </div>
      </div>
      <div className="price">
        <p>R$ 9,90</p>
      </div>
    </ItemCartContainer>
  )
}