import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../../public/logo-coffee-delivery.svg'

import { CartButton, CartContainer, CityContainer, HeaderContainer, LocalizationInfo } from "./styles";
import { NavLink } from 'react-router-dom'


export function Header() {
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logo} alt="Logomarca do Coffee Delivery. Um copo de café roxo com o nome ao lado" />
      </NavLink>
      <LocalizationInfo>
        <CityContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </CityContainer>
        <NavLink className='cart-container' to='/cart'>
          <CartContainer>
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
            <span>3</span>
          </CartContainer>          
        </NavLink>
      </LocalizationInfo>
    </HeaderContainer>
  )
}