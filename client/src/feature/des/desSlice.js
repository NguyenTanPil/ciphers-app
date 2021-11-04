import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: '133457799BBCDFF0',
  ciphertext: '0123456789ABCDEF',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
  key: '133457799BBCDFF0',
  loadingOutput: false,
};

export const desSlice = createSlice({
  name: 'des',
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

export const { getData, resetData, getLoading } = desSlice.actions;

export const selectDes = (state) => state.des;

export default desSlice.reducer;
