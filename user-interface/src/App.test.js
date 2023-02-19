import { render, screen } from '@testing-library/react';
import App from './App';

test('renders basic app', () => {
  render(<App />);
  const textElement = screen.getByText(/Harbor Assignment/i);
  expect(textElement).toBeInTheDocument();
});
