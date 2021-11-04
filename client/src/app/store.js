import { configureStore } from '@reduxjs/toolkit';
import affine from '../feature/affine/affineSlice';
import base64 from '../feature/base64/base64Slice';
import ceasar from '../feature/ceasar/ceasarSlice';
import hill from '../feature/hill/hillSlice';
import multiplicative from '../feature/multiplicative/multiplicativeSlice';
import reverse from '../feature/reverse/reverseSlice';
import rot13 from '../feature/rot13/rot13Slice';
import simpleSubstitution from '../feature/simpleSubstitution/simpleSubstitutionSlice';
import transposition from '../feature/transposition/transpositionSlice';
import vigenere from '../feature/vigenere/vigenereSlice';
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
    multiplicative: multiplicative,
  },
});
