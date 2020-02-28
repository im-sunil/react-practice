import React, { useState } from "react";

let CounterView = ({ count, onIncrement, onDecreament }) => {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        +
      </button>
      <span style={{ padding: 5, margin: 5 }}>{count}</span>
      <button type="button" onClick={onDecreament}>
        -
      </button>
    </div>
  );
};

let Counter = () => {
  let [count, setCount] = useState(0);

  let increamentHandler = () => {
    setCount(c => c + 1);
  };

  let decreamentHandler = () => {
    setCount(c => (c > 0 ? c - 1 : 0));
  };
  return (
    <CounterView
      count={count}
      onIncrement={increamentHandler}
      onDecreament={decreamentHandler}
    ></CounterView>
  );
};

export default Counter;
