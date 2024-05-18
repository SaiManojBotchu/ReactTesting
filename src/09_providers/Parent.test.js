import { screen } from '@testing-library/react';
import { render } from './test-utils/render';
import Parent from './Parent';

describe('Parent', () => {
  test('renders correctly', () => {
    render(<Parent />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('Dark mode');
  });
});
