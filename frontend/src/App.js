import { useState } from "react";
import "./App.css";
// const { ethers } = require("ethers");
import { ethers } from "ethers";

import Auction from "./artifacts/contracts/Auction.sol/Auction.json";
const AuctionAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

function App() {
  // state to store about the connection of wallet
  const [connected, setConnected] = useState(false);
  // state to store the wallet address that is connected
  const [walletAddress, setWalletAddress] = useState("");
  const [symbol, setTesting] = useState("");

  // Contract info
  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = new ethers.Contract(AuctionAddress, Auction.abi, provider);

  async function getTesting() {
    setTesting(await contract.test());
  }
  async function connectWallet() {
    if (!connected) {
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
    } else {
      setConnected(false);
      setWalletAddress("");
    }
  }
  return (
    <div className="App">
      <div className="main">
        <button onClick={getTesting}>Test</button>
        <h4>{symbol}</h4>

        <br></br>

        <button onClick={connectWallet}>
          {connected ? "Disconnect Wallet" : "Connect Wallet"}
        </button>
        <h3>Address</h3>
        <h4>{walletAddress}</h4>
      </div>
    </div>
  );
}

export default App;
