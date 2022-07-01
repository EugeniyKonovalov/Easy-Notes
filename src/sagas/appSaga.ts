import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery, StrictEffect } from "redux-saga/effects";
import { appActions } from "../store/appSlice";
import axios from "axios";
import { IFolder, INote } from "../types/appDataTypes";

export function* addFolderAsync(action: PayloadAction<IFolder>): Generator {
  try {
    const addFolderFromApi = async () =>
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/directories`,
        data: action.payload,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    const response: any = yield call(addFolderFromApi);
    yield put(appActions.addFolder(response.data));
  } catch (err) {
    throw err;
  }
}

export function* deleteFolderAsync(action: PayloadAction<number>): Generator {
  try {
    const deleteFolderFromApi = async () =>
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/directories/${action.payload}`,
      });
    const response: any = yield call(deleteFolderFromApi);
    yield put(appActions.deleteFolder(response));
  } catch (err) {
    throw err;
  }
}

export function* addNoteAsync(action: PayloadAction<INote>): Generator {
  try {
    const addNoteFromApi = async () =>
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/notices`,
        data: action.payload,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    const response: any = yield call(addNoteFromApi);
    yield put(appActions.addNote(response.data));
  } catch (err) {
    throw err;
  }
}

export function* replaceNoteAsync(action: PayloadAction<INote>): Generator {
  try {
    const replaceNoteFromApi = async () =>
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/notices/${action.payload.id}`,
        data: action.payload,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    const response: any = yield call(replaceNoteFromApi);
    yield put(appActions.replaceNote(response.data));
  } catch (err) {
    throw err;
  }
}

export function* deleteNoteAsync(action: PayloadAction<number>): Generator {
  try {
    const deleteNoteFromApi = async () =>
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/notices/${action.payload}`,
      });
    const response: any = yield call(deleteNoteFromApi);
    yield put(appActions.deleteNote(response));
  } catch (err) {
    throw err;
  }
}
function* appSaga(): Generator<StrictEffect> {
  yield takeEvery(appActions.addFolderAsync, addFolderAsync);
  yield takeEvery(appActions.deleteFolderAsync, deleteFolderAsync);

  yield takeEvery(appActions.addNoteAsync, addNoteAsync);
  yield takeEvery(appActions.deleteNoteAsync, deleteNoteAsync);
  yield takeEvery(appActions.replaceNoteAsync, replaceNoteAsync);
}

export default appSaga;
