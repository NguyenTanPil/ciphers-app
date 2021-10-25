import styled from 'styled-components';

export const CounterWrap = styled.div`
  display: flex;

  & > div {
    width: 50%;

    &:first-child {
      border-right: 1px solid #e3e8ec;
    }
  }
`;
