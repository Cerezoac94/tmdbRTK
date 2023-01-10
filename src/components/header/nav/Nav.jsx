import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<Link to={"/"}>
				<h3>HomeOption</h3>
			</Link>
			<Link to={"movies/popular"}>
				<h3>PopularOption</h3>
			</Link>
			<Link to={"movies/newest"}>
				<h3>NewestOption</h3>
			</Link>
			<Link to={"movies/top-rated"}>
				<h3>Top RatedOption</h3>
			</Link>
		</>
	);
};

export default Nav;
