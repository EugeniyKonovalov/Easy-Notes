import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "./appSlice";
import createSagaMiddleware from "@redux-saga/core";
import appSaga from "../sagas/appSaga";
import uiSlice from "./uiSlice";
import authSlice from "./authSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    appItem: folderSlice,
    ui: uiSlice,
    auth: authSlice,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(appSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
