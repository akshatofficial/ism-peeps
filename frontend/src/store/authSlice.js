import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
  otpData: {
    phone: "",
    hash: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      // state param is injected by redux-toolkit itself
      const { user } = action.payload;
      state.user = user;
      state.isAuth = true;
    },

    setOtp: (state, action) => {
      const { phone, hash } = action.payload;
      state.otpData.phone = phone;
      state.otpData.hash = hash;
    },
  },
});

export const { setAuth, setOtp } = authSlice.actions;

export default authSlice.reducer;
