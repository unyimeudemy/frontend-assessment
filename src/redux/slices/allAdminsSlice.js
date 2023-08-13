/**
 * This slice stores all the users that are admins that are
 * gotten from filtering the user's list. Here track the progress
 * in three different steps. This steps are used to controlled
 * what is displayed example the loading skeleton.
 */

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
    /**
     * This is the state of the all admins array. Here the array is still
     * null the variable loading is set to true.
     */
    allAdminsStart: (state) => {
      state.loading = true;
    },

    /**
     *
     * @param {*} state - is used by redux to manage the state.
     * @param {*} action - this is used to set the value of  allAdmins to
     * an array containing all users that have roles admin
     */
    allAdminsSuccess: (state, action) => {
      state.loading = false;
      state.allAdmins = action.payload;
    },

    /**
     *
     * @param {*} state is used by redux to manage state.
     * Here we set the value of error to true so that we can know
     * when there is an error with getting all the admins
     */
    allAdminsFailure: (state) => {
      state.error = true;
    },
  },
});

export const { allAdminsStart, allAdminsSuccess, allAdminsFailure } =
  allAdminsSlice.actions;

export default allAdminsSlice.reducer;
