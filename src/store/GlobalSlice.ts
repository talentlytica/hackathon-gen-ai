import { UserDataT } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface State {
  user?: UserDataT|null;
}

type PayloadDataT<T> = {
  saveToLocalStorage?: boolean;
  data: T;
}

const initialState: State = {
  user: null ,
};

const globalSlice: any = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUserData: (state: State, action: PayloadAction<PayloadDataT<UserDataT>>) => {
      if (action.payload.saveToLocalStorage) {
        localStorage.setItem("UserInfo", JSON.stringify(action.payload.data));
      }
      state.user = action.payload.data;
    },
  },
});

export const {
  setUserData,
} = globalSlice.actions;

export default globalSlice.reducer;
