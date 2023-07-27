import { Header, Main, Footer } from "./App.styled";
import { TransferForm } from "./components/TransaferForm/TransferForm";
import { useSelector } from "react-redux";
import { WalletView } from "./components/WalletView/WalletView";
import { Logo } from "./components/Logo/Logo";
import { Loader } from "./components/Loader/Loader";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import {
  selectIsLoading,
  selectMessage,
  selectError,
} from "./redux/wallet/selectors";

const loaderStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function App() {
  const isLoading = useSelector(selectIsLoading);
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);

  useEffect(() => {
    if (message) toast.success(message);
    if (error && error.length < 100) toast.error(error);
    if (error.includes("rejected")) toast.error("User rejected transaction");
    if (error.includes("insufficient"))
      toast.error("Not enough funds for transaction");
  }, [message, error]);

  return (
    <>
      <Header>
        <WalletView />
      </Header>
      <Main>
        <Logo width={40} height={60} />
        <TransferForm />
      </Main>
      <Footer>Github Link</Footer>
      {isLoading && (
        <Loader style={loaderStyles} width={95} color={"#12232f"} />
      )}
      <Toaster toastOptions={{ duration: 5000 }} />
    </>
  );
}

export default App;
