import { Logo, Nav, NavItem, NavLink, NavList, Wrapper } from './HeaderStyles';

const Header = () => {
  return (
    <Nav>
      <Wrapper>
        <Logo to="/">CipherVip</Logo>
        <NavList>
          <NavItem>
            <NavLink to="/">ceasar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/affine">affine</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/reverse">reverse</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/transposition">transposition</NavLink>
          </NavItem>
        </NavList>
      </Wrapper>
    </Nav>
  );
};

export default Header;
