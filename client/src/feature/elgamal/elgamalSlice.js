import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: '3',
  ciphertext: '23',
  p: 97,
  a: 5,
  x: 58,
  k: 36,
  processes: [],
  actionType: '',
  loadingOutput: false,
};

export const elgamalSlice = createSlice({
  name: 'elgamal',
  initialState,
  reducers: {
    getData(state, action) {
      state.plaintext = action.payload.plaintext;
      state.ciphertext = action.payload.ciphertext;
      state.p = action.payload.p;
      state.a = action.payload.a;
      state.x = action.payload.x;
      state.k = action.payload.k;
      state.processes = action.payload.processes;
      state.actionType = action.payload.actionType;
    },
    resetData(state) {
      state.plaintext = '';
      state.ciphertext = '';
      state.p = initialState.p;
      state.a = initialState.a;
      state.x = initialState.x;
      state.k = initialState.k;
      state.processes = initialState.processes;
      state.actionType = '';
    },
    increaseP(state) {
      state.p += 1;
    },
    decreaseP(state) {
      state.p -= 1;
    },
    increaseA(state) {
      state.a += 1;
    },
    decreaseA(state) {
      state.a -= 1;
    },
    increaseX(state) {
      state.x += 1;
    },
    decreaseX(state) {
      state.x -= 1;
    },
    increaseK(state) {
      state.k += 1;
    },
    decreaseK(state) {
      state.k -= 1;
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
  increaseA,
  decreaseA,
  increaseX,
  decreaseX,
  increaseK,
  decreaseK,
  getLoading,
} = elgamalSlice.actions;

export const selectElgamal = (state) => state.elgamal;

export default elgamalSlice.reducer;
