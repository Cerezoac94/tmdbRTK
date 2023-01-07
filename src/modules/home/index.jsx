import MoviesByFilterHome from "./components/MoviesByFilterHome";

export const MoviesHomeView = () => {
	return (
		<>
    <p>popular</p>
			<MoviesByFilterHome filter={"popular"} />
      <br />
      <p>newest</p>
			<MoviesByFilterHome filter={"now_playing"} />
      <br />
      <p>top rated</p>
			<MoviesByFilterHome filter={"top_rated"} />
		</>
	);
};
