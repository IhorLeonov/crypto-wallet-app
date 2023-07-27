import { useEffect } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/wallet/operations";
import { selectUser } from "../../redux/wallet/selectors";
import { handleReset } from "../../redux/wallet/walletSlice";
import { FiLogOut } from "react-icons/fi";

import toast from "react-hot-toast";

import {
  ConnectBtn,
  AccentData,
  BoldAccent,
  DisconnectBtn,
} from "./WalletView.styled";

export const WalletView = () => {
  const { userBalance, userAccount, userChain } = useSelector(selectUser);

  const dispatch = useDispatch();
  const hasMetamask = window.ethereum;

  const handleChainChanged = () => {
    window.location.reload();
  };

  const deepLinkURL =
    "https://metamask.app.link/dapp/crypto-wallet-app-ihorleonov.vercel.app/";

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

  const handleConnect = () => {
    if (!hasMetamask) {
      toast.success(
        'After installing Metamask reload page on web and click "Get Metamask" again on mobile!',
        { duration: Infinity }
      );
      window.open(deepLinkURL);
    } else dispatch(connect());
  };

  const handleDisconnect = () => {
    dispatch(handleReset());
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleConnect);
      window.ethereum.on("chainChanged", handleChainChanged);
    }
  });

  return (
    <>
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
        ) : hasMetamask ? (
          "Connect Wallet"
        ) : (
          "Get Metamask"
        )}
      </ConnectBtn>
      {userAccount && (
        <DisconnectBtn onClick={handleDisconnect}>
          <FiLogOut size={22} />
        </DisconnectBtn>
      )}
    </>
  );
};
