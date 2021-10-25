import { configureStore } from '@reduxjs/toolkit';
import ceasar from '../feature/ceasar/ceasarSlice';
import affine from '../feature/affine/affineSlice';

export default configureStore({
  reducer: {
    ceasar: ceasar,
    affine: affine,
  },
});
