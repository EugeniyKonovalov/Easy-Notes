import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotification, IUiState } from "../types/uiDataTypes";
const initialState: IUiState = {
  showModal: false,
  isFolderReplace: false,
  isNoteReplace: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onToggle(state: any): void {
      state.showModal = !state.showModal;
    },
    onFolderReplace(state: any) {
      state.isFolderReplace = !state.isFolderReplace;
    },
    onNoteReplace(state: any): void {
      state.isNoteReplace = !state.isNoteReplace;
    },
    showNotification(state: any, action: PayloadAction<INotification>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    closeNotification(state: any) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
