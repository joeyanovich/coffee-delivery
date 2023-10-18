import { CardContainer } from "./styles";

import  americano  from '../../../../../../../public/americano.png'
import { ShoppingCart } from "phosphor-react";
// import  arabe  from '../../../../../../../public/arabe.png'
// import  cafeComLeite  from '../../../../../../../public/cafeComLeite.png'
// import  cafeGelado  from '../../../../../../../public/cafeGelado.png'
// import  capuccino  from '../../../../../../../public/capuccino.png'
// import  chocolateQuente  from '../../../../../../../public/chocolateQuente.png'
// import  cubano  from '../../../../../../../public/cubano.png'
// import  expressoCremoso  from '../../../../../../../public/expressoCremoso.png'
// import  expresso  from '../../../../../../../public/expresso.png'
// import  havaiano  from '../../../../../../../public/havaiano.png'
// import  irlandes  from '../../../../../../../public/irlandes.png'
// import  latte  from '../../../../../../../public/explatteresso.png'

export function Card() {
  return (
    <CardContainer>
      <div className="img">
        <img src={americano} alt="" />
      </div>
      <div className="tag">
        <span>TRADICIONAL</span>
      </div>
      <div className="content">
        <div className="text">
          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </div>
        <footer>
          <div className="price">
            R$ <span>9,90</span>
          </div>
          <div className="input-number">
            <input type="number" />
            <div className="icon-cart">
              <ShoppingCart size={22} weight="fill"/>
            </div>
          </div>
        </footer>
      </div>
    </CardContainer>
  )
}