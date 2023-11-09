import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeList/components/Card";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  AddCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function AddCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  console.log(cartItems)

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, AddCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}