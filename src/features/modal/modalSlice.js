import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const modalActions = modalSlice.actions;
