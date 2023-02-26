import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import ListMovies from './components/ListMovies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'
function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const query = search.trim()
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }
    if (query === '') return setError('Can not search without movie')
    if (query.match(/^\d{5,}$/)) return setError('cant search a movie with 5 numbers or more')
    if (query.length < 3) return setError('The search must have at least 3 letters')
    if (query.match(/^\s+$/)) return setError('Can not search for an empty movie')
    return setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App () {
  const { search, updateSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(debounce(search => {
    getMovies({ search })
  }, 700), [getMovies])

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }
  const handleCheck = () => {
    setSort(!sort)
  }
  return (
    <div className='page wave1'>
      <header>
        <h1> Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='searchContainer'>
            <input onChange={handleChange} value={search} style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} name='query' id='' />
            <button type='submit'>Buscar</button>
          </div>
          <div className='orderMoviesContainer'>
            <label htmlFor='orderMovies'>
              <input type='checkbox' id='orderMovies' onChange={handleCheck} checked={sort} />
              <span className='checkMark'></span>
            </label>
            <p>Mostrar peliculas mas recientes primero</p>
          </div>
        </form>
        {error && <p style={{ color: 'red', margin: '0px' }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando ...</p> : <ListMovies movies={movies} />}
      </main>
    </div>
  )
}

export default App

/*
  useRef -> un hook que te permite crear una referencia mutable que persiste
   durante todo el ciclo de vida del componente. (persiste = su valor no es reiniciado)

  Es util para guardar cualquier valor que se pueda mutar como un id, un elemento del DOM
   , un contador,etc.
   Cada vez que cambia no vuelve a renderizar el componente esa es la principal diff entre useState
   accedemos al valor por medio de la propiedad current.value y al input le asignamos la ref.

  form no contralado x react acceder al form  con el useRef o confiardo en el Dom
  form controlado x react, react maneja el form con los valores de sus inputs mediante un useState.
*/
