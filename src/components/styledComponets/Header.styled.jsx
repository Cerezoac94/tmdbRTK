import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderStyled =styled.header`

display: flex;
height: 10vh;
justify-content: space-between;
align-items: center;

h2{
    color: var(--colorPurple);
}
`

export const LinkStyled = styled(Link)`
text-decoration: none;
`