import { CurrencyDollarSimple, MapPinLine } from "phosphor-react";
import { AddressInfoContainer } from "./styled";
import { Form } from "./Form";
import { PayButton } from "./PayButton";

export function AddressInfo() {
  return (
    <AddressInfoContainer>
      <h2>Complete seu pedido</h2>
        <div className="container">
          <div className="address">
            <div className="subtitle">
              <div className="icon-address">
                <MapPinLine size={22} />
              </div>
              <div className="text">
                <h5>Endereço de Entrega</h5>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <Form />
          </div>
          <div className="payment">
            <div className="subtitle">
              <div className="icon-payment">
                <CurrencyDollarSimple size={22} />
              </div>
              <div className="text">
                <h5>Pagamento</h5>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
            <div className="buttons">
              <PayButton />
            </div>
          </div>
      </div>
    </AddressInfoContainer>    
  )
}