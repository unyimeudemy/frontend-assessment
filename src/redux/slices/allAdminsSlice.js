import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAdmins: null,
  loading: false,
  error: false,
};

export const allAdminsSlice = createSlice({
  name: "allAdmins",
  initialState,
  reducers: {
    allAdminsStart: (state) => {
      state.loading = false;
    },

    allAdminsSuccess: (state, action) => {
      state.loading = false;
      state.allAdmins = action.payload;
    },

    allAdminsFailure: (state) => {
      state.error = true;
    },
  },
});

export const { allAdminsStart, allAdminsSuccess, allAdminsFailure } =
  allAdminsSlice.actions;

export default allAdminsSlice.reducer;
