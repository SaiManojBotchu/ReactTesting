import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', { name: /clicked/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders a count 0', () => {
    render(<Counter />);
    const buttonElement1 = screen.getByRole('button', { name: /clicked/i });
    expect(buttonElement1).toHaveTextContent(0);
  });

  test('renders a count of 1 after clicking button', async () => {
    // 1. create instance of user-event
    user.setup();
    render(<Counter />);
    const buttonElement2 = screen.getByRole('button', { name: /clicked/i });
    // 2. perfom action
    await user.click(buttonElement2);
    expect(buttonElement2).toHaveTextContent(1);
  });

  test('renders a count of 10 after clicking set button', async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const buttonElement3 = screen.getByRole('button', { name: /clicked/i });
    const setElement = screen.getByRole('button', { name: 'Set' });
    await user.click(setElement);
    expect(buttonElement3).toHaveTextContent(10);
  });

  test('elements are focussed in the right order', async () => {
    user.setup();
    render(<Counter />);
    const buttonElement4 = screen.getByRole('button', { name: /clicked/i });
    const amountInput = screen.getByRole('spinbutton');
    const setElement = screen.getByRole('button', { name: 'Set' });
    await user.tab();
    expect(buttonElement4).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setElement).toHaveFocus();
  });
});
