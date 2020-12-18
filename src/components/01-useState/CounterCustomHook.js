import React from "react";
import { useCounter } from "../../hook/useCounter";

export const CounterCustomHook = () => {
  const { reset, counter, inc, dec } = useCounter(100);

  return (
    <>
      <h1>Counter Hook:</h1>
      <h2>{counter}</h2>
      <button className="add" onClick={inc}>
        +1
      </button>
      <button onClick={reset}>Reset</button>
      <button className="add" onClick={dec}>
        -1
      </button>
    </>
  );
};
