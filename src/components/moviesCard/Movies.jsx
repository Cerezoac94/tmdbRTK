const Movies = ({ movie}) => {
  // console.log("🚀 ~ file: Movies.jsx:2 ~ Movies ~ movie", movie);
// console.log(`result : ${movie.title},${genres}`)
console.log("movieG _" ,movie);
  return (
    <>
      <h1>{movie?.title}</h1>
      {/* <h3>genero {genres?.name}</h3> */}
      {/* <img
        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt={movie.title}
      /> */}
    </>
  );
};
export default Movies;
