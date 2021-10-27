import styled from 'styled-components';

export const submit = async (url, mess, k) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      text: mess,
      key: k,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const result = await response.json();
  return result;
};

export const getCurrentCase = (cases) => {
  return cases.filter((item) => item.active)[0].value;
};

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
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
