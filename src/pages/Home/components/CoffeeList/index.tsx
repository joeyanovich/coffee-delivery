import { Card } from "./components/Card";
import { CardsList, CoffeeListContainer } from "./styles";
import { coffees } from "../../../../data/coffees";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CardsList>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </CardsList>
    </CoffeeListContainer>
  )
}