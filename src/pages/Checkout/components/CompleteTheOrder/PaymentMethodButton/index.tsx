import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { PayButtonContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  icon: ReactNode;
  text: string;
}
// interface PaymentMethodInputProps {
//   id: string;
//   icon: ReactNode;
//   text: string;
// }

// export function PayButton({ id, icon, text }: PaymentMethodInputProps) {
//   return (
//     <PayButtonContainer>
//       <input type="radio" name="paymentMethod" id={id}/>
//       <label htmlFor={id}>
//         {icon}
//         {text}
//       </label>
//     </PayButtonContainer>
//   )
// }

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, text, ...props }, ref) => {
  return (
    <PayButtonContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        {icon}
        {text}
      </label>
    </PayButtonContainer>
  )
})