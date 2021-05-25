import { observable, action, makeObservable } from "mobx";

export default class Counter {
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
