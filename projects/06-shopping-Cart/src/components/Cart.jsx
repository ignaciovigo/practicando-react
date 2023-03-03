import { useId } from 'react'
import useCart from '../hooks/useCart'
import './Cart.css'
import { ClearCartIcon, CartIcon, RemoveFromCartIcon } from './Icons'

function CartItem ({ thumbnail, price, title, quantity, addToCart, removeToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title}/>
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeToCart}> <RemoveFromCartIcon /></button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { cart, clearCart, addToCart, removeToCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartCheckboxId} />
      <aside className='cart'>
        <ul>
          {cart.map((e) => (
            <CartItem {...e} addToCart={() => addToCart(e)} removeToCart={() => removeToCart(e)} key={e.id} />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
