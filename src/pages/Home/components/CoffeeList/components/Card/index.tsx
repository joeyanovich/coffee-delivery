import { CardContainer } from "./styles";

import  americano  from '../../../../../../../public/americano.png'
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
      <h3>Expresso Tradicional</h3>
      <span>O tradicional café feito com água quente e grãos moídos</span>
      <footer>
        <input type="number" />
      </footer>
    </CardContainer>
  )
}