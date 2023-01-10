import MovieDetail from "./components/MovieDetail";
import { useParams } from "react-router-dom";

export const DetailView = () => {
  const {movieId} = useParams()
  return (
    <>
      <MovieDetail movie_id={movieId}/>
      <AsideList />
    </>
  );
};