import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: '',
  ciphertext: '',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
  key: 7,
};

export const transformSlice = createSlice({
  name: 'transform',
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
    increaseKey(state) {
      state.key += 1;
    },
    decreaseKey(state) {
      state.key -= 1;
    },
  },
});

export const { getData, resetData, increaseKey, decreaseKey } =
  transformSlice.actions;

export const selectTransform = (state) => state.transform;

export default transformSlice.reducer;
