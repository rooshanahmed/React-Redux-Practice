import React from "react";
import { useDispatch } from "react-redux";
import { increamentAction, decreamentAction, resetAction } from "./Action";

const CounterInput = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increamentAction())}>+</button>
      <button onClick={() => dispatch(decreamentAction())}>-</button>
      <button onClick={() => dispatch(resetAction())}>Reset</button>
    </div>
  );
};

export default CounterInput;
