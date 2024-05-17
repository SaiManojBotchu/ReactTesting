import { render, screen } from '@testing-library/react';
import Application from './Application';

// 1. getByrole
describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    // const headingElement1 = screen.getByRole('heading');
    // const headingElement1 = screen.getByRole('heading', { name: 'Heading1' });
    const headingElement1 = screen.getByRole('heading', { level: 1 });
    expect(headingElement1).toBeInTheDocument();

    const headingElement2 = screen.getByRole('heading', { level: 2 });
    expect(headingElement2).toBeInTheDocument();

    // const nameElement = screen.getByRole('textbox');
    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    const ageElement = screen.getByRole('textbox', { name: /age/i });
    expect(ageElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
