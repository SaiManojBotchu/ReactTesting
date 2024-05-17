import { render, screen } from '@testing-library/react';
import Application from './Application';

// 1. getByrole
/*
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
*/

// 2. getByLabelText
/* 
describe('Application1', () => {
  test('renders correctly', () => {
    render(<Application />);

    // const nameElement2 = screen.getByLabelText('Name', { selector: 'input' });
    const nameElement2 = screen.getByLabelText('Name');
    expect(nameElement2).toBeInTheDocument();
  });
});
 */

// 3. getByPlaceholderText
describe('Application2', () => {
  test('renders correclty', () => {
    render(<Application />);

    const nameElement3 = screen.getByPlaceholderText('name');
    expect(nameElement3).toBeInTheDocument();
  });
});
