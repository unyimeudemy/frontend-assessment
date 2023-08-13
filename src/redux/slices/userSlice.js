import { createSlice } from "@reduxjs/toolkit";

/**
 * This is used to store the details of the current user
 * that owns the account. It is called on signup and on
 * login
 */

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },

    loginFailure: (state) => {
      state.error = true;
    },

    /**
     * This is called on logout so that all variable can be emptied
     * and every UI reset.
     */
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
