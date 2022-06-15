import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery, StrictEffect } from "redux-saga/effects";
import { folderActions } from "../store/appSlice";
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
    yield put(folderActions.addFolder(response.data));
  } catch (err) {
    throw err;
  }
}

function* appSaga(): Generator<StrictEffect> {
  yield takeEvery(folderActions.addFolderAsync, addFolderAsync);
}

export default appSaga;
