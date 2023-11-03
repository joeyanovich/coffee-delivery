import { CurrencyDollarSimple, MapPinLine, Bank, CreditCard, Money } from "phosphor-react";
import { AddressInfoContainer } from "./styled";
import { Form } from "./Form";
import { PayButton } from "./PaymentMethodButton";

export function CompleteTheOrder() {
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
              <PayButton id="credito" icon={<CreditCard />} text="Cartão de Crédito"/>
              <PayButton id="debito" icon={<Bank />} text="Cartão de Débito"/>
              <PayButton id="dinheiro" icon={<Money />} text="Dinheiro"/>
            </div>
          </div>
      </div>
    </AddressInfoContainer>    
  )
}