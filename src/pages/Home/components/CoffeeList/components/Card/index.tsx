import { CardContainer } from "./styles";

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
      <div className="img">
        <img src={img} />
      </div>
      <div className="tag">
        {tag.map((tagItem, index) => (
          <span key={index}>{tagItem}</span>
        ))}
        {/* <span>{tag}</span> */}
      </div>
      <div className="content">
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <footer>
          <div className="price">
            R$ <span>{price}</span>
          </div>
          <div className="input-number">
            <input type="number" />
            <button className="icon-cart">
              <ShoppingCart size={22} weight="fill"/>
            </button>
          </div>
        </footer>
      </div>
    </CardContainer>
  )
}