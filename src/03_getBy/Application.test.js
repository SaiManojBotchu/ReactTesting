import { render, screen } from '@testing-library/react';
import Application from './Application';

// 1. getByRole
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
/*
describe('Application2', () => {
  test('renders correclty', () => {
    render(<Application />);

    const nameElement3 = screen.getByPlaceholderText('name');
    expect(nameElement3).toBeInTheDocument();
  });
});
*/

// 4. getByText
/*
describe('Application3', () => {
  test('renders correctly', () => {
    render(<Application />);

    const nameElement4 = screen.getByText(/name/i);
    expect(nameElement4).toBeInTheDocument();
  });
});
*/

// 5. getByDisplayValue
/*
describe('Application4', () => {
  test('renders correctly', () => {
    render(<Application />);

    const nameElement5 = screen.getByDisplayValue('manoj');
    expect(nameElement5).toBeInTheDocument();
  });
});
*/

// 6. getByAltText
/*
describe('Application5', () => {
  test('renders correctly', () => {
    render(<Application />);

    const altTextElement = screen.getByAltText('altText');
    expect(altTextElement).toBeInTheDocument();
  });
});
*/

// 7. getByTitle
/*
describe('Application6', () => {
  test('renders correctly', () => {
    render(<Application />);
    const titleElement = screen.getByTitle('close');
    expect(titleElement).toBeInTheDocument();
  });
});
*/

// 8. getByTestId
describe('Application7', () => {
  test('renders correctly', () => {
    render(<Application />);
    const customElement = screen.getByTestId('custom');
    expect(customElement).toBeInTheDocument();
  });
});
