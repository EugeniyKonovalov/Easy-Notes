import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFolder, INote, IState } from "../types/appDataTypes";

const initialState: IState = {
  folders: [],
  notes: [],
  directoryParentId: 1,
  selectedFolderId: 1,
  seletedNote: null,
};

const folderSlice = createSlice({
  name: "folderItem",
  initialState,
  reducers: {
    setFolders(state: any, action: PayloadAction<IFolder>): void {
      state.folders = action.payload;
    },
    setNotes(state: any, action: PayloadAction<INote>): void {
      state.notes = action.payload;
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
  },
});

export const folderActions = folderSlice.actions;

export default folderSlice;
