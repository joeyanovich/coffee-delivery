import { Trash } from 'phosphor-react';
import cafe from '../../../../../../public/americano.png'
import { ItemCartContainer } from "./styled";

export function ItemCart() {
  return (
    <ItemCartContainer>
      <div className="info-coffee">
        <img className='img-coffee' src={cafe} />
        <div className="content">
          <span>Expresso Tradicional</span>
          <div className="amount-coffee">
            <div>quantidade</div>
            <button>
              <Trash size={16} />
              Remover
            </button>
          </div>
        </div>
      </div>
      <div className="price">
        <p>R$ 9,90</p>
      </div>
    </ItemCartContainer>
  )
}