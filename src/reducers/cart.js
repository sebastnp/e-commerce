// 1. creamos un estado inicial
// ya que podemos tener un localStorage
export const initialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

// function to update the state in the localStorage
const updateState = (newState) => {
  return window.localStorage.setItem('cart', JSON.stringify(newState))
}

// 2. creamos la funcion reducer
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload, quantity, price } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload // sacamos el id del producto
      // verificamos si el producto existe en el carrito
      const productInCartIndex = state.findIndex((product) => product.id === id)
      // si si lo encontro
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)
        // para actualizar el precio y qty
        newCart[productInCartIndex].quantity = quantity
        newCart[productInCartIndex].price = price
        updateState(newCart)
        return newCart
      }
      // si es la primera vez que se añade
      const newCart = [
        ...state,
        {
          ...actionPayload, // es el producto
          quantity,
          price,
        },
      ]
      updateState(newCart)
      return newCart
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newCart = state.filter((item) => item.id !== id)
      updateState(newCart)
      return newCart
    }
    case 'CLEAR_CART': {
      updateState([])
      return []
    }
  }
  return state // IMPORTANTE
}
