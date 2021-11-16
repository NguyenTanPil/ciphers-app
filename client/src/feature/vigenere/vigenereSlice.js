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
  processes: [],
  actionType: '',
  loadingOutput: false,
};

export const vigenereSlice = createSlice({
  name: 'vigenere',
  initialState,
  reducers: {
    getData(state, action) {
      state.plaintext = action.payload.plaintext;
      state.ciphertext = action.payload.ciphertext;
      state.caseStrategy = action.payload.caseStrategy;
      state.foreignChars = action.payload.foreignChars;
      state.key = action.payload.key;
      state.processes = action.payload.processes;
      state.actionType = action.payload.actionType;
    },
    resetData(state) {
      state.plaintext = '';
      state.ciphertext = '';
      state.caseStrategy = initialState.caseStrategy;
      state.foreignChars = initialState.foreignChars;
      state.key = initialState.key;
      state.processes = initialState.processes;
      state.actionType = initialState.actionType;
    },
    getLoading(state, action) {
      state.loadingOutput = action.payload.loadingOutput;
    },
  },
});

export const { getData, resetData, getLoading } = vigenereSlice.actions;

export const selectVigenere = (state) => state.vigenere;

export default vigenereSlice.reducer;
