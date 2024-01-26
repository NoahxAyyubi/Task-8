import React, { useState } from 'react';

function Counter({ count }) {
  const [currentCount, setCurrentCount] = useState(count);

  const increment = () => {
    setCurrentCount(currentCount + 1);
  };

  const decrement = () => {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {currentCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
