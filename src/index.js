import React from "react";
import ReactDOM from "react-dom";
import Equation from "./Equation.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Equation />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
