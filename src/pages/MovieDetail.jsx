import { useParams } from "react-router-dom"
import { DetailView } from "../modules/movieDetail"

const MovieDetail = () => {
 const {movie_id} = useParams()
  return (
    <DetailView movie_id={movie_id}/>
  )
}
export default MovieDetail