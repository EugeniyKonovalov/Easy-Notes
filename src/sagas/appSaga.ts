import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery, StrictEffect } from "redux-saga/effects";
import { appActions } from "../store/appSlice";
import axios from "axios";
import { API_URL } from "../utils/constants";

export function* addFolderAsync(action: PayloadAction<any>): Generator {
  try {
    console.log(action.payload);
    const addFolderFromApi = async () =>
      await axios({
        method: "post",
        url: `${API_URL}/directories`,
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
export function* deleteFolderAsync(action: PayloadAction<any>): Generator {
  try {
    console.log(action.payload);
    const deleteFolderFromApi = async () =>
      await axios({
        method: "delete",
        url: `${API_URL}/directories/${action.payload}`,
        data: action.payload,
        headers: {
          "Content-Type": "application/json, charset=UTF-8",
        },
      });
    const response: any = yield call(deleteFolderFromApi);
    yield put(appActions.deleteFolder(response.data));
  } catch (err) {
    throw err;
  }
}

export function* addNoteAsync(action: PayloadAction<any>): Generator {
  try {
    console.log(action.payload);
    const addNoteFromApi = async () =>
      await axios({
        method: "post",
        url: `${API_URL}/notices`,
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
export function* deleteNoteAsync(action: PayloadAction<any>): Generator {
  try {
    console.log(action.payload);
    const deleteNoteFromApi = async () =>
      await axios({
        method: "delete",
        url: `${API_URL}/notices/${action.payload}`,
        data: action.payload,
        headers: {
          "Content-Type": "application/json, charset=UTF-8",
        },
      });
    const response: any = yield call(deleteNoteFromApi);
    yield put(appActions.deleteNote(response.data));
  } catch (err) {
    throw err;
  }
}
function* appSaga(): Generator<StrictEffect> {
  yield takeEvery(appActions.addFolderAsync, addFolderAsync);
  yield takeEvery(appActions.deleteFolderAsync, deleteFolderAsync);

  yield takeEvery(appActions.addNoteAsync, addNoteAsync);
  yield takeEvery(appActions.deleteNoteAsync, deleteNoteAsync);
}

export default appSaga;
