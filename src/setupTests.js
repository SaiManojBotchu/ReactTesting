// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './12_mock_http_requests/mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// cleanup after the tests are finished.
afterAll(() => server.close());
