import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.div`
  background-color: #4db6ac;
  font-family: 'Zen Antique Soft', serif;
  height: 6.4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  line-height: 6.4rem;
  width: 90%;

  @media only screen and (min-width: 576px) {
    width: 80%;
  }
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 3.2rem;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  transition: background-color 0.3s;

  /* &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  } */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: none;
  font-size: 1.6rem;
  padding: 0 1.5rem;
  text-transform: capitalize;

  @media only screen and (min-width: 576px) {
    display: block;
  }
`;

export const Bar = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  outline: none;

  svg {
    display: block;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export const TrackMode = styled.div`
  background-color: #4d4d4d;
  border-radius: calc(4.6rem / 4);
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 2.4rem;
  margin-right: 1rem;
  position: relative;
  width: 4.6rem;

  span {
    font-size: 1.4rem;
    text-align: center;
    width: 2.4rem;
  }

  & > .ball {
    background-color: #fff;
    border: 0.2rem solid #4d4d4d;
    border-radius: 50%;
    height: 2.3rem;
    position: absolute;
    left: 0;
    transition: all 0.25s ease;
    transform: translateX(
      ${(props) => (props.theme === 'light' ? '0' : '100%')}
    );
    width: 2.3rem;
  }

  &:hover {
    box-shadow: 0 0 2px 3px #ba8fff;
  }
`;
