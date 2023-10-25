import { Minus, Plus, Trash } from "phosphor-react";
import { AmountQuantity, ButtonIcon, InputCountContainer, QuantityContainer, RemoveButton } from "./styles";

export function InputCount() {
  return (
    <QuantityContainer>
      <InputCountContainer>
      <ButtonIcon>
        <Minus size={14} />
      </ButtonIcon>
      <AmountQuantity>
        1
      </AmountQuantity>
      <ButtonIcon>
        <Plus size={14} />
      </ButtonIcon>
    </InputCountContainer>
    <RemoveButton>
      
      <Trash size={16} />
      Remover
    </RemoveButton>
    </QuantityContainer>
    
  )
}