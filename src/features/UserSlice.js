import {  createSlice } from '@reduxjs/toolkit';


export const UserSlice = createSlice({
  name: 'user',
  initialState:
  {
      user:null
  },

  reducers: {
    loginuser: (state,action) => {

      state.user=action.payload;
    },
    logoutuser: (state) => {
      state.user= null;
    },

  },
  
});

export const {  loginuser , logoutuser } = UserSlice.actions;

export const selectuser = (state) => state.user.user;


export default UserSlice.reducer;
