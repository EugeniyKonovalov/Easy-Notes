import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showModal: false as boolean,
  isReplace: false as boolean,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onToggle(state: any): void {
      state.showModal = !state.showModal;
    },
    onReplace(state: any): void {
      state.isReplace = !state.isReplace;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
