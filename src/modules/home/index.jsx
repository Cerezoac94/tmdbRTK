import MoviesByFilterHome from "./components/MoviesByFilterHome";
import { LinkStyled, SectionStyled } from './styledComponents/MoviesHomeView.styled';

export const MoviesHomeView = () => {
	return (
		<>
			<SectionStyled>
				<div className='titles'>
					<h1>Popular</h1>
					<LinkStyled to={`/movies/popular`}>
					<h3>View More</h3>
					</LinkStyled>					
				</div>
				<div className='movies'>
					<MoviesByFilterHome filter={"popular"} page={"1"} />
				</div>
				
			</SectionStyled>

			<br />

			<section>
				<div>
					<h1>Newest</h1>

					<LinkStyled to={`/movies/newest`}>
					<h3>View More</h3>
		</LinkStyled>
				</div>
				<MoviesByFilterHome filter={"now_playing"} page={"1"} />
			</section>

			<br />

			<section>
				<div>
					<h1>Top Rated</h1>
					<LinkStyled to={`/movies/top-rated`}>
						<h3>View More</h3>
					</LinkStyled>
				</div>
				<MoviesByFilterHome filter={"top_rated"} page={"1"} />
			</section>
		</>
	);
};
