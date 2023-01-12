import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../../../../redux/api/tmdbAPI";


const Movies = ({ movie }) => {
	const { data: genre = [], isLoading } = useGetGenresQuery();
	return isLoading ? (
		<h1>Cargando...</h1>
	) : (
		<article>
			<Link to={`/movie/${movie.id}`}>
			<section>
			<h1>{movie?.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={movie.title}
      />
			</section>
			</Link>
			<section>
				{movie?.genre_ids.map((g) => (
					<span key={g}>
						{genre.genres[genre.genres.findIndex((dg) => dg.id === g)].name}
					</span>
				))}
			</section>
		
		</article>
	);
};
export default Movies;
