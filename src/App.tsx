import React from "react";
import "./App.scss";
import { Portfolio } from "./components/main";

function App() {
  const [loading, toggleLoading] = React.useState<boolean>(true);
  document.addEventListener("DOMContentLoaded", function () {
    toggleLoading(false);
  });

  return (
    <div className="App">
      {loading ? (
        <div className="p-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Portfolio />
      )}
    </div>
  );
}

export default App;
