import { createSlice } from "@reduxjs/toolkit";
const searchLocationSlice = createSlice({
  name: "searchLocationSlice",
  initialState: "",
  reducers: {
    setSearchLocationSlice: (state, action) => action.payload,
  },
});

// export const { setSearchNormalSlice } = searchNormalSlice.actions;
// export default searchNormalSlice.reducer;

const { actions, reducer } = searchLocationSlice;
export const { setSearchLocationSlice } = actions;
export default reducer;
