import { ethers } from "ethers";
import { useState } from "react";

function Metamask() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const provider = new ethers.BrowserProvider(window.ethereum);

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
    <>
      <button onClick={connectWallet}>
        {connected ? "Disconnect Wallet" : "Connect Wallet"}
      </button>
      <h4>{walletAddress}</h4>
    </>
  );
}

export default Metamask;
