import "./App.scss";
import { ReactLandingPage } from "./components/main";

function App() {
  window.onload = function LoadingComplete() {
    console.log("LOADED");
  };

  return (
    <div className="App fadeIn">
      <ReactLandingPage />
    </div>
  );
}

export default App;
