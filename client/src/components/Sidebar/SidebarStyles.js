import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: transparent;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 2000;
  transform: translateX(100%);
  transition: transform 600ms ease;
  padding-right: 1.6rem;

  &.active {
    /* background-color: rgba(0, 0, 0, 0.2); */
    transform: translateX(0);
  }
`;

export const Wrap = styled.aside`
  background-color: ${({ theme }) => theme.background};
  border-left: 2px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;

  @media only screen and (min-width: 576px) {
    width: 60%;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
  }

  @media only screen and (min-width: 992px) {
    width: 40%;
  }

  @media only screen and (min-width: 1200px) {
    width: 25%;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1.8rem 3rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 2.5rem;
    outline: none;

    svg {
      color: ${({ theme }) => theme.text};
      font-size: 2.5rem;
      font-weight: 600;
    }
  }
`;

export const ListLinks = styled.ul`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  padding-bottom: 1.6rem;
`;

export const NavItem = styled.li`
  display: block;
`;

export const NavLink = styled(Link)`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: capitalize;
  padding: 1.25rem 3rem;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    padding-left: 3.5rem;
  }

  &.active {
    background-color: ${({ theme }) => theme.active};
    border-left: 3px solid #26a69a;
    color: #26a69a;
  }
`;
