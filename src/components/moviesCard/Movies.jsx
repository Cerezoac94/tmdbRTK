const Movies = ({ movie }) => {
  // console.log("🚀 ~ file: Movies.jsx:2 ~ Movies ~ movie", movie);

  return (
    <>
      <h1>{movie?.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt={movie.title}
      />
    </>
  );
};
export default Movies;
