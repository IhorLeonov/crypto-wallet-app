import { useEffect } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/wallet/operations";
import { selectUser } from "../../redux/wallet/selectors";
import { ConnectBtn, AccentData, BoldAccent } from "./WalletView.styled";
// import toast from "react-hot-toast";

console.log(window.ethereum);

export const WalletView = () => {
  const dispatch = useDispatch();

  const { userBalance, userAccount, userChain } = useSelector(selectUser);

  // const isMobileDevice = () => {
  //   return "ontouchstart" in window || "onmsgesturechange" in window;
  // };

  const formattedBalance = userBalance
    ? Number(ethers.utils.formatEther(userBalance)).toFixed(3)
    : "";

  const formattedAccount =
    userAccount.slice(0, 5) + "..." + userAccount.slice(-4);

  const formattedChain = () => {
    if (userChain === "homestead") return "Ethereum Mainnet";
    if (userChain === "unknown")
      return userChain[0].toUpperCase() + userChain.slice(1) + " chain";
    if (!userChain) return "";
    else return userChain[0].toUpperCase() + userChain.slice(1);
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  const deepLinkURL =
    "https://metamask.app.link/dapp/crypto-wallet-app-ihorleonov.vercel.app/";

  const handleConnect = () => {
    if (!window.ethereum) {
      window.open(deepLinkURL);
      window.location.reload();
      // } else if (!window.ethereum && !isMobileDevice) {
      //   toast.error("Install Metamask!");
    }
    dispatch(connect());
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleConnect);
      window.ethereum.on("chainChanged", handleChainChanged);
    }
  }, []);

  return (
    <ConnectBtn onClick={handleConnect}>
      {userAccount ? (
        <>
          <BoldAccent>{formattedChain()}</BoldAccent>
          &nbsp;Balance:&nbsp;
          <AccentData>{formattedBalance}</AccentData>
          <BoldAccent>&nbsp;ETH</BoldAccent>
          &nbsp;Account:&nbsp;
          <AccentData>{formattedAccount}</AccentData>
        </>
      ) : (
        "Connect Wallet"
      )}
    </ConnectBtn>
  );
};
