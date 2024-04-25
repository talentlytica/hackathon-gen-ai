import { UserDataT } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface State {
  user?: UserDataT;
}

const initialState: State = {
  user: undefined,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUserData: (state: State, action: PayloadAction<UserDataT>) => {
      state.user = action.payload;
    },
  },
});

export const {
  setUserData,
} = globalSlice.actions;

export default globalSlice.reducer;
