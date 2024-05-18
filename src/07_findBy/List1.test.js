import { render, screen } from '@testing-library/react';
import List1 from './List1';

const skills = ['one', 'two', 'three'];

describe('Skills', () => {
  test('start learing button is eventually displayed', async () => {
    render(<List1 skills={skills} />);
    const learningButton = await screen.findByRole(
      'button',
      { name: 'Start Learning' },
      { timeout: 2000 }
    );
    expect(learningButton).toBeInTheDocument();
  });
});
