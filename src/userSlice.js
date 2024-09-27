import { createSlice } from '@reduxjs/toolkit';

// Initial state for user details
const initialState = {
  userInfo: null, // this will hold user details
};

// Create a slice for user details
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user details in the state
    setUserDetails: (state, action) => {
      state.userInfo = action.payload;
    },
    // Action to clear user details (like on logout)
    clearUserDetails: (state) => {
      state.userInfo = null;
    },
  },
});

// Export the actions to use in components
export const { setUserDetails, clearUserDetails } = userSlice.actions;

// Export the reducer to register in the store
export default userSlice.reducer;
