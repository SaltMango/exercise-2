import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import Counter from "./CounterStore";
import "./app.css";

const App = observer(({ count }: { count: Counter }) => {
  return (
    <div className="container">
      <div className="click">Clicks: {count.currentCount}</div>
      <div>
        <button onClick={count.incrementCount} className="button-style">
          Increment
        </button>
        <button onClick={count.decrementCount} className="button-style">
          Decrement
        </button>
      </div>
    </div>
  );
});

export default App;