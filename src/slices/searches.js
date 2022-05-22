import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import searchesService from "services/searches.service";

export const searchesJob = createAsyncThunk(
  "searches/job",
  async ({ q, adr }, thunkAPI) => {
    try {
      const response = await searchesService.searchesJob(q, adr);
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

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const searchesSlice = createSlice({
  name: "Searches",
  initialState,
  reducers: {},
  extraReducers: {
    [searchesJob.pending]: (state, action) => {
      state.isLoading = true
    },
    [searchesJob.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [searchesJob.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    }
  }
});

// Actions
export const searchesActions = searchesSlice.actions

// Selectors
// export const selectIsLoggedIn = state => state.cv.isLoggedIn;
// export const selectIsLogging = state => state.cv.logging;

// Reducer
const searchesReducer = searchesSlice.reducer;
export default searchesReducer;