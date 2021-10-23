import { Nav, Logo, Wrapper, NavList, NavItem, NavLink } from './HeaderStyles';

const Header = () => {
  return (
    <Nav>
      <Wrapper>
        <Logo to="/">CipherVip</Logo>
        <NavList>
          <NavItem>
            <NavLink to="/">Sass</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">javascript</NavLink>
          </NavItem>
        </NavList>
      </Wrapper>
    </Nav>
  );
};

export default Header;
