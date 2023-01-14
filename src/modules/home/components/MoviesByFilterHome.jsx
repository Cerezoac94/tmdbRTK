import { useGetMoviesQuery } from "../../../redux/api/tmdbAPI";
import MoviesHome from "./MoviesHome";
import { ifImage } from "../../../utilities/validateContains.utility";

const MoviesByFilterHome = ({ filter, page }) => {
  const { data: result = [], isLoading } = useGetMoviesQuery({
    filter,
    page,
  });

  return isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    result.results
      .filter(ifImage)
      .slice(0, 5)
      .map((movie, key) => {
        return <MoviesHome movie={movie} key={movie.id} position={key}/>
      } 
      )
  );
};
export default MoviesByFilterHome;
