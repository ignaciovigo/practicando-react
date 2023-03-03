import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import useCart from '../hooks/useCart'

function Products ({ products }) {
  const { addToCart, cart, removeToCart } = useCart()
  const isProducts = products.length !== 0
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {isProducts
          ? (
              products.map((product) => {
                const isProductInCart = checkProductInCart(product)
                return (
                  <li key={product.id}>
                    <img src={product.thumbnail} alt='' />
                    <div>
                      <strong>{product.title}</strong> - ${product.price}
                      <div>
                        <button
                          style={{ backgroundColor: isProductInCart ? 'red' : '#06f' }}
                          onClick={() => {
                            isProductInCart
                              ? removeToCart(product)
                              : addToCart(product)
                          }}
                        >
                          {isProductInCart
                            ? (
                              <RemoveFromCartIcon />
                              )
                            : (
                              <AddToCartIcon />
                              )}
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })
            )
          : (
            <p>there are not results!</p>
            )}
      </ul>
    </main>
  )
}

export default Products
