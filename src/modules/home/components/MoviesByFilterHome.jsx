import { useGetMoviesQuery } from "../../../redux/api/tmdbAPI";
import MoviesHome from "./MoviesHome";
import { ifPoster } from "../../../utilities/validateContains.utility";

const MoviesByFilterHome = ({ filter }) => {
  // console.log(filter);
  const { data: result = [], isLoading } = useGetMoviesQuery({
    filter,
    page: "1",
  });
  return isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    // pendiente de hacer uso de validaciones con utilites (img y ordenamientos)
    result.results
      .filter(ifPoster)
      .slice(0, 4)
      .map((movie) => <MoviesHome movie={movie} key={movie.id} />)
  );
};
export default MoviesByFilterHome;
