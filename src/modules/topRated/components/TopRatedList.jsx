import {useGetMoviesQuery} from '../../../redux/api/tmdbAPI'
// import TopRatedMovies from './TopRatedMovies'
import Movies from '../../../components/moviesCard/Movies'

const TopRatedList = () => {
    const {data:result=[], isLoading} = useGetMoviesQuery({filter:'top_rated', page:'1'})
  return isLoading ? <h3>Cargando...</h3>: result.results.map(movie => <Movies movie={movie} key={movie.id}/>)
}
export default TopRatedList

