const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const resp = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await resp.json()
    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
