import { useState } from "react";

function DatesForAddress(data) {
  const [datesForAddr, setDatesForAddress] = useState([]);
  const [addressToCheck, setAddressToCheck] = useState("");

  async function getDatesForAddress(event) {
    event.preventDefault();

    try {
      let _datesForAddr = await data.contract.getDatesForAddress(
        addressToCheck
      );
      _datesForAddr = _datesForAddr.map((a) =>
        new Date(Number(a, 10) * 86400 * 1000).toDateString()
      );
      setDatesForAddress(_datesForAddr);
    } catch (error) {
      console.log(error);
      console.log(error.reason);
    }
  }

  return (
    <form onSubmit={getDatesForAddress}>
      <div>
        <label>
          Get the dates owned by a given address:
          <input
            type="text"
            value={addressToCheck}
            onChange={(e) => setAddressToCheck(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <h4>{datesForAddr}</h4>
    </form>
  );
}

export default DatesForAddress;
