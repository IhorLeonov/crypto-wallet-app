export const selectUser = (state) => state.connectWallet.userData;
export const selectPaymentData = (state) => state.connectWallet.paymentData;
export const selectIsLoadingCnct = (state) => state.connectWallet.isLoadingCnct;
export const selectIsLoadingSend = (state) => state.connectWallet.isLoadingSend;
