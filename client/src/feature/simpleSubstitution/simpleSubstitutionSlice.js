import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: 'CipherVip',
  ciphertext: 'DofpkgLof',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
  key: 'zebrascdfghijklmnopqtuvwxy',
  loadingOutput: false,
};

export const simpleSubstitutionSlice = createSlice({
  name: 'simpleSubstitution',
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
    getLoading(state, action) {
      state.loadingOutput = action.payload.loadingOutput;
    },
  },
});

export const { getData, resetData, getLoading } =
  simpleSubstitutionSlice.actions;

export const selectSimpleSubstitution = (state) => state.simpleSubstitution;

export default simpleSubstitutionSlice.reducer;
