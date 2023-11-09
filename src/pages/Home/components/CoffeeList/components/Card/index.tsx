import { InputCount } from "../../../../../../components/InputCount";
import { AddToCartButton, CardContainer, CardText, CartCount, FooterContainer, PriceContainer, TagContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

export interface Coffees {
  img: string
  tag: string[]
  title: string
  description: string
  price: string

}
interface CardsProps {
  coffee: Coffees
}

export function Card({ coffee }: CardsProps) {
  return (
    <CardContainer>
      <img src={coffee.img} />
      <TagContainer>
        {coffee.tag.map((tagItem, index) => (
          <span key={index}>{tagItem}</span>
        ))}
      </TagContainer>
        <CardText>
          <h3>{coffee.title}</h3>
          <p>{coffee.description}</p>
        </CardText>
        <FooterContainer>
          <PriceContainer>
            R$ <span>{coffee.price}</span>
          </PriceContainer>
          <CartCount>
            <InputCount size="large" />
            <AddToCartButton>
              <ShoppingCart size={22} weight="fill"/>
            </AddToCartButton>
          </CartCount>
        </FooterContainer>
    </CardContainer>
  )
}