import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(st => st + 1)}>Clicked {count} times</button>;
}

export default Counter;
