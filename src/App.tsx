import "./App.scss";
import { Portfolio } from "./components/main";

function App() {
  window.onload = function LoadingComplete() {
    console.log("LOADED");
  };

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
