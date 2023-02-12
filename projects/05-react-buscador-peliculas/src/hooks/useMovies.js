import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMovies, setErrorMovies] = useState(null)
  const prevSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === prevSearch.current) return
      try {
        setLoading(true)
        setErrorMovies(null)
        prevSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setErrorMovies(e.message)
      } finally {
        setLoading(false)
      }
    }
  }, [])

  const sortedMovies = useMemo(() => {
    console.log('render sorted')
    return sort
      ? movies.sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}