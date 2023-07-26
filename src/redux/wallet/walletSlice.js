import { createSlice } from "@reduxjs/toolkit";
import { connect, send } from "./operations";

const initialState = {
  userData: { userAccount: "", userBalance: "", userChain: "" },
  paymentData: { ether: "", address: "", hash: "" },
  isLoadingCnct: false,
  isLoadingSend: false,
  error: null,
};

const connectWalletSlice = createSlice({
  name: "connectWallet",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(connect.pending, (state) => {
        state.isLoadingCnct = true;
      })
      .addCase(connect.fulfilled, (state, action) => {
        state.isLoadingCnct = false;
        state.error = null;
        state.userData = action.payload;
      })
      .addCase(connect.rejected, (state, action) => {
        state.isLoadingCnct = false;
        state.error = action.payload;
      })
      .addCase(send.pending, (state) => {
        state.isLoadingSend = true;
      })
      .addCase(send.fulfilled, (state, action) => {
        state.isLoadingSend = false;
        state.error = null;
        state.paymentData = action.payload;
      })
      .addCase(send.rejected, (state, action) => {
        state.isLoadingSend = false;
        state.error = action.payload;
      }),
});

export const connectWalletReducer = connectWalletSlice.reducer;
