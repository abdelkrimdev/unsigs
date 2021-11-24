import { render, screen } from '@testing-library/react';
import App from './App';

test('renders connect button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/connect/i);
  expect(buttonElement).toBeInTheDocument();
});
