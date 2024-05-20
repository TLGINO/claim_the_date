import { useState, useEffect } from "react";

function DatesOwned(data) {
  const [datesOwned, setDatesOwned] = useState([]);

  async function getDatesOwned() {
    try {
      let _datesOwned = await data.contract.getDatesOwned();
      _datesOwned = _datesOwned.map((a) =>
        new Date(Number(a, 10) * 86400 * 1000).toDateString()
      );
      setDatesOwned(_datesOwned);
    } catch (error) {
      console.log(error);
      console.log(error.reason);
    }
  }

  // Ensure getDatesOwned is called only once when the component mounts
  useEffect(() => {
    getDatesOwned();
  }, []);

  return (
    <>
      Owned dates:
      <ul className="list-group">
        {datesOwned.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DatesOwned;
