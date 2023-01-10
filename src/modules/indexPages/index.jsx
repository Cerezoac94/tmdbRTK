import AsideList from "../../components/aside/asideList"
import MoviesList from "../../components/movies/moviesList/MoviesList"


export const PopularView = () => {
  return (
    <>
    <MoviesList filter="popular" page="1"/>
    <AsideList/>
    </>
  )
}

export const NewestView = () => {
  return (
    <>
      <MoviesList filter="now_playing" page="1"/>
      <AsideList />
    </>
  );
};

export const TopRatedView = () => {
  return (
    <>
      <MoviesList filter="top_rated" page="1"/>
      <AsideList />
    </>
  );
};




