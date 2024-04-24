import React, { useState } from 'react';
// import "./Suma.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0)
      setCount(count - 1);
  };

  return (
    <div>
      {count==0 ?<button onClick={increment}>add</button>:
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>}
    </div>
  );
}

export default Counter;

