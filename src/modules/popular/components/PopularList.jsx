// Usar hook endpoint useGetMovie
// Mapear data y enviar como prop a componente presentacional

import { useGetMoviesQuery } from "../../../redux/api/tmdbAPI"
// import MoviesPopular from "./MoviesPopular"
import Movies from '../../../components/moviesCard/Movies'

const PopularList = () => {
  const {data:result=[], isLoading} = useGetMoviesQuery({filter:"popular", page:"1"})
  return isLoading ? <h3>Cargando...</h3> : result.results.map(movie => (<Movies movie={movie} key={movie.id}/>))
}

export default PopularList