import Movie from './Movie'
import NoMovieResults from './NoMovieResults'
function ListMovies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    <ul className='lm'>
      {hasMovies
        ? movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))
        : <NoMovieResults />}
    </ul>
  )
}
export default ListMovies
