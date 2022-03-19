import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import CvService from "services/cv.service";

const cv = JSON.parse(localStorage.getItem("cv"));

export const create_cv = createAsyncThunk(
  "cvs/",
  async ({ cv_career, cv_design, title, target_major, cv_cv_educations, cv_cv_experiences,
    cv_cv_skills, cv_cv_social_activities, cv_cv_certificates }, thunkAPI) => {
    try {
      const response = await CvService.create_cv(cv_career, cv_design, title, target_major, cv_cv_educations, cv_cv_experiences,
        cv_cv_skills, cv_cv_social_activities, cv_cv_certificates);
      if (response.status === 200 || response.status === 201) {
        thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
      }
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message)
    }
  }
);

const initialState = {
  cv: cv ? cv : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const CvTemplateSlice = createSlice({
  name: "CvTemplate",
  initialState,
  reducers: {
    create_cv: (state, action) => {
      state.cv = action.payload
      console.log("cv: ", action.payload);
    },
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: {
    [create_cv.pending]: (state, action) => {
      state.isLoading = true
    },
    [create_cv.fulfilled]: (state, action) => {
      state.cv = action.payload.cv;
      state.isLoading = false
      state.isSuccess = true
    },
    [create_cv.rejected]: (state, action) => {
      state.cv = null;
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    }
  }
});

// Actions
export const CvTemplateActions = CvTemplateSlice.actions

// Selectors
// export const selectIsLoggedIn = state => state.cv.isLoggedIn;
// export const selectIsLogging = state => state.cv.logging;

// Reducer
const CvTemplateReducer = CvTemplateSlice.reducer;
export default CvTemplateReducer;