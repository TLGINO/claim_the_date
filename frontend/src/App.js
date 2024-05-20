import Auction from "./components/auction/Auction";
import Metamask from "./components/Metamask";

function App() {
  return (
    <div className="container text-center">
      <div className="row">
        <Metamask />
      </div>
      <div className="row">
        <div className="col">
          <br />
          <Auction />
        </div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>
  );
}

export default App;
