import './App.css';
import Cardano from "./cardano/serialization-lib";

const App = () => {
  const handleConnect = async () => {
    await Cardano.load();
    console.log("Cardano Instance: ", Cardano.Instance);
  }
  return (
    <div className="App">
      <h1>Hello, Cardano DApp Development!!</h1>
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
}

export default App;
