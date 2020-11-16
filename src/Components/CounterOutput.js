import React from "react";
import { useSelector } from "react-redux";

const CounterOutput = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h2>Counter Value: {counter} </h2>
    </div>
  );
};

export default CounterOutput;
