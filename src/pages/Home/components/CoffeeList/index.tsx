import { Card } from "./components/Card";
import { CoffeeListContainer } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <div className="cards-list">
        <Card />
      </div>
    </CoffeeListContainer>
  )
}