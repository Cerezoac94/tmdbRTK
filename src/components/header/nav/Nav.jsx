// import { NavLink } from "react-router-dom";
import {NavStyled, NavLinkStyled} from "../../styledComponets/Nav.styled";

const Nav = () => {
	return (
		<NavStyled>
			<NavLinkStyled to={"movies/popular"}>
				<h3>Popular</h3>
			</NavLinkStyled>
			<NavLinkStyled to={"movies/newest"}>
				<h3>Newest</h3>
			</NavLinkStyled>
			<NavLinkStyled to={"movies/top-rated"}>
				<h3>Top Rated</h3>
			</NavLinkStyled>
		</NavStyled>
	);
};

export default Nav;
