import {useGetMoviesQuery} from '../../../redux/api/tmdbAPI'
// import MoviesNewest from './MoviesNewest'
import Movies from '../../../components/moviesCard/Movies'


const NewestList = () => {
    const {data:result=[], isLoading}=useGetMoviesQuery({filter
    :'now_playing', page:'1'})
  return isLoading ? <h3>Cargando...</h3>: result.results.map(movie => (<Movies movie={movie} key={movie.id}/>))
}

export default NewestList