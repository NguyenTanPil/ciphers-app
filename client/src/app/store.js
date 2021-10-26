import { configureStore } from '@reduxjs/toolkit';
import ceasar from '../feature/ceasar/ceasarSlice';
import affine from '../feature/affine/affineSlice';
import reverse from '../feature/reverse/reverseSlice';
import transposition from '../feature/transposition/transpositionSlice';

export default configureStore({
  reducer: {
    ceasar: ceasar,
    affine: affine,
    reverse: reverse,
    transposition: transposition,
  },
});
