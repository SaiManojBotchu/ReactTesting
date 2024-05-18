import { render, screen } from '@testing-library/react';
import Skills from './Skills';

const skills = ['one', 'two', 'three'];

describe('Skills', () => {
  test('rendres correctly', () => {
    render(<Skills skills={skills} />);

    const listElelement = screen.getByRole('list');
    expect(listElelement).toBeInTheDocument();

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });
});
