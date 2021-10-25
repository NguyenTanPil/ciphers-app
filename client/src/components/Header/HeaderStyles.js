import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.div`
  background-color: #4db6ac;
  height: 6.4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  line-height: 6.4rem;
  width: 80%;
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 3.2rem;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  padding: 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: block;
  font-size: 1.6rem;
  padding: 0 1.5rem;
  text-transform: capitalize;
`;
