import { configureStore } from '@reduxjs/toolkit';
import ceasar from '../feature/ceasar/ceasarSlice';
import affine from '../feature/affine/affineSlice';
import reverse from '../feature/reverse/reverseSlice';
import transposition from '../feature/transposition/transpositionSlice';
import simpleSubstitution from '../feature/simpleSubstitution/simpleSubstitutionSlice';
import vigenere from '../feature/vigenere/vigenereSlice';

export default configureStore({
  reducer: {
    ceasar: ceasar,
    affine: affine,
    reverse: reverse,
    transposition: transposition,
    simpleSubstitution: simpleSubstitution,
    vigenere: vigenere,
  },
});
