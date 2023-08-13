import { createSlice } from "@reduxjs/toolkit";
/**
 * This slice is used to track the progress of getting all users
 * with roles "user"
 */
const initialState = {
  allUsers: null,
  loading: true,
  error: false,
};

export const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {
    /**
     *
     * @param {*} state - used by redux to manage state.
     * This is when the fetching has started, thus there is data
     * and fetching is set to true.
     */
    allUsersStart: (state) => {
      state.loading = true;
      state.allUsers = false;
      state.error = false;
    },

    /**
     * Here users with "user" role has been found thus allUsers
     * set to true to indicate it was successful
     */
    allUsersSuccess: (state) => {
      state.loading = false;
      state.allUsers = true;
      state.error = false;
    },

    /**
     *  This is when the request failed thus error is set to
     * true.
     */
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
