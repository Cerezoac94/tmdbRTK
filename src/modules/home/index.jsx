import MoviesByFilterHome from "./components/MoviesByFilterHome";

export const MoviesHomeView = () => {
	return (
		<>
    <h1>Popular</h1>
			<MoviesByFilterHome filter={"popular"} />
      <br />
      <h1>Newest</h1>
			<MoviesByFilterHome filter={"now_playing"} />
      <br />
      <h1>Top Rated</h1>
			<MoviesByFilterHome filter={"top_rated"} />
		</>
	);
};
