// import {
//   useGetMoviesQuery,
//   useGetGenresQuery,
// } from "../../../redux/api/tmdbAPI";
// import { ifPoster } from "../../../utilities/validateContains.utility";
// import Movies from "../../../components/moviesCard/Movies";

// const PopularList = () => {
//   const { data: result = [], isLoadingM } = useGetMoviesQuery({
//     filter: "popular",
//     page: "1",
//   });
//   const { data: genre = [], isLoadingG } = useGetGenresQuery();
//   let genresMovies = []
//   return isLoadingM && isLoadingG ? (
//     <h3>Cargando...</h3>
//   ) : (
//     result?.results?.filter(ifPoster).map((movie) => {
//       //obtener generos let genresMovie = (genres.genres.map(genre => genre.id.exist(movie.genre )))
//       // genresMovies = (genre?.genres?.filter((genre) => (genre.id === movie.genre_ids)))
//       genresMovies = (genre?.genres?.filter((genre) => (movie.genre_ids.includes(genre.id))))
//       {console.log(genresMovies)}

//       // let movieG = JSON.stringify(movie)
//       // // movieG += JSON.stringify(genresMovies)
//       // let movieG = movie.concat(genresMovies)
//       // console.log("la puta movieG del mapeo",movieG)

//       // return( <Movies movie={movieG} key={movie.id} />)
//     })

//     // genre?.genres?.map((e) => <Movies movie={e.name} key={e.id} />)
//   );
// };

// export default PopularList;

import {
	useGetMoviesQuery,
	useGetGenresQuery,
} from "../../../redux/api/tmdbAPI";
import { ifPoster } from "../../../utilities/validateContains.utility";
import Movies from "../../../components/moviesCard/Movies";

const PopularList = () => {
	const { data: result = [], isLoadingM } = useGetMoviesQuery({
		filter: "popular",
		page: "1",
	});
	const { data: genre = [], isLoadingG } = useGetGenresQuery();
	let genresMovies = [];
	let movieG = [];
	if (!isLoadingM && !isLoadingG) {
		result?.results?.filter(ifPoster).map(
			(movie) =>
				(genresMovies = genre?.genres?.filter((genre) =>
					movie.genre_ids.includes(genre.id)),
          movieG = JSON.stringify(movie),JSON.stringify(genresMovies)
        )
			// {tittle,[ids], }[generos]
		);
	}
  
 console.log(movieG)
	return isLoadingM && isLoadingG ? (
		<h3>Cargando...</h3>
	) : (
		<h1>d</h1>

		// let movieG = JSON.stringify(movie)
		// // movieG += JSON.stringify(genresMovies)
		// let movieG = movie.concat(genresMovies)
		// console.log("la puta movieG del mapeo",movieG)

		// return( <Movies movie={movieG} key={movie.id} />)

		// genre?.genres?.map((e) => <Movies movie={e.name} key={e.id} />)
	);
};

export default PopularList;
