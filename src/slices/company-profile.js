import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import userService from "services/user.service";

// const cv = JSON.parse(localStorage.getItem("cv"));

export const get_employer_detail = createAsyncThunk(
  "employers/detail/",
  async ( thunkAPI) => {
    try {
      const response = await userService.getEmployerBoard();
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

export const get_employer_jobs = createAsyncThunk(
  "employers/jobs/",
  async ( thunkAPI) => {
    try {
      const response = await userService.getJob();
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

export const delete_employer_jobs = createAsyncThunk(
  "employers/jobs/delete",
  async ( slug, thunkAPI) => {
    try {
      const response = await userService.deleteJob(slug);
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

const CompanyProfileSlice = createSlice({
  name: "CompanyProfile",
  initialState: {
      profile: null,
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
    [get_employer_detail.pending]: (state, action) => {
      state.isLoading = true
    },
    [get_employer_detail.fulfilled]: (state, action) => {
      state.profile = action.payload;
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [get_employer_detail.rejected]: (state, action) => {
      state.profile = null;
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    }
  }
});

// Actions
export const CompanyProfileActions = CompanyProfileSlice.actions

// Selectors
// export const selectIsLoggedIn = state => state.cv.isLoggedIn;
// export const selectIsLogging = state => state.cv.logging;

// Reducer
const CompanyProfileReducer = CompanyProfileSlice.reducer;
export default CompanyProfileReducer;