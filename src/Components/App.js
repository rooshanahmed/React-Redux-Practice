import React from 'react';
import { useState } from 'react';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <CounterOutput counter={counter} />
      <br />
      <CounterInput setCounter={setCounter} counter={counter} />
    </div>
  );
}

export default App;
