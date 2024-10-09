// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/learn react/i); // Waits for "learn react" to appear
  expect(linkElement).toBeInTheDocument();
});
