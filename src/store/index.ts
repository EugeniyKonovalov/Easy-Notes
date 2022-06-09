import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "./folder-slice";
import createSagaMiddleware from "@redux-saga/core";
import folderSaga from "../sagas/folder-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { folderItem: folderSlice.reducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(folderSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
