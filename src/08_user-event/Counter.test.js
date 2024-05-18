import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders a count 0', () => {
    render(<Counter />);
    const buttonElement1 = screen.getByRole('button');
    expect(buttonElement1).toHaveTextContent(0);
  });

  test('renders a count of 1 after clicking button', async () => {
    // 1. create instance of user-event
    user.setup();
    render(<Counter />);
    const buttonElement2 = screen.getByRole('button');
    // 2. perfom action
    await user.click(buttonElement2);
    expect(buttonElement2).toHaveTextContent(1);
  });
});
