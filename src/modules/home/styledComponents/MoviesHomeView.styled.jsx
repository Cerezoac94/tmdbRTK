import { Link } from "react-router-dom";
import styled from "styled-components";


export const SectionStyled = styled.section`
min-width: 80vw;
max-width: 120rem;

	.titles {
        display: flex;
        justify-content: space-between;
	}

	.movies {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
`;

// LINKS HOME
export const LinkStyled = styled(Link)`
	text-decoration: none;
`;
