import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading state', async () => {
  render(<App />);
  // Check for the loading text immediately
  const loadingElement = await screen.findByText(/loading/i, { timeout: 3000 }); // Adjust timeout as needed
  expect(loadingElement).toBeInTheDocument();
});

test('renders API data', async () => {
  render(<App />);
  const apiDataElement = await screen.findByText(/API Data/i, { timeout: 3000 }); // Adjust timeout as needed
  expect(apiDataElement).toBeInTheDocument();
});
