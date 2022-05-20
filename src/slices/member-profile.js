import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import userService from "services/user.service";

// const cv = JSON.parse(localStorage.getItem("cv"));

export const UpdateCV = createAsyncThunk(
  "cvs/update",
  async ( {slug, data}, thunkAPI) => {
    try {
      const response = await userService.updateCV(slug, data);
      if (response.status === 200 || response.status === 201) {
        thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
      }
    } catch (error) {
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const MemberProfileSlice = createSlice({
  name: "MemberProfile",
  initialState: {
      isError: false,
      isSuccess: false,
      isLoading: false,
      message: '',
    },
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: {
    [UpdateCV.pending]: (state, action) => {
      state.isLoading = true
    },
    [UpdateCV.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [UpdateCV.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    },
  }
});

// Actions
export const MemberProfileActions = MemberProfileSlice.actions

// Selectors
// export const selectIsLoggedIn = state => state.cv.isLoggedIn;
// export const selectIsLogging = state => state.cv.logging;

// Reducer
const MemberProfileReducer = MemberProfileSlice.reducer;
export default MemberProfileReducer;