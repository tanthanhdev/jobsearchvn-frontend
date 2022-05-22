import { createSlice } from "@reduxjs/toolkit";
const searchNormalSlice = createSlice({
  name: "searchNormalSlice",
  initialState: "",
  reducers: {
    setSearchNormalSlice: (state, action) => action.payload,
  },
});

const { actions, reducer } = searchNormalSlice;
export const { setSearchNormalSlice } = actions;
export default reducer;
