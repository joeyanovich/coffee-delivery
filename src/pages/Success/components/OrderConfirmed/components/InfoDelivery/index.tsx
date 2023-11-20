import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { DeliveryAddress, DeliveryForecast, InfoDeliveryContainer, PaymentMethod, TextContent } from "./styles";
import { OrderData } from "../../../../../Checkout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
interface LocationType {
  state: OrderData
}

export function InfoDelivery() {
  // const { state } = useLocation as unknown as LocationType;
  const { state } = useLocation<LocationType>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>

  return (
    <InfoDeliveryContainer>
      <DeliveryAddress>
        <MapPin size={16} weight="fill" />
        <TextContent>
          <p>Entrega em <span>{state?.street}, {state.number}</span></p>
          <p>{state.district} - {state.city}, {state.uf}</p>
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
          <span>{state.paymentMethod}</span>
        </TextContent>
      </PaymentMethod>
    </InfoDeliveryContainer>
  )
}