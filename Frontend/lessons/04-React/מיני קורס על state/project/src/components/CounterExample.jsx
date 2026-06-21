import { useState } from 'react';

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="example">
      <h2>Counter State</h2>
      <div className="counter">
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}

export default CounterExample;
