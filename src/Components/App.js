import React from "react";
import CounterInput from "./CounterInput";
import CounterOutput from "./CounterOutput";

function App() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CounterOutput />
      <br />
      <CounterInput />
    </div>
  );
}

export default App;
