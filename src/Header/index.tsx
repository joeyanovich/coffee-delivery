import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../public/logo-coffee-delivery.svg'

import { HeaderContainer } from "./styles";


export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div className='cart-info'>
        <div className='city'>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <div className='cart-container'>
          <button className='cart'>
            <ShoppingCart size={22} weight="fill" />
          </button>
          <div className='cart-number'>3</div>
        </div>
        
      </div>
    </HeaderContainer>
  )
}