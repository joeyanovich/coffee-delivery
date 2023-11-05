import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { DeliveryAddress, DeliveryForecast, InfoDeliveryContainer, PaymentMethod, TextContent } from "./styles";

export function InfoDelivery() {
  return (
    <InfoDeliveryContainer>
      <DeliveryAddress>
        <MapPin size={16} weight="fill" />
        <TextContent>
          <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
          <p>Farrapos - Porto Alegre, RS</p>
        </TextContent>
      </DeliveryAddress>
      <DeliveryForecast>
        <Timer size={16} weight="fill" />
        <TextContent>
          <p>Previsão de entrega</p>
          <span>20 min - 30 min</span>
        </TextContent>
      </DeliveryForecast>
      <PaymentMethod>
        <CurrencyDollar size={16} />
        <TextContent>
          <p>Pagamento na entrega</p>
          <span>Cartão de Crédito</span>
        </TextContent>
      </PaymentMethod>
    </InfoDeliveryContainer>
  )
}