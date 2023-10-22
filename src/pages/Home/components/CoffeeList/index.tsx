import { Card } from "./components/Card";
import { CoffeeListContainer } from "./styles";

import  americano  from '../../../../../public/americano.png'
import  arabe  from '../../../../../public/arabe.png'
import  cafeComLeite  from '../../../../../public/cafe-com-leite.png'
import  cafeGelado  from '../../../../../public/cafe-gelado.png'
import  capuccino  from '../../../../../public/capuccino.png'
import  chocolateQuente  from '../../../../../public/chocolate-quente.png'
import  cremoso  from '../../../../../public/expresso-cremoso.png'
import  cubano  from '../../../../../public/cubano.png'
import  havaiano  from '../../../../../public/havaiano.png'
import  irlandes  from '../../../../../public/irlandes.png'
import  latte  from '../../../../../public/latte.png'
import  macchiato  from '../../../../../public/macchiato.png'
import  mocaccino  from '../../../../../public/mocaccino.png'
import  tradicional  from '../../../../../public/tradicional.png'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <div className="container">
        <h2>Nossos cafés</h2>
        <div className="cards-list">
          <Card
            img={ tradicional }
            tag={["TRADICIONAL"]}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="9,90"  
          />
          <Card
            img={ americano }
            tag={["TRADICIONAL"]}
            title="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price="9,90"  
          />
          <Card
            img={ cremoso }
            tag={["TRADICIONAL"]}
            title="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
            price="9,90"  
          />
          <Card
            img={ cafeGelado }
            tag={["TRADICIONAL", "GELADO"]}
            title="Expresso Gelado"
            description="Bebida preparada com café expresso e cubos de gelo"
            price="9,90"  
          />
          <Card
            img={ cafeComLeite }
            tag={["TRADICIONAL", "COM LEITE"]}
            title="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
            price="9,90"  
          />
          <Card
            img={ latte }
            tag={["TRADICIONAL", "COM LEITE"]}
            title="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            price="9,90"  
          />
          <Card
            img={ capuccino }
            tag={["TRADICIONAL", "COM LEITE"]}
            title="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            price="9,90"  
          />
          <Card
            img={ macchiato }
            tag={["TRADICIONAL", "COM LEITE"]}
            title="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
            price="9,90"  
          />
          <Card
            img={ mocaccino }
            tag={["TRADICIONAL", "COM LEITE"]}
            title="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
            price="9,90"  
          />
          <Card
            img={ chocolateQuente }
            tag={["ESPECIAL", "COM LEITE"]}
            title="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            price="9,90"  
          />
          <Card
            img={ cubano }
            tag={["ESPECIAL", "ALCOÓLICO", "GELADO"]}
            title="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            price="9,90"  
          />
          <Card
            img={ havaiano }
            tag={["ESPECIAL"]}
            title="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
            price="9,90"  
          />
          <Card
            img={ arabe }
            tag={["ESPECIAL"]}
            title="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
            price="9,90"  
          />
          <Card
            img={ irlandes }
            tag={["ESPECIAL", "ALCOÓLICO"]}
            title="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            price="9,90"  
          />
        </div>
      </div>
    </CoffeeListContainer>
  )
}