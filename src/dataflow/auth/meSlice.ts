import { User } from "@/models/home";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  user: User | null;
}

const initialState: IInitialState = {
  user: null,
};

export const meSlice = createSlice({
  name: "meSlice",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      if (!action.payload) {
        return state;
      }

      return { ...state, user: { ...state.user, ...action.payload } };
    },
  },
});

export const { setCurrentUser } = meSlice.actions;
export default meSlice.reducer;
