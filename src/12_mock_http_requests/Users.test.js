import { render, screen } from '@testing-library/react';
import { Users } from './Users';
import { rest } from 'msw';
import { server } from './mocks/server';

const url = 'https://jsonplaceholder.typicode.com/users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(3);
  });

  test('renders error', async () => {
    server.use(
      rest.get(url, (req, res, ctx) => {
        // ...and respond to them using this JSON response.
        return res(ctx.status(500));
      })
    );
    render(<Users />);

    const errorText = await screen.findByText('Error fetching users');
    expect(errorText).toBeInTheDocument();
  });
});
