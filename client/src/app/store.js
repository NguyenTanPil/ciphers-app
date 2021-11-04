import { configureStore } from '@reduxjs/toolkit';
import affine from '../feature/affine/affineSlice';
import ceasar from '../feature/ceasar/ceasarSlice';
import hill from '../feature/hill/hillSlice';
import reverse from '../feature/reverse/reverseSlice';
import simpleSubstitution from '../feature/simpleSubstitution/simpleSubstitutionSlice';
import transposition from '../feature/transposition/transpositionSlice';
import vigenere from '../feature/vigenere/vigenereSlice';
import rot13 from '../feature/rot13/rot13Slice';
import base64 from '../feature/base64/base64Slice';
import xor from '../feature/xor/xorSlice';

export default configureStore({
  reducer: {
    ceasar: ceasar,
    affine: affine,
    reverse: reverse,
    transposition: transposition,
    simpleSubstitution: simpleSubstitution,
    vigenere: vigenere,
    hill: hill,
    rot13: rot13,
    base64: base64,
    xor: xor,
  },
});
