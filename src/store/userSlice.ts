import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  surmame: string;
  email: string;
  id: string;
}

const initialState: UserState = {} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, surmame, email, id } = action.payload;
      state.name = name;
      state.surmame = surmame;
      state.email = email;
      state.id = id;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state: { user: UserState }) => state.user;
