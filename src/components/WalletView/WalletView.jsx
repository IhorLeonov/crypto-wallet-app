import { useEffect } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/wallet/operations";
import { selectUser } from "../../redux/wallet/selectors";
import { ConnectBtn, AccentData, BoldAccent } from "./WalletView.styled";

export const WalletView = () => {
  const dispatch = useDispatch();

  const { userBalance, userAccount, userChain } = useSelector(selectUser);

  const mobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

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

  const handleConnect = () => {
    if (!window.ethereum) {
      alert("Install Metamask!");
      return;
    }
    dispatch(connect());
  };

  const deepLinkURL =
    "mydapp://connect?network=1&url=https://crypto-wallet-app-ihorleonov.vercel.app/";

  // const handleMobileConnect = () => {
  //   window.location.href(deepLinkURL);
  // };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleConnect);
      window.ethereum.on("chainChanged", handleChainChanged);
    }
  }, []);

  return (
    <>
      <a href="mydapp://connect?network=1&url=https://crypto-wallet-app-ihorleonov.vercel.app/">
        metamask.app
      </a>
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
    </>
  );
};
