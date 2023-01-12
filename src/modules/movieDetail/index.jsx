import Movie from "./components/Movie";
import { useGetDetailQuery } from "../../redux/api/tmdbAPI";

export const DetailView = ({movie_id}) => {
  const { data: result=[], isLoading } =useGetDetailQuery(movie_id) 
console.log(result)
  return (
    <>
    <h2>ListoM</h2>
      {/* <Movie/> */}
    </>
  );
};