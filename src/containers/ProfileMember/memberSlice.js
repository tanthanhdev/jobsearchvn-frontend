import { createSlice } from "@reduxjs/toolkit";
const memberSlice = createSlice({
  name: "memberSlice",
  initialState: {},
  reducers: {
    memberSlice: (state, action) => action.payload,
  },
});

const { actions, reducer } = memberSlice;
export const { setMemberSlice } = actions;
export default reducer;
