
import MoviesList from "./components/moviesList/MoviesList";
import AsideList from "./components/Aside/AsideList"


export const PopularView = () => {
  return (
    <>
    <section>
    <h1>Most Popular Movies</h1>
    <h3>As determined by IMDb Users</h3>
      <MoviesList filter="popular" page="1"/>
    </section>
    
    <AsideList/>
    </>
  )
}

export const NewestView = () => {
  return (
    <>
    <section>
    <h1>Most Newest Movies</h1>
    <h3>As determined by IMDb Users</h3>
      <MoviesList filter="now_playing" page="1"/>
    </section>
      
      <AsideList />
    </>
  );
};

export const TopRatedView = () => {
  return (
    <>
    <section>
    <h1>Most Top Rated Movies</h1>
    <h3>As determined by IMDb Users</h3>
      <MoviesList filter="top_rated" page="1"/>
    </section>
      
      <AsideList />
    </>
  );
};




