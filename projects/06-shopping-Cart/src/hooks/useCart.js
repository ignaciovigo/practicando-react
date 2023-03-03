import { useContext } from 'react'
import { CartContext } from '../context/cart'

function useCart () {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('use cart must be used within a cartProvider')
  }
  return context
}

export default useCart
