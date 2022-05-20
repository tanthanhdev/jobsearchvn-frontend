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

export const get_all_public_employer = createAsyncThunk(
  "public/employers/search/",
  async ({ q }, thunkAPI) => {
    try {
      const response = await userService.searchPublicEmployer(q);
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

export const create_review = createAsyncThunk(
  "cvs/create",
  async ({ employer_id, title, content, point }, thunkAPI) => {
    try {
      const response = await userService.create_review(employer_id, title, content, point);
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

export const followCompany = createAsyncThunk(
  "follow/companies/create",
  async ({ employer_id }, thunkAPI) => {
    try {
      const response = await userService.followCompany(employer_id);
      if (response.status === 200 || response.status === 201 || response.status === 204) {
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

const initialState = {
//   cv: cv ? cv : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const CompanyReviewsSlice = createSlice({
  name: "CompanyReviews",
  initialState,
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
      state.isLoading = true
    },
    [get_public_employer_detail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [get_public_employer_detail.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    },
    [get_all_public_employer.pending]: (state, action) => {
      state.isLoading = true
    },
    [get_all_public_employer.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [get_all_public_employer.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    },
    [create_review.pending]: (state, action) => {
      state.isLoading = true
    },
    [create_review.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [create_review.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    },
    [followCompany.pending]: (state, action) => {
      state.isLoading = true
    },
    [followCompany.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [followCompany.rejected]: (state, action) => {
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