import logo from "./logo.svg";
import "./App.css";
import Jamarketing from "./components/jamarketing/jamarketing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Jamarketing />
    </div>
  );
}

export default App;
