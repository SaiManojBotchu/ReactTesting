import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  test('should render the intialCount 0', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.state).toBe(0);
  });

  test('should accept and render the same intialCount', () => {
    const { result } = renderHook(useCounter, { initialProps: 10 });
    expect(result.current.state).toBe(10);
  });

  // act - a function that ensures updates happens before assertions are made
  test('should increment the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.state).toBe(1);
  });

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.state).toBe(-1);
  });
});
