import React, { useState } from "react";
import '../App.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h3>Counter</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button>{count}</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default Counter;
