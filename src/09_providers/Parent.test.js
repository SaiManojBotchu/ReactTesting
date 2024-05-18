import { render, screen } from '@testing-library/react';
import Parent from './Parent';
import ThemeProvider from './useThemeProvider';

describe('Parent', () => {
  test('renders correctly', () => {
    render(<Parent />, { wrapper: ThemeProvider });
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('Dark mode');
  });
});
