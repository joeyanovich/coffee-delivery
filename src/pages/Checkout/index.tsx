
import { CompleteTheOrder } from "./components/CompleteTheOrder";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm, FormProvider} from 'react-hook-form'

enum PaymentMetohd {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  // complement: zod.string().min(1, "Informe o complemento"),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe o estado"),
  paymentMethod: zod.nativeEnum(PaymentMetohd, {
    errorMap:() => {
      return { message: "Informe o método de pagamento" }
    }
  })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteTheOrder />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}