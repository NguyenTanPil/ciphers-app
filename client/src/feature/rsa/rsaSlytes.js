import styled from 'styled-components';
import { BtnLarge } from '../modulo/ModuloStyles';
import { Counter as CounterCustom } from '../../components/Card/CardStyles';

export const BtnLargeActive = styled(BtnLarge)`
  ${(prop) => (prop.current ? 'box-shadow: 0 0 1rem 0 #4db6ac;' : '')};
  background-color: ${(prop) =>
    prop.current ? 'rgb(34, 150, 138)' : '#4db6ac'};
`;

export const Counter = styled(CounterCustom)`
  border-right: 0 !important;
  width: 100% !important;
  label {
    button {
      position: initial;
      &:first-child {
        margin-right: 1rem;
      }
    }
  }
`;
