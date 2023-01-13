import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const NavStyled = styled.nav`
display: flex;

/* h3{
    margin: 1rem;
} */

`
export const NavLinkStyled = styled(NavLink)`
margin: 1rem;
text-decoration: none;
color: var(--colorLight);
`