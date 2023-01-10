import { useGetDetailQuery } from "../redux/api/tmdbAPI"

const MovieDetail = ({movie_id}) => {
  const { data: result = [], isLoading } = useGetDetailQuery(movie_id);
  console.log(result);
  return isLoading ?(
    <h3>Cargando...</h3>
  ):(<h3>Cargando...</h3>
  )
}
export default MovieDetail