import useCart from '../hooks/useCart'

function Footer ({ filters }) {
  const { cart } = useCart()
  return (
    <footer className='futer'>
      <h4>Prueba tecnica de react</h4>
      <h5>Shopping cart con useContext & useReducer</h5>
      <span>filtros activos: {JSON.stringify(filters, null, 2)} </span>
      <ul>
        {cart.map((e) => {
          return <li key={e.id + 'm'}>{e.title} - Qty:{e.quantity}</li>
        })}
      </ul>
    </footer>
  )
}

export default Footer
