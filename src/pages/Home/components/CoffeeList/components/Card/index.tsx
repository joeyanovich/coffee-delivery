import { InputCount } from "../../../../../../components/InputCount";
import { AddToCartButton, CardContainer, CardText, CartCount, FooterContainer, PriceContainer, TagContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";

interface CardsProps {
  img: string
  tag: string[]
  title: string
  description: string
  price: string
}

export function Card({ img, tag, title, description, price}: CardsProps) {
  return (
    <CardContainer>
      <img src={img} />
      <TagContainer>
        {tag.map((tagItem, index) => (
          <span key={index}>{tagItem}</span>
        ))}
      </TagContainer>
        <CardText>
          <h3>{title}</h3>
          <p>{description}</p>
        </CardText>
        <FooterContainer>
          <PriceContainer>
            R$ <span>{price}</span>
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