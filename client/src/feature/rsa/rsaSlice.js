import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: '26',
  ciphertext: '23',
  p: 11,
  q: 47,
  e: 3,
  d: 1,
  processes: [],
  loadingOutput: false,
  actionType: '',
};

export const rsaSlice = createSlice({
  name: 'rsa',
  initialState,
  reducers: {
    getData(state, action) {
      state.plaintext = action.payload.plaintext;
      state.ciphertext = action.payload.ciphertext;
      state.p = action.payload.p;
      state.q = action.payload.q;
      state.e = action.payload.e;
      state.d = action.payload.d;
      state.processes = action.payload.processes;
      state.actionType = action.payload.actionType;
      state.loadingOutput = action.payload.loadingOutput;
    },
    resetData(state) {
      state.plaintext = '';
      state.ciphertext = '';
      state.p = initialState.p;
      state.q = initialState.q;
      state.e = initialState.e;
      state.d = initialState.d;
      state.processes = initialState.processes;
      state.actionType = '';
      state.loadingOutput = '';
    },
    increaseP(state) {
      state.p += 1;
    },
    decreaseP(state) {
      state.p -= 1;
    },
    increaseQ(state) {
      state.q += 1;
    },
    decreaseQ(state) {
      state.q -= 1;
    },
    increaseE(state) {
      state.e += 1;
    },
    decreaseE(state) {
      state.e -= 1;
    },
    increaseD(state) {
      state.d += 1;
    },
    decreaseD(state) {
      state.d -= 1;
    },
    getLoading(state, action) {
      state.loadingOutput = action.payload.loadingOutput;
    },
  },
});

export const {
  getData,
  resetData,
  increaseP,
  decreaseP,
  increaseQ,
  decreaseQ,
  increaseE,
  decreaseE,
  increaseD,
  decreaseD,
  getLoading,
} = rsaSlice.actions;

export const selectRsa = (state) => state.rsa;

export default rsaSlice.reducer;
