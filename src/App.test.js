import { render, screen } from '@testing-library/react';
import App from './App';


describe('Basic unit test', () => {
  render(<App />)
  test('should render login form', () => {
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});

