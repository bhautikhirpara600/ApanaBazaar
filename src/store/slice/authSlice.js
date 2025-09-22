import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "emailAuth",
  initialState: {
    loading: false,
    error: "",
    isLoggedIn: false,
  },
  reducers: {
    setAuthLoading(state, action) {
      state.loading = action.payload;
    },
    setAuthError(state, action) {
      state.error = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setAuthLoading, setAuthError, setIsLoggedIn } =
  authSlice.actions;
