import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showModal: false as boolean,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onToggle(state: any) {
      state.showModal = !state.showModal;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
