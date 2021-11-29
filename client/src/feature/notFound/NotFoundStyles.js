import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GroupNotFound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;

  img {
    max-width: 85rem;
    width: 100%;
  }
`;

export const NotFoundBtn = styled(NavLink)`
  background-color: #26a69a;
  border: none;
  border-radius: 0.2rem;
  color: rgb(232, 230, 227);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  height: 3rem;
  letter-spacing: 0.5px;
  line-height: 3rem;
  max-width: 15rem;
  position: absolute;
  bottom: 0;
  text-align: center;
  text-decoration-color: initial;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s;
  vertical-align: middle;
  width: 20rem;

  &:hover {
    background-color: rgb(34, 150, 138);
  }

  @media only screen and (min-width: 576px) {
    bottom: 5%;
    font-size: 1.4rem;
    height: 3.6rem;
    line-height: 3.6rem;
    max-width: 20rem;
  }

  @media only screen and (min-width: 992px) {
    bottom: 8%;
  }
`;
