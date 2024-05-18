import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [state, setState] = useState(initialValue);

  const increment = () => setState(st => st + 1);
  const decrement = () => setState(st => st - 1);

  return { state, increment, decrement };
}

export default useCounter;
