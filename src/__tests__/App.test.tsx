import App from "../App";
import React from "react";
import TestRenderer from "react-test-renderer";
import Counter from "../CounterStore";

test("counter increment and decrement works correctly", () => {
  const count = new Counter();
  const tree = TestRenderer.create(<App count={count} />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Counter Store", () => {
  test("check initial count", () => {
    const counter = new Counter();
    expect(counter.currentCount).toBe(0);
  });
  test("count increment correctly", () => {
    const counter = new Counter();
    counter.incrementCount();
    expect(counter.currentCount).toBe(1);
  });
  test("count decrement correctly", () => {
    const counter = new Counter();
    counter.decrementCount();
    expect(counter.currentCount).toBe(-1);
  });
});
