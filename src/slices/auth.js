import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import authService from "services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "auth/register",
  async ({ first_name, last_name, email, password }, thunkAPI) => {
    try {
      const response = await authService.register(first_name, last_name, email, password);
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

export const login = createAsyncThunk(
  "auth/login/",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.login(email, password);
      return { user: data };
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const forgotPass = createAsyncThunk(
  "auth/forgot-password/",
  async ({ email }, thunkAPI) => {
    try {
      const data = await authService.forgotPass(email);
      return data.data;
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const resetPass = createAsyncThunk(
  "auth/reset-password/",
  async ({ password, confirm_password, access_token }, thunkAPI) => {
    try {
      const data = await authService.resetPass({ password, confirm_password, access_token });
      return data.data
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const activeAccount = createAsyncThunk(
  "auth/active-account/",
  async ({ access_token }, thunkAPI) => {
    try {
      const data = await authService.activeAccount({ access_token });
      return data.data
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const accountVerified = createAsyncThunk(
  "auth/active-account/",
  async ({ access_token }, thunkAPI) => {
    try {
      const data = await authService.resetPass({ access_token });
      return data.data
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const initialState = {
  user: user ? user : null,
  isLoggedIn: authService.isLoggedIn(),
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload
      console.log(3333, action.payload);
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = undefined;
      state.message = '';
    },
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false
      state.isSuccess = true
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    },
    [login.pending]: (state, action) => {
      state.isLoading = true
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.isLoading = false
      state.isSuccess = true
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  }
});

// Actions
export const authActions = authSlice.actions

// Selectors
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLogging = state => state.auth.logging;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;