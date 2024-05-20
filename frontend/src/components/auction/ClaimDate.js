import { useState } from "react";

function ClaimDate(data) {
  const [dateClaimed, setClaimDate] = useState("");

  async function claimDate() {
    try {
      await data.contract.claimDate();
      setClaimDate("Date claimed");
    } catch (error) {
      console.log(JSON.stringify(error));
      console.log(error.reason);
      alert(error.reason);
      setClaimDate("Date has already been claimed");
    }
  }

  return <button onClick={claimDate}>Claim the Date</button>;
}

export default ClaimDate;
