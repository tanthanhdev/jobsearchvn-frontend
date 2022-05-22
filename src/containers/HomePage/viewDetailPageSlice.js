import { createSlice } from "@reduxjs/toolkit";
const viewDetailPageSlice = createSlice({
  name: "viewDetailPageSlice",
  initialState: {},
  reducers: {
    setViewDetailPageSlice: (state, action) => action.payload,
  },
});

const { actions, reducer } = viewDetailPageSlice;
export const { setViewDetailPageSlice } = actions;
export default reducer;
