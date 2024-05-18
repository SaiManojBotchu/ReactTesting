import { render, screen } from '@testing-library/react';
import List from './List';

const skills = ['one', 'two', 'three'];

describe('Skills', () => {
  test('rendres correctly', () => {
    render(<List skills={skills} />);

    const listElelement = screen.getByRole('list');
    expect(listElelement).toBeInTheDocument();

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders Login button', () => {
    render(<List skills={skills} />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  test('renders Learning button', () => {
    render(<List skills={skills} />);
    const learningButton = screen.queryByRole('button', { name: 'Start Learning' });
    expect(learningButton).not.toBeInTheDocument();
  });
});
