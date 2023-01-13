const MoviesHome = ({movie}) => {
  return (
    <section>
      <picture><img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} /></picture>
      <h1>{movie.title}</h1>
      <h3>{movie.vote_average}</h3>
      <h3>{movie.release_date}</h3>
      
      </section>
  )
}
export default MoviesHome