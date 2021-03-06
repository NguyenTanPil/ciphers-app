import styled from 'styled-components';
import { Btn, TransformOutPut } from '../../components/Card/CardStyles';

export const CounterWrap = styled.div`
  padding-bottom: 2rem;
  & > div {
    padding-bottom: 0.4rem;
    padding-left: 0;
    padding-right: 0;

    @media only screen and (min-width: 1200px) {
      padding-top: 2rem;
    }
  }
`;

export const BtnLarge = styled(Btn)`
  max-width: 12.6rem;
  padding: 0 2rem;
  width: 12.6rem;

  @media only screen and (min-width: 1200px) {
    padding: 0;
    width: 11.6rem;
  }
`;

export const TransformInput = styled(TransformOutPut)`
  & > div {
    border-right: none;
    padding: 2rem 1.8rem;
    width: 100%;
  }

  ul {
    left: -1.8rem;
    width: calc(100% + 3.6rem);
  }

  @media only screen and (min-width: 576px) {
    & > div {
      padding: 2rem 0;
    }
  }

  @media only screen and (min-width: 1200px) {
    & > div {
      padding: 2rem 3.8rem;
    }

    ul {
      left: -3.8rem;
      width: calc(100% + 7.6rem);
    }
  }

  @media only screen and (min-width: 1400px) {
    & > div {
      padding: 2rem 1.8rem;
    }
  }
`;
