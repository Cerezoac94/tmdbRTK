import { Link } from "react-router-dom";

const MoviesHome = ({ movie, position }) => {
	return (
		<section className={position != 0 ? "second":"first"}>
			<Link to={`/movie/${movie.id}`}>
				<picture>
					<img
						src={position != 0 ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`: `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}
						alt={movie.title}
					/>
				</picture>
				<h1>{movie.title}</h1>
				<h3>{movie.vote_average}</h3>
				<h3>{movie.release_date}</h3>
			</Link>
		</section>
	);
};
export default MoviesHome;
