import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f2f4f6;
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 1.6rem;
  padding-top: 4.8rem;
  width: 90%;

  @media only screen and (min-width: 576px) {
    width: 80%;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: space-between;
  }
`;
