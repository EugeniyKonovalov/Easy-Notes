import { StrictEffect, takeEvery } from "redux-saga/effects";
import { folderActions } from "../store/appSlice";
import { createFolder } from "./folder-saga";

function* folderSaga(): Generator<StrictEffect> {
  yield takeEvery(folderActions.addFolderAsync, createFolder);
}
export default folderSaga;
