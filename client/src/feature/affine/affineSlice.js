import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: 'CipherVip',
  ciphertext: 'RheafsUhe',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
  key: { a: 7, b: 3 },
  loadingOutput: false,
};

export const affineSlice = createSlice({
  name: 'affine',
  initialState,
  reducers: {
    getData(state, action) {
      state.plaintext = action.payload.plaintext;
      state.ciphertext = action.payload.ciphertext;
      state.caseStrategy = action.payload.caseStrategy;
      state.foreignChars = action.payload.foreignChars;
      state.key = action.payload.key;
    },
    resetData(state) {
      state.plaintext = initialState.plaintext;
      state.ciphertext = initialState.ciphertext;
      state.caseStrategy = initialState.caseStrategy;
      state.foreignChars = initialState.foreignChars;
      state.key = initialState.key;
    },
    increaseSlope(state) {
      state.key.a += 1;
    },
    increaseIntercept(state) {
      state.key.b += 1;
    },
    decreaseSlope(state) {
      state.key.a -= 1;
    },
    decreaseIntercept(state) {
      state.key.b -= 1;
    },
    getLoading(state, action) {
      state.loadingOutput = action.payload.loadingOutput;
    },
  },
});

export const {
  getData,
  resetData,
  increaseSlope,
  decreaseSlope,
  increaseIntercept,
  decreaseIntercept,
  getLoading,
} = affineSlice.actions;

export const selectAffine = (state) => state.affine;

export default affineSlice.reducer;
