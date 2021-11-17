import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: 'CipherVip',
  ciphertext: 'WuhcutBzzi',
  caseStrategy: [
    { value: 'maintain case', active: true },
    { value: 'upper case', active: false },
    { value: 'lower case', active: false },
  ],
  foreignChars: 'include',
  key: { a: 3, b: 3, c: 2, d: 5 },
  processes: {},
  actionType: '',
  loadingOutput: false,
};

export const hillSlice = createSlice({
  name: 'hill',
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
    increaseA(state) {
      state.key.a += 1;
    },
    increaseB(state) {
      state.key.b += 1;
    },
    increaseC(state) {
      state.key.c += 1;
    },
    increaseD(state) {
      state.key.d += 1;
    },
    decreaseA(state) {
      state.key.a -= 1;
    },
    decreaseB(state) {
      state.key.b -= 1;
    },
    decreaseC(state) {
      state.key.c -= 1;
    },
    decreaseD(state) {
      state.key.d -= 1;
    },
    getLoading(state, action) {
      state.loadingOutput = action.payload.loadingOutput;
    },
  },
});

export const {
  getData,
  resetData,
  increaseA,
  decreaseA,
  increaseB,
  decreaseB,
  increaseC,
  decreaseC,
  increaseD,
  decreaseD,
  getLoading,
} = hillSlice.actions;

export const selectHill = (state) => state.hill;

export default hillSlice.reducer;
