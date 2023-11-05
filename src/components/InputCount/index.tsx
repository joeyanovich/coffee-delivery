import { Minus, Plus, Trash } from "phosphor-react";
import { AmountQuantity, ButtonIcon, InputCountContainer, QuantityContainer, RemoveButton } from "./styles";
import { useState } from "react";

interface InputCountProps {
  size?: 'small' | 'large'
}

export function InputCount({ size = 'small' }: InputCountProps) {
  const [number, setNumber] = useState(1)

  const handleIncrement = () => {
    setNumber(number + 1)
  }

  const handleDecrement = () => {
    if (number > 1) {
      setNumber(number -1)
    }
  }


  return (
    <QuantityContainer>
      <InputCountContainer>
      <ButtonIcon size={size} onClick={handleDecrement}>
        <Minus size={14} />
      </ButtonIcon>
      <AmountQuantity>
        {number}
      </AmountQuantity>
      <ButtonIcon size={size} onClick={handleIncrement}>
        <Plus size={14} />
      </ButtonIcon>
      </InputCountContainer>
      {/* <RemoveButton>
        <Trash size={16} />
        Remover
      </RemoveButton> */}
    </QuantityContainer>
    
    
  )
}