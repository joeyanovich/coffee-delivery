import { Minus, Plus } from "phosphor-react";
import { AmountQuantity, ButtonIcon, InputCountContainer, QuantityContainer } from "./styles";

interface InputCountProps {
  size?: 'small' | 'large'
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export function InputCount({ size = 'small', quantity, onIncrement, onDecrement }: InputCountProps) {
  // const [number, setNumber] = useState(1)

  // const handleIncrement = () => {
  //   setNumber(number + 1)
  // }

  // const handleDecrement = () => {
  //   if (number > 1) {
  //     setNumber(number -1)
  //   }
  // }


  return (
    <QuantityContainer>
      <InputCountContainer>
      <ButtonIcon size={size} onClick={onDecrement}>
        <Minus size={14} />
      </ButtonIcon>
      <AmountQuantity readOnly value={quantity} />
      <ButtonIcon size={size} onClick={onIncrement}>
        <Plus size={14} />
      </ButtonIcon>
      </InputCountContainer>
    </QuantityContainer>
    
    
  )
}