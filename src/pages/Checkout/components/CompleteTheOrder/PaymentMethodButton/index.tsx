import { ReactNode } from "react";
import { PayButtonContainer } from "./styles";

interface PayButtonProps {
  id: string;
  icon: ReactNode;
  text: string;
}

export function PayButton({ id, icon, text }: PayButtonProps) {
  return (
    <PayButtonContainer>
      <input type="radio" name="payment" id={id}/>
      <label htmlFor={id}>
        {icon}
        {text}
      </label>
    </PayButtonContainer>
  )
}