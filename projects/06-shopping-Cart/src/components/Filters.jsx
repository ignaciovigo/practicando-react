import { useId } from 'react'
import useFilters from '../hooks/useFilters'
import './Filters.css'
function Filters () {
  const { setFilters, filters } = useFilters()
  const minPriceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceId}>Min. Price</label>
        <input
          type='range'
          name='price'
          id={minPriceId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>Category</label>
        <select name='category' id={categoryId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>SmartPhones</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='groceries'>Groceries</option>
          <option value='skincare'>SkinCare</option>
          <option value='fragrances'>Fragrances</option>
        </select>
      </div>
    </section>
  )
}
export default Filters
