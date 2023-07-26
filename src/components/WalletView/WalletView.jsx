import { useEffect } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/wallet/operations";
import { selectUser, selectIsLoadingCnct } from "../../redux/wallet/selectors";
import { Loader } from "../Loader/Loader";

import {
  WalletBox,
  ConnectBtn,
  AccentData,
  BoldAccent,
} from "./WalletView.styled";

export const WalletView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingCnct);
  const { userBalance, userAccount, userChain } = useSelector(selectUser);

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

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleConnect);
      window.ethereum.on("chainChanged", handleChainChanged);
    }
  }, []);

  return (
    <>
      {userAccount && !isLoading ? (
        <WalletBox>
          <BoldAccent>{formattedChain()}</BoldAccent>
          &nbsp;Balance:&nbsp;
          <AccentData>{formattedBalance}</AccentData>
          <BoldAccent>&nbsp;ETH</BoldAccent>
          &nbsp;Account:&nbsp;
          <AccentData>{formattedAccount}</AccentData>
        </WalletBox>
      ) : (
        <ConnectBtn onClick={handleConnect}>
          {isLoading ? <Loader width={22} color={"#18d685"} /> : "Connect"}
        </ConnectBtn>
      )}
    </>
  );
};
