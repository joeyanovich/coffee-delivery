import { Banner } from "./components/Banner/index";
import { CoffeeList } from "./components/CoffeeList";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList />
    </HomeContainer>
  )
}