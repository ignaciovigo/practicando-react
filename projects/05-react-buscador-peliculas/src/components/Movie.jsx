function Movie ({ movie }) {
  return (
    <li className='lm-item'>
      <figure>
        <h3>{movie.title}</h3>
        <figcaption>{movie.year}</figcaption>
        <img src={movie.img} alt='' />
      </figure>
    </li>
  )
}

export default Movie
