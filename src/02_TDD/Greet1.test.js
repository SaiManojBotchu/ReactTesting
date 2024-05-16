// Test Driven Development(TDD) Expectation:
// 1. Greet should render the text hello
// 2. if a name is passed into the component it shoud render hello {name}

import { render, screen } from '@testing-library/react';
import Greet1 from './Greet1';

test('Greet renders hello', () => {
  render(<Greet1 />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet1 name='Manoj' />);
  // const textElement = screen.getByText(/hello manoj/i);
  const textElement = screen.getByText(/hello.*manoj/i);
  expect(textElement).toBeInTheDocument();
});
