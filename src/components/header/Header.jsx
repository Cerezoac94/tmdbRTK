import { HeaderStyled, LinkStyled } from "../styledComponets/Header.styled"
import Nav from "./nav/Nav"

const Header = () => {
  return (
    <HeaderStyled>
        <LinkStyled to='/'>
        <h2>LogoTMDB</h2>
        </LinkStyled>      
      <Nav/>
    </HeaderStyled>
  )
}
export default Header