import { render, screen } from '@testing-library/react';
import Example from './Example';

/* 
textMatch:
1) string
2) regex
3) function
 */
describe('Example', () => {
  test('renders correctly', () => {
    render(<Example />);

    // 1. String
    const textElement = screen.getByText('Hello world'); // fullstring match
    expect(textElement).toBeInTheDocument();
    const textElement1 = screen.getByText('world', { exact: false }); // substring match
    expect(textElement1).toBeInTheDocument();
    const textElement2 = screen.getByText('hello world', { exact: false }); // ignore case
    expect(textElement2).toBeInTheDocument();

    // 2. Regex
    const textElement3 = screen.getByText(/^Hello world$/); // fullstring match
    expect(textElement3).toBeInTheDocument();
    const textElement4 = screen.getByText(/world/); // substring match
    expect(textElement4).toBeInTheDocument();
    const textElement5 = screen.getByText(/hello world/i); // ignore case
    expect(textElement5).toBeInTheDocument();

    // 3. function
    const textElement6 = screen.getByText(content => content.startsWith('Hello'));
    expect(textElement6).toBeInTheDocument();
    const textElement7 = screen.getByText(content => content.endsWith('world'));
    expect(textElement7).toBeInTheDocument();
    const textElement8 = screen.getByText(content => content.includes('ello'));
    expect(textElement8).toBeInTheDocument();
  });
});
