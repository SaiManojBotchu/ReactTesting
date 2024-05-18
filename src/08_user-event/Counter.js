import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(st => st + 1)}>Clicked {count} times</button>
      <br />
      <input
        type='number'
        value={amount}
        onChange={e => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </>
  );
}

export default Counter;
