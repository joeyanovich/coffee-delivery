import { CurrencyDollarSimple, MapPinLine, Bank, CreditCard, Money } from "phosphor-react";
import { AddressContainer, LeftContainer, LeftContentContainer, PaymentContainer, PaymentMethodContainer, TitleContent } from "./styled";
import { Form } from "./Form";
import { PayButton } from "./PaymentMethodButton";

export function CompleteTheOrder() {
  return (
    <LeftContainer>
      <h2>Complete seu pedido</h2>
        <LeftContentContainer>
          <AddressContainer>
            <TitleContent>
              <div>
                <MapPinLine size={22} />
              </div>
              <div>
                <h5>Endereço de Entrega</h5>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </TitleContent>
            <Form />
          </AddressContainer>
          <PaymentContainer>
            <TitleContent>
              <div>
                <CurrencyDollarSimple size={22} />
              </div>
              <div>
                <h5>Pagamento</h5>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </TitleContent>
            <PaymentMethodContainer>
              <PayButton id="credito" icon={<CreditCard />} text="Cartão de Crédito"/>
              <PayButton id="debito" icon={<Bank />} text="Cartão de Débito"/>
              <PayButton id="dinheiro" icon={<Money />} text="Dinheiro"/>
            </PaymentMethodContainer>
          </PaymentContainer>
      </LeftContentContainer>
    </LeftContainer>    
  )
}