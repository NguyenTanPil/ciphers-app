import styled from 'styled-components';
import { BtnLarge } from '../modulo/ModuloStyles';

export const BtnLargeActive = styled(BtnLarge)`
  ${(prop) => (prop.current ? 'box-shadow: 0 0 1rem 0 #4db6ac;' : '')};
  background-color: ${(prop) =>
    prop.current ? 'rgb(34, 150, 138)' : '#4db6ac'};
`;
