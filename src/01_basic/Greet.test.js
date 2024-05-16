import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greet renders hello', () => {
  render(<Greet />);
  // const headingElement = screen.getByText('Hello');
  const headingElement = screen.getByText(/hello/i);
  expect(headingElement).toBeInTheDocument();
});
