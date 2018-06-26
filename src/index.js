import React from "react";
import ReactDOM from "react-dom";
import Equation from "./Equation.js";
import { createStore } from "redux";
import { Provider } from "react-redux"
import reducers from "reducers";
import "./styles.css";

function App() {
  const store = createStore(
    reducers
  )

  return (
    <div className="App">
      <Provider store={store}>
        <Equation />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
