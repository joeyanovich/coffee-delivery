import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../../public/logo-coffee-delivery.svg'

import { HeaderContainer } from "./styles";
import { NavLink } from 'react-router-dom'


export function Header() {
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logo} alt="Logomarca do Coffee Delivery. Um copo de café roxo com o nome ao lado" />
      </NavLink>
      <div className='cart-info'>
        <div className='city'>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink className='cart-container' to='/cart'>
          <button className='cart'>
            <ShoppingCart size={22} weight="fill" />
          </button>
          <div className='cart-number'>3</div>
        </NavLink>
        
      </div>
    </HeaderContainer>
  )
}