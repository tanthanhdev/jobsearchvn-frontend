import { createSlice } from "@reduxjs/toolkit";
const chartSLice = createSlice({
  name: "year",
  initialState: 2022,
  reducers: {
    setYear: (state, action) => action.payload,
  },
});

// export const { setSearchNormalSlice } = searchNormalSlice.actions;
// export default searchNormalSlice.reducer;

const { actions, reducer } = chartSLice;
export const { setYear } = actions;
export default reducer;
