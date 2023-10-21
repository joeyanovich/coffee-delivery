import { Bank, CreditCard, Money } from "phosphor-react";
import { Geral, PayButtonContainer, PayInfocontainer } from "./styles";

export function PayButton() {
  return (
    <>
    <PayButtonContainer>
      <input type="radio" name="payment" id="credito"/>
      <label htmlFor="credito">
        <CreditCard size={16} />
        <p>Cartão de Crédito</p>
      </label>
    </PayButtonContainer>
    <PayButtonContainer>
      <input type="radio" name="payment" id="debito"/>
      <label htmlFor="debito">
        <CreditCard size={16} />
        <p>Cartão de Débito</p>
      </label>
    </PayButtonContainer>
    <PayButtonContainer>
      <input type="radio" name="payment" id="dinheiro"/>
      <label htmlFor="dinheiro">
        <CreditCard size={16} />
        <p>Dinheiro</p>
      </label>
    </PayButtonContainer>
    </>
    
  )
}