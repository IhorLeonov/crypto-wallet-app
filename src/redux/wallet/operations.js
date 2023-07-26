import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";

// function handleEthereum() {
//   const { ethereum } = window;
//   if (ethereum && ethereum.isMetaMask) {
//     console.log("Ethereum successfully detected!");
//     // Access the decentralized web!
//   } else {
//     console.log("Please install MetaMask!");
//   }
// }

export const connect = createAsyncThunk(
  "wallet/connect",
  async (_, thunkAPI) => {
    if (window.ethereum) {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log("Ethereum successfully detected!");
        // Access the decentralized web!
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          const account = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          const userBalance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [account[0], "latest"],
          });

          const userChain = await provider.getNetwork();

          const data = {
            userAccount: account[0],
            userBalance,
            userChain: userChain.name,
          };

          return data;
        } catch (error) {
          console.log("Error:", error.message);
          return thunkAPI.rejectWithValue(error.message);
        }
      } else {
        console.log("Please install MetaMask!");
      }
    } else {
      window.addEventListener(
        "ethereum#initialized",
        async () => {
          const { ethereum } = window;
          if (ethereum && ethereum.isMetaMask) {
            console.log("Ethereum successfully detected!");
            // Access the decentralized web!
            try {
              const provider = new ethers.providers.Web3Provider(
                window.ethereum
              );

              const account = await window.ethereum.request({
                method: "eth_requestAccounts",
              });

              const userBalance = await window.ethereum.request({
                method: "eth_getBalance",
                params: [account[0], "latest"],
              });

              const userChain = await provider.getNetwork();

              const data = {
                userAccount: account[0],
                userBalance,
                userChain: userChain.name,
              };

              return data;
            } catch (error) {
              console.log("Error:", error.message);
              return thunkAPI.rejectWithValue(error.message);
            }
          }
        },
        {
          once: true,
        }
      );

      // setTimeout(handleEthereum, 3000); // 3 seconds
    }
  }
);

export const send = createAsyncThunk(
  "wallet/send",
  async (params, thunkAPI) => {
    const { address, ether } = params;
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      ethers.utils.getAddress(address);

      const tx = await signer.sendTransaction({
        to: address,
        value: ethers.utils.parseEther(ether),
      });

      const data = {
        ether,
        address,
        hash: tx.hash,
      };

      return data;
    } catch (error) {
      console.log("Error:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
