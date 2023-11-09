import { useContext } from 'react'
import { Banner } from "./components/Banner/index";
import { CoffeeList } from "./components/CoffeeList";
import { HomeContainer } from "./styles";
import { CartContext } from '../../contexts/CartContext';

export function Home() {
  useContext(CartContext)

  return (
    <HomeContainer>
      <Banner />
      <CoffeeList />
    </HomeContainer>
  )
}