import { configureStore } from '@reduxjs/toolkit';
import transform from '../feature/transform/transformSlice';

export default configureStore({
  reducer: {
    transform: transform,
  },
});
