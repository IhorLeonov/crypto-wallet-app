import { configureStore } from "@reduxjs/toolkit";
import { connectWalletReducer } from "./wallet/walletSlice";

export const store = configureStore({
  reducer: {
    connectWallet: connectWalletReducer,
  },
});
