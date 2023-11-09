import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../../public/logo-coffee-delivery.svg'

import { CartButton, CartContainer, CityContainer, HeaderContainer, HeaderContent, LocalizationInfo } from "./styles";
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';


export function Header() {
  const { cartQuantity } = useCart()
 
  return (
    <HeaderContainer>
      <HeaderContent>
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
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              {/* <span>3</span> */}
            </CartContainer>          
          </NavLink>
        </LocalizationInfo>
      </HeaderContent>
    </HeaderContainer>
  )
}