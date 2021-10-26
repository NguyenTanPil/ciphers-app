import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: 'CipherVip',
  ciphertext: 'piVrehpiC',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
};

export const reverseSlice = createSlice({
  name: 'reverse',
  initialState,
  reducers: {
    getData(state, action) {
      state.plaintext = action.payload.plaintext;
      state.ciphertext = action.payload.ciphertext;
      state.caseStrategy = action.payload.caseStrategy;
      state.foreignChars = action.payload.foreignChars;
    },
    resetData(state) {
      state.plaintext = '';
      state.ciphertext = '';
      state.caseStrategy = initialState.caseStrategy;
      state.foreignChars = initialState.foreignChars;
    },
  },
});

export const { getData, resetData } = reverseSlice.actions;

export const selectReverse = (state) => state.reverse;

export default reverseSlice.reducer;
