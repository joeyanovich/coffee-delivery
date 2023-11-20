import { CurrencyDollarSimple, MapPinLine, Bank, CreditCard, Money } from "phosphor-react";
import { AddressContainer, LeftContainer, LeftContentContainer, PaymentContainer, PaymentMethodContainer, TitleContent } from "./styled";
import { Form } from "./Form";
import { PaymentMethodInput } from "./PaymentMethodButton";
import { useFormContext } from "react-hook-form";

export function CompleteTheOrder() {
  const { register, formState: { errors } } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

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
              <PaymentMethodInput
                id="credit"
                key="credit"
                value="Cartão de Crédito" 
                icon={<CreditCard />}
                text="Cartão de Crédito"
                {...register('paymentMethod')}
              />
              <PaymentMethodInput
                id="debit"
                key="debit"
                value="Cartão de Débito"
                icon={<Bank />}
                text="Cartão de Débito"
                {...register('paymentMethod')}
              />
              <PaymentMethodInput
                id="money"
                key="money"
                value="Dinheiro"
                icon={<Money />}
                text="Dinheiro"
                {...register('paymentMethod')}
              />
              {paymentMethodError && <p>{paymentMethodError}</p>}
            </PaymentMethodContainer>
          </PaymentContainer>
      </LeftContentContainer>
    </LeftContainer>    
  )
}