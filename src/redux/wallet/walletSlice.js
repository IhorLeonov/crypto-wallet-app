import { createSlice } from "@reduxjs/toolkit";
import { connect, send } from "./operations";

const initialState = {
  userData: { userAccount: "", userBalance: "", userChain: "" },
  paymentData: { ether: "", address: "", hash: "" },
  isLoading: false,
  isLoadingSend: false,
  error: "",
  message: "",
};

const connectWalletSlice = createSlice({
  name: "connectWallet",
  initialState,
  reducers: {
    handleReset: (state) => {
      state.userData = { userAccount: "", userBalance: "", userChain: "" };
      state.paymentData = { ether: "", address: "", hash: "" };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(connect.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(connect.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userData = action.payload;
        state.message = "Successful connection!";
      })
      .addCase(connect.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = "";
      })
      .addCase(send.pending, (state) => {
        state.isLoadingSend = true;
      })
      .addCase(send.fulfilled, (state, action) => {
        state.isLoadingSend = false;
        state.error = "";
        state.paymentData = action.payload;
        state.message = "Successful transaction!";
      })
      .addCase(send.rejected, (state, action) => {
        state.isLoadingSend = false;
        state.error = action.payload;
        state.message = "";
      }),
});

export const connectWalletReducer = connectWalletSlice.reducer;
export const { handleReset } = connectWalletSlice.actions;
