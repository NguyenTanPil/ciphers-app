import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.border};
  padding: 1rem 1.8rem;

  & > label {
    color: #4db6ac;
    display: block;
    font-size: 1.4rem;
    position: relative;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 576px) {
    padding: 2rem 2rem 1rem 3.8rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 1.6rem 1.8rem;
  }

  @media only screen and (min-width: 1400px) {
    padding: 2rem 2rem 1rem 3.8rem;
  }
`;
