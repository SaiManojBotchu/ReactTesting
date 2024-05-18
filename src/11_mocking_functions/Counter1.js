import React from 'react';

function Counter1({ count, increment, decrement }) {
  return (
    <div>
      <h1>Counter1</h1>
      <p>{count}</p>
      {increment && <button onClick={increment}>Increment</button>}
      {decrement && <button onClick={decrement}>Decrement</button>}
    </div>
  );
}

export default Counter1;
