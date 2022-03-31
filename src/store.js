import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import searchNormalSlice from "./containers/HomePage/searchNormalSlice";
import searchLocationSlice from "./containers/HomePage/searchLocationSlice";
import viewDetailPageSlice from "./containers/HomePage/viewDetailPageSlice";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  searchNormalSlice: searchNormalSlice,
  searchLocationSlice: searchLocationSlice,
  viewDetailPageSlice: viewDetailPageSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
