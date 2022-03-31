import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import userService from "services/user.service";

// const cv = JSON.parse(localStorage.getItem("cv"));

export const get_public_employer_detail = createAsyncThunk(
  "public/employers/slug/",
  async ({ slug }, thunkAPI) => {
    try {
      const response = await userService.getPublicEmployerDetail(slug);
      if (response.status === 200 || response.status === 201) {
        // thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
      }
    } catch (error) {
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

// const initialState = {
// //   cv: cv ? cv : null,
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: '',
// }

const CompanyReviewsSlice = createSlice({
  name: "CompanyReviews",
  initialState: {
    //   cv: cv ? cv : null,
      isError: false,
      isSuccess: false,
      isLoading: false,
      message: '',
    },
  // reducers: {
  //   get_public_employer_detail: (state, action) => {
  //   //   state.cv = action.payload
  //     console.log("employer detail: ", action.payload);
  //   },
  //   reset: (state) => {
  //     state.isLoading = false
  //     state.isSuccess = false
  //     state.isError = false
  //     state.message = ''
  //   },
  // },
  extraReducers: {
    [get_public_employer_detail.pending]: (state, action) => {
      console.log('pendingggggggggggggg');
      state.isLoading = true
    },
    [get_public_employer_detail.fulfilled]: (state, action) => {
    //   state.cv = action.payload.cv;
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [get_public_employer_detail.rejected]: (state, action) => {
    //   state.cv = null;
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    }
  }
});

// Actions
export const CompanyReviewsActions = CompanyReviewsSlice.actions

// Selectors
// export const selectIsLoggedIn = state => state.cv.isLoggedIn;
// export const selectIsLogging = state => state.cv.logging;

// Reducer
const CompanyReviewsReducer = CompanyReviewsSlice.reducer;
export default CompanyReviewsReducer;