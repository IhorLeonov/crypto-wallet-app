import { Header, Main, Footer, GhLink } from "./App.styled";
import { TransferForm } from "./components/TransaferForm/TransferForm";
import { useSelector } from "react-redux";
import { WalletView } from "./components/WalletView/WalletView";
import { Logo } from "./components/Logo/Logo";
import { Loader } from "./components/Loader/Loader";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsGithub } from "react-icons/bs";

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
    if (error.includes("rejected")) toast.error("User rejected transaction!");
    if (error.includes("insufficient"))
      toast.error("Not enough funds for transaction!");
  }, [message, error]);

  return (
    <>
      <Header>
        <Logo width={35} height={50} />
        <WalletView />
      </Header>
      <Main>
        <TransferForm />
      </Main>
      <Footer>
        <GhLink
          href="https://github.com/IhorLeonov/crypto-wallet-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
          <BsGithub size={22} style={{ marginLeft: 10 }} />
        </GhLink>
      </Footer>
      {isLoading && (
        <Loader style={loaderStyles} width={65} color={"#12232f"} />
      )}
      <Toaster toastOptions={{ duration: 4000 }} position="bottom-center" />
    </>
  );
}

export default App;
