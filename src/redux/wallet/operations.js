import { createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";

export const connect = createAsyncThunk(
  "wallet/connect",
  async (_, thunkAPI) => {
    try {
      if (!window.ethereum) alert("Install Metamask!");

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

      // console.log(tx);
      return data;
    } catch (error) {
      console.log("Error:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
