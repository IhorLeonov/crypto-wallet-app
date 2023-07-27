import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/wallet/operations";
import { selectUser } from "../../redux/wallet/selectors";
import { ConnectBtn, AccentData, BoldAccent } from "./WalletView.styled";

export const WalletView = () => {
  const dispatch = useDispatch();
  const [visitedLink, setVisitedLink] = useState(false);

  const { userBalance, userAccount, userChain } = useSelector(selectUser);

  // const touchDevice = "ontouchstart" in document.documentElement;
  // console.log(touchDevice);

  function isMobileDevice() {
    return "ontouchstart" in window || "onmsgesturechange" in window;
  }
  // console.log(isMobileDevice);

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

  // const handleMobileConnect = () => {
  //   window.location.href = deepLinkURL;
  // };

  const handleConnect = () => {
    if (isMobileDevice()) {
      window.open(deepLinkURL);
    } else {
      // window.open("https://metamask.io/", "_blank");
      dispatch(connect());
    }

    // if (touchDevice && !visitedLink) {
    //   handleMobileConnect();
    //   setVisitedLink(true);
    // }
    // if (!window.ethereum) {
    //   alert("Install Metamask!");
    //   return;
    // }
    // dispatch(connect());
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleConnect);
      window.ethereum.on("chainChanged", handleChainChanged);
    }
  }, []);

  return (
    <>
      <a href="https://metamask.app.link/dapp/crypto-wallet-app-ihorleonov.vercel.app/">
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
