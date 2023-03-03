import { Cart } from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import { CartProvider } from './context/cart'
import useFilters from './hooks/useFilters'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const { filters, filterProducts } = useFilters()

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(initialProducts)} />
      <Footer filters={filters} />
    </CartProvider>
  )
}

export default App
