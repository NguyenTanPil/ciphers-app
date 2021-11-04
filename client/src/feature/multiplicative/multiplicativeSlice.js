import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: 'CipherVip',
  ciphertext: 'OebxcpReb',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
  key: 7,
  loadingOutput: false,
};

export const multiplicativeSlice = createSlice({
  name: 'multiplicative',
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
      state.plaintext = '';
      state.ciphertext = '';
      state.caseStrategy = initialState.caseStrategy;
      state.foreignChars = initialState.foreignChars;
      state.key = initialState.key;
    },
    increaseKey(state) {
      state.key += 1;
    },
    decreaseKey(state) {
      state.key -= 1;
    },
    getLoading(state, action) {
      state.loadingOutput = action.payload.loadingOutput;
    },
  },
});

export const { getData, resetData, increaseKey, decreaseKey, getLoading } =
  multiplicativeSlice.actions;

export const selectMultiplicative = (state) => state.multiplicative;

export default multiplicativeSlice.reducer;
