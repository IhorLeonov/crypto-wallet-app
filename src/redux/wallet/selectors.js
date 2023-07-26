export const selectUser = (state) => state.connectWallet.userData;
export const selectPaymentData = (state) => state.connectWallet.paymentData;
export const selectIsLoading = (state) => state.connectWallet.isLoading;
export const selectIsLoadingSend = (state) => state.connectWallet.isLoadingSend;
export const selectError = (state) => state.connectWallet.error;
export const selectMessage = (state) => state.connectWallet.message;
