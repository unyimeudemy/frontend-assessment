import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: null,
  loading: true,
  error: false,
};

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    allUsersStart: (state) => {
      state.loading = true;
      state.allUsers = false;
      state.error = false;
    },

    allUsersSuccess: (state) => {
      state.loading = false;
      state.allUsers = true;
      state.error = false;
    },

    allUsersFailure: (state) => {
      state.error = true;
      state.loading = false;
      state.allUsers = false;
    },
  },
});

export const { allUsersStart, allUsersSuccess, allUsersFailure } =
  allUsersSlice.actions;

export default allUsersSlice.reducer;
