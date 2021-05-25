import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { observable, action, makeObservable } from "mobx";
import "./app.css";

class Counter {
  currentCount: number = 0;

  constructor() {
    makeObservable(this, {
      currentCount: observable,
      incrementCount: action,
      decrementCount: action,
    });
  }

  incrementCount = (): void => {
    this.currentCount++;
  };
  decrementCount = (): void => {
    this.currentCount--;
  };
}

const counter: Counter = new Counter();
//console.log(counter);

const CountView: React.FC<{ count: Counter }> = observer(({ count }) => {
  return (
    <React.Fragment>
      <div className="click">Clicks: {count.currentCount}</div>
      <div>
        <button onClick={count.incrementCount} className="button-style">
          Increment
        </button>
        <button onClick={count.decrementCount} className="button-style">
          Decrement
        </button>
      </div>
    </React.Fragment>
  );
});

const App: React.FC = () => {
  return (
    <div className="container">
      <CountView count={counter} />
    </div>
  );
};

export default App;
