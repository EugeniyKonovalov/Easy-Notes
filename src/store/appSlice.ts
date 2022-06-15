import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFolder, INote, IState } from "../types/appDataTypes";

const initialState: IState = {
  folders: [],
  notes: [],
  directoryParentId: 1,
  selectedFolder: null,
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

    addFolderAsync(): void {},
    addFolder(state: any, action: PayloadAction<IFolder>): void {
      state.parentId = action.payload.id;
    },
  },
});

export const folderActions = folderSlice.actions;

export default folderSlice;
