import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import userService from "services/user.service";
import CvsService from "services/cv.service";

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

export const getAllCvs = createAsyncThunk(
  "employers/cvs",
  async ( slug, thunkAPI) => {
    try {
      const response = await CvsService.getAllCvs();
      console.log(response);
      // if (response.status === 200 || response.status === 201) {
        // thunkAPI.dispatch(setMessage(response.data.message));
        return response;
      // }
    } catch (error) {
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteSaveCv = createAsyncThunk(
  "employers/cvs/delete",
  async ( cv_id, thunkAPI) => {
    try {
      const response = await CvsService.deleteSaveCv(cv_id);
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        // thunkAPI.dispatch(setMessage(response.data.message));
        return response;
      }
    } catch (error) {
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const saveEmployerProfile = createAsyncThunk(
  "employers/save-profile",
  async ( data, thunkAPI) => {
    try {
      const response = await userService.saveEmployerProfile(data);
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        // thunkAPI.dispatch(setMessage(response.data.message));
        return response;
      }
    } catch (error) {
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

// campaign section
export const create_campaign = createAsyncThunk(
  "employers/campaign/create",
  async ( { name, position, city_id }, thunkAPI) => {
    try {
      const response = await userService.create_campaign(name, position, city_id);
      if (response.status === 200 || response.status === 201) {
        thunkAPI.dispatch(setMessage(response.data.message));
        return response;
      }
    } catch (error) {
      const message = error.response.data;
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const UpdateMatchCV = createAsyncThunk(
  "employers/campaign/update",
  async ( {slug, data}, thunkAPI) => {
    try {
      const response = await userService.update_campaign(slug, data);
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
    },
    [create_campaign.pending]: (state, action) => {
      state.isLoading = true
    },
    [create_campaign.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [create_campaign.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    },
    [UpdateMatchCV.pending]: (state, action) => {
      state.isLoading = true
    },
    [UpdateMatchCV.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [UpdateMatchCV.rejected]: (state, action) => {
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