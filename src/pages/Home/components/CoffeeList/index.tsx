import { Card } from "./components/Card";
import { CardsList, CoffeeListContainer } from "./styles";

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
      <h2>Nossos cafés</h2>
      <CardsList>
        <Card
        coffee={{
          id: 1,
          img: tradicional,
          tag:["TRADICIONAL"],
          title:"Expresso Tradicional",
          description:"O tradicional café feito com água quente e grãos moídos",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 2,
          img: americano,
          tag:["TRADICIONAL"],
          title:"Expresso Americano",
          description:"Expresso diluído, menos intenso que o tradicional",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 3,
          img: cremoso,
          tag:["TRADICIONAL"],
          title:"Expresso Cremoso",
          description:"Café expresso tradicional com espuma cremosa",
          price:"9,90",
        }} 
        />
        <Card
        coffee={{
          id: 4,
          img: cafeGelado,
          tag:["TRADICIONAL", "GELADO"],
          title:"Expresso Gelado",
          description:"Bebida preparada com café expresso e cubos de gelo",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 5,
          img: cafeComLeite,
          tag:["TRADICIONAL", "COM LEITE"],
          title:"Café com Leite",
          description:"Meio a meio de expresso tradicional com leite vaporizado",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 6,
          img: latte,
          tag:["TRADICIONAL", "COM LEITE"],
          title:"Latte",
          description:"Uma dose de café expresso com o dobro de leite e espuma cremosa",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 7,
          img: capuccino,
          tag:["TRADICIONAL", "COM LEITE"],
          title:"Capuccino",
          description:"Bebida com canela feita de doses iguais de café, leite e espuma",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 8,
          img: macchiato,
          tag:["TRADICIONAL", "COM LEITE"],
          title:"Macchiato",
          description:"Café expresso misturado com um pouco de leite quente e espuma",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 9,
          img: mocaccino,
          tag:["TRADICIONAL", "COM LEITE"],
          title:"Mocaccino",
          description:"Café expresso com calda de chocolate, pouco leite e espuma",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 10,
          img: chocolateQuente,
          tag:["ESPECIAL", "COM LEITE"],
          title:"Chocolate Quente",
          description:"Bebida feita com chocolate dissolvido no leite quente e café",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 11,
          img: cubano,
          tag:["ESPECIAL", "ALCOÓLICO", "GELADO"],
          title:"Cubano",
          description:"Drink gelado de café expresso com rum, creme de leite e hortelã",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 12,
          img: havaiano,
          tag:["ESPECIAL"],
          title:"Havaiano",
          description:"Bebida adocicada preparada com café e leite de coco",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 13,
          img: arabe,
          tag:["ESPECIAL"],
          title:"Árabe",
          description:"Bebida preparada com grãos de café árabe e especiarias",
          price:"9,90",
        }}
        />
        <Card
        coffee={{
          id: 14,
          img: irlandes,
          tag:["ESPECIAL", "ALCOÓLICO"],
          title:"Irlandês",
          description:"Bebida a base de café, uísque irlandês, açúcar e chantilly",
          price:"9,90",
        }}
        />
      </CardsList>
    </CoffeeListContainer>
  )
}