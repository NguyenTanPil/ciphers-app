import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: 'CipherVip',
  ciphertext: 'CriVpihpe',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
  key: '12345',
};

export const transpositionSlice = createSlice({
  name: 'transposition',
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
  },
});

export const { getData, resetData } = transpositionSlice.actions;

export const selectTransposition = (state) => state.transposition;

export default transpositionSlice.reducer;
