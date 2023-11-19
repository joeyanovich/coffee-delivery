import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeList/components/Card";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  AddCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (cartItemId: number, type: "increment" | "decrement") => void;
  removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0)

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

  // console.log(cartItems)

  function changeCartItemQuantity(cartItemId: number, type: "increment" | "decrement") {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === "increment" ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId)

        if (coffeeExistsInCart >= 0) {
          draft.splice(coffeeExistsInCart, 1)
        }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider value={{ cartItems, cartItemsTotal, cartQuantity, AddCoffeeToCart, changeCartItemQuantity, removeCartItem }}>
      {children}
    </CartContext.Provider>
  )
}