import { render, screen, logRoles } from '@testing-library/react';
import List1 from './List1';

const skills = ['one', 'two', 'three'];

describe('Skills', () => {
  test('start learing button is eventually displayed', async () => {
    const view = render(<List1 skills={skills} />);
    logRoles(view.container);
    // screen.debug();
    const learningButton = await screen.findByRole(
      'button',
      { name: 'Start Learning' },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(learningButton).toBeInTheDocument();
  });
});
