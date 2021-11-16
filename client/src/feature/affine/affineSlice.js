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
  processes: [],
  keys: { a: 7, b: 3 },
  actionType: '',
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
      state.processes = action.payload.processes;
      state.actionType = action.payload.actionType;
      state.keys = action.payload.keys;
    },
    resetData(state) {
      state.plaintext = '';
      state.ciphertext = '';
      state.caseStrategy = initialState.caseStrategy;
      state.foreignChars = initialState.foreignChars;
      state.keys = initialState.keys;
      state.processes = initialState.processes;
      state.actionType = initialState.actionType;
    },
    increaseSlope(state) {
      state.keys.a += 1;
    },
    increaseIntercept(state) {
      state.keys.b += 1;
    },
    decreaseSlope(state) {
      state.keys.a -= 1;
    },
    decreaseIntercept(state) {
      state.keys.b -= 1;
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
