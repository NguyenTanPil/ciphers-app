import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: 'CipherVip',
  ciphertext: 'EqeoiiXqe',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
  key: 'cipher',
  loadingOutput: false,
};

export const xorSlice = createSlice({
  name: 'xor',
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
    getLoading(state, action) {
      state.loadingOutput = action.payload.loadingOutput;
    },
  },
});

export const { getData, resetData, getLoading } = xorSlice.actions;

export const selectXor = (state) => state.xor;

export default xorSlice.reducer;
