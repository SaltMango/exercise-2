import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import Counter from "./CounterStore";
const counter = new Counter();
ReactDOM.render(<App count={counter} />, document.getElementById("root"));
