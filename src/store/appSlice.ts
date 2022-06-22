import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFolder, INote, IState } from "../types/appDataTypes";

const initialState: IState = {
  folders: [],
  notes: [],
  selectedNoteId: null,
  selectedFolderId: 1,
};

const appSlice = createSlice({
  name: "appItem",
  initialState,
  reducers: {
    setFolders(state: any, action: PayloadAction<IFolder>): void {
      state.folders = action.payload;
    },

    addFolderAsync(state: any, action: PayloadAction<IFolder>): void {},
    addFolder(state: any, action: PayloadAction<IFolder>): void {
      state.folders.push(action.payload);
    },
    setSelectedFolderId(state: any, action: PayloadAction<number>) {
      state.selectedFolderId = action.payload;
    },
    deleteFolderAsync(state: any, action: PayloadAction<number>) {},
    deleteFolder(state: any, action: PayloadAction<number>) {
      state.folders.filter((item: IFolder) => item.id !== action.payload);
    },
    setNotes(state: any, action: PayloadAction<INote>): void {
      state.notes = action.payload;
    },
    addNoteAsync(state: any, action: PayloadAction<INote>): void {},
    addNote(state: any, action: PayloadAction<INote>): void {
      state.notes.push(action.payload);
    },
    deleteNoteAsync(state: any, action: PayloadAction<number>) {},
    deleteNote(state: any, action: PayloadAction<number>) {
      state.notes.filter((item: INote) => item.id !== action.payload);
    },
    setSelectedNoteId(state: any, action: PayloadAction<number>): void {
      state.selectedNoteId = action.payload;
    },
    dragAndDropNote(state: any, action: PayloadAction<INote[]>) {
      state.notes = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice;
