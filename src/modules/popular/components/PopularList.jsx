// Usar hook endpoint useGetMovie
// Mapear data y enviar como prop a componente presentacional

import {
  useGetMoviesQuery,
  useGetGenresQuery,
} from "../../../redux/api/tmdbAPI";
import { ifPoster } from "../../../utilities/validateContains.utility";
// import MoviesPopular from "./MoviesPopular"
import Movies from "../../../components/moviesCard/Movies";

const PopularList = () => {
  const { data: result = [], isLoading } = useGetMoviesQuery({
    filter: "popular",
    page: "1",
  });
  const { data: genre = [] } = useGetGenresQuery();
  // console.log(result.results);
  // console.log(genre.genres);

  let genresMovie;

  return isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    result.results.filter(ifPoster).map((movie) => (
      //obtener generos let genresMovie = (genres.results.map(genre => genre.id.exist(movie.genre )))

      <Movies movie={movie} key={movie.id} />
    ))

    // genre?.genres?.map((e) => <Movies movie={e.name} key={e.id} />)
  );
};

export default PopularList;
