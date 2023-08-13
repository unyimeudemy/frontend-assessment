import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import changeTabReducer from "../redux/slices/changeTabSlices.js";
import userReducer from "../redux/slices/userSlice.js";
import allUsersReducer from "../redux/slices/allUsersSlice.js";
import allAdminsReducer from "../redux/slices/allAdminsSlice.js";
import popUpStatusReducer from "../redux/slices/popUpStatusSlice.js";

/**
 * This file manages all the redux stores in this app that are
 * used for state management.
 */
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  changeTab: changeTabReducer,
  user: userReducer,
  allUsers: allUsersReducer,
  allAdmins: allAdminsReducer,
  popUpStatus: popUpStatusReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
