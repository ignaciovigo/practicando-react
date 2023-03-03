import { createContext, useReducer } from 'react'
export const CartContext = createContext()

const intialState = []
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayLoad } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayLoad
      const index = state.findIndex((item) => item.id === id)
      if (index >= 0) {
        const newState = structuredClone(state)
        newState[index].quantity += 1
        return newState // devolvemos el nuevo estado
      }
      return [
        ...state,
        {
          ...actionPayLoad, // product
          quantity: 1
        }]
    }
    case 'REMOVE_TO_CART': {
      const { id } = actionPayLoad
      return state.filter(item => item.id !== id) // devolvemos el estado
    }
    case 'CLEAR_CART':{
      return intialState
    }
  }
  return state
}

// el hook reducer neceista como parametro un reducer  y un initial state
// lo que necesitamos del hook es el state y dispacth
// el metodo dispatch se encarga de enviar las acciones a reducer
export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeToCart = (product) => dispatch({
    type: 'REMOVE_TO_CART',
    payload: product
  })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  const contextValues = {
    cart: state,
    addToCart,
    clearCart,
    removeToCart
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}

/*
useReducer(reducer,initialState)
nos permite manejar un estado de una manera escalable porque recibe en una fx
el estado actual y la action que le brinda lo que tiene que hacer para actualizarla.
generalmente se usa un switch.
como segundo parametro recibe el estado inicial.

transforma el estado a partir de un action para calcular un nuevo estado

el use reducer es interesante usarlo cuando tenemos un estado fragmentado cuando en realidad a traves
de un accion solo queremos actualizar partes de ese state

otra ventaja es que se puede separar totalmente el reducer, importarlo desde otro archivo
*/
