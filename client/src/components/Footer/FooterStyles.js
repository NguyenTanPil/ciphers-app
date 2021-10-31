import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 3.6rem 0;
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  letter-spacing: 0.1rem;
  margin: 0 auto;
  width: 80%;

  @media only screen and (min-width: 576px) {
    width: 80%;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  font-weight: 590;
  margin-bottom: 1rem;
  text-align: justify;
  width: 100%;

  span {
    color: #4db6ac;
    font-size: 2rem;
    font-weight: 600;
  }

  @media only screen and (min-width: 576px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 992px) {
    max-width: 70rem;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 80rem;
  }
`;

export const ChangeLanguage = styled.div`
  display: flex;
  margin-top: 0.65rem;
`;

export const BtnSmall = styled.button`
  background-color: ${(prop) =>
    prop.current ? 'rgb(34, 150, 138)' : '#4db6ac'};
  color: #fff;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 590;
  height: 3.6rem;
  margin-right: 0.65rem;
  outline: none;
  padding: 0 1.5rem;
  text-transform: capitalize;
  transition: background-color 0.3s ease 0s;

  &:hover {
    background-color: rgb(34, 150, 138);
  }

  @media only screen and (min-width: 992px) {
    margin-left: 0.65rem;
    margin-right: 0;
  }
`;
