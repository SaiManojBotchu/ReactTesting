import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter1 from './Counter1';

describe('Counter1', () => {
  test('renders correctly', () => {
    render(<Counter1 count={0} />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    user.setup();
    // mock functions
    const increment = jest.fn();
    const decrement = jest.fn();
    render(<Counter1 count={0} increment={increment} decrement={decrement} />);

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await user.click(incrementButton);
    expect(increment).toHaveBeenCalledTimes(1);

    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    await user.click(decrementButton);
    expect(decrement).toHaveBeenCalledTimes(1);
  });
});
