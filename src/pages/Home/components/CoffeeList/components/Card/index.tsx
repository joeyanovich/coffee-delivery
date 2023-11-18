import { useContext, useState } from 'react'
import { InputCount } from "../../../../../../components/InputCount";
import { AddToCartButton, CardContainer, CardText, CartCount, FooterContainer, PriceContainer, TagContainer } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { CartContext } from '../../../../../../contexts/CartContext';
import { formatMoney } from '../../../../../../utils/formatMoney';

export interface Coffee {
  id: number
  img: string
  tag: string[]
  title: string
  description: string
  price: number

}
interface CardsProps {
  coffee: Coffee
}

export function Card({ coffee }: CardsProps) {
  const [quantity, setQuantity] = useState(1)
  const {AddCoffeeToCart} = useContext(CartContext)

  const formatedPrice = formatMoney(coffee.price)

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

  function handleIncrement() {
    setQuantity(state => state + 1)
  }

  function handleAddToCart() {
    const coffeeToAdd= {
      ...coffee,
      quantity
    }
    AddCoffeeToCart(coffeeToAdd)
  }

  return (
    <CardContainer>
      <img src={`/coffees/${coffee.img}`} />
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
            R$ <span>{formatedPrice}</span>
          </PriceContainer>
          <CartCount>
            <InputCount
              size="large"
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              quantity={quantity}
            />
            <AddToCartButton onClick={handleAddToCart}>
              <ShoppingCart size={22} weight="fill"/>
            </AddToCartButton>
          </CartCount>
        </FooterContainer>
    </CardContainer>
  )
}