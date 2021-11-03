import styled from 'styled-components';

export const CounterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 50%;

    &:nth-child(2n + 1) {
      border-right: 1px solid ${({ theme }) => theme.border};
    }
  }
`;
