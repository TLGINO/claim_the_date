import { ethers } from "ethers";
import { useState, useEffect } from "react";
import AuctionContract from "../../artifacts/contracts/Auction.sol/Auction.json";

import ClaimDate from "./ClaimDate";
import DatesForAddress from "./DatesForAddress";
import DatesOwned from "./DatesOwned";

function Auction() {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initContract = async () => {
      try {
        const AuctionAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const auctionContract = new ethers.Contract(
          AuctionAddress,
          AuctionContract.abi,
          signer
        );
        setContract(auctionContract);
      } catch (error) {
        console.error("Error initializing contract:", error);
      }
    };

    initContract();
  }, []);

  return (
    <>
      {contract && (
        <>
          <br />
          <ClaimDate contract={contract} />
          <br />
          <DatesForAddress contract={contract} />
          <br />
          <DatesOwned contract={contract} />
          <br />
        </>
      )}
    </>
  );
}

export default Auction;
