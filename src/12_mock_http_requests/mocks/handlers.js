// only instal msw v1.0.0
import { rest } from 'msw';

const jsonData = [{ name: 'One' }, { name: 'Two' }, { name: 'Three' }];
const url = 'https://jsonplaceholder.typicode.com/users';

export const handlers = [
  // Intercept GET request
  rest.get(url, (req, res, ctx) => {
    // ...and respond to them using this JSON response.
    return res(ctx.status(200), ctx.json(jsonData));
  })
];
