import { Header, Main, Footer } from "./App.styled";
import { TransferForm } from "./components/TransaferForm/TransferForm";

import { WalletView } from "./components/WalletView/WalletView";
import { Logo } from "./components/Logo/Logo";

function App() {
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
    </>
  );
}

export default App;
