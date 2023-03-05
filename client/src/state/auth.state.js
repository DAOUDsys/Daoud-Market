import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
};

const reducers = {
  setMode: (state) => {
    state.mode = state.mode === "light" ? "dark" : "light";
  },
  setLogin: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
  },
  setLogout: (state) => {
    state.user = null;
    state.token = null;
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { setMode, setLogin, setLogout, setPost, setBestSillier } =
  authSlice.actions;
const  authReducer = authSlice.reducer
export default authReducer;
