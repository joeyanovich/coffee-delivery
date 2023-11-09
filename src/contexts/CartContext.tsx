import { createContext, ReactNode, useState } from "react";
import { Coffees } from "../pages/Home/components/CoffeeList/components/Card";

export interface CartItem extends Coffees {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  )
}