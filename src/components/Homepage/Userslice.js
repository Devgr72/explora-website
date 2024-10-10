
import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: localStorage.getItem('userName') || '', 
    isLoggedIn: !!localStorage.getItem('authorizeToken'),
  },
  reducers: {
    login(state, action) {
      state.name = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.name = '';
      state.isLoggedIn = false;

     
      localStorage.removeItem('authorizeToken');
      localStorage.removeItem('userName');
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
