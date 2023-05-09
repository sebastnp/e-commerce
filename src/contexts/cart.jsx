import { createContext, React, useState, useReducer } from 'react'
import { cartReducer, initialState } from '../reducers/cart'

// 1.- CREAMOS EL CONTEXTO
export const CartConext = createContext()

// 2.- CREAMOS EL PROVIDER
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // ESTADO PARA ABRIR O CERRAR EL CARRITO
  // y la funcion que cambia el boolean
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const addToCart = (product, quantity, price) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
      quantity,
      price,
    })
  }

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })
  }

  const cleanCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  // Funcion para calcular el precio total del carrito
  const total = state.reduce((acc, prod) => {
    return acc + prod.price
  }, 0)

  return (
    <CartConext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        cleanCart,
        isMenuOpen,
        toggleMenu,
        total,
      }}
    >
      {children}
    </CartConext.Provider>
  )
}
