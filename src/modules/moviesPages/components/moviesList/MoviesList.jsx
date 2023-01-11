import { useGetMoviesQuery } from "../../../../redux/api/tmdbAPI";
import { orderMoviesRelase } from "../../../../utilities/ordenMoviesRelease.utility";
import { ifPoster } from "../../../../utilities/validateContains.utility";
import Movies from "../moviesCard/Movies";

const MoviesList = ({filter, page}) => {
  const { data: result = [], isLoading } = useGetMoviesQuery({
    filter,
    page,
  });
  return isLoading ? (
    <h3>Cargando...</h3>
  ) : filter === "now_playing" ? (result.results.filter(ifPoster).sort(orderMoviesRelase).map(movie => (<Movies movie={movie} key={movie.id}/>))
  ) :(
    result.results.filter(ifPoster).map(movie => (<Movies movie={movie} key={movie.id}/>))
  )
}
export default MoviesList