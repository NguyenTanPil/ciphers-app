import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plaintext: '',
  ciphertext: '',
  key: 7,
};

export const transformSlice = createSlice({
  name: 'transform',
  initialState,
  reducers: {
    getData(state, action) {
      state.plaintext = action.payload.plaintext;
      state.ciphertext = action.payload.ciphertext;
      state.key = action.payload.key;
    },
    resetData(state) {
      state.plaintext = '';
      state.ciphertext = '';
      state.key = 7;
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
