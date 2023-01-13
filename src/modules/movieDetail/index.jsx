import Movie from "./components/Movie";
import { useGetDetailQuery } from "../../redux/api/tmdbAPI";

export const DetailView = ({movie_id}) => {
  const { data: result=[], isLoading } =useGetDetailQuery(movie_id) 
  return isLoading ? (
<h3>Cargando...</h3>
 ) : (
   
      <Movie movie={result}/>
  );
};