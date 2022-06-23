import { render, screen, cleanup } from '@testing-library/react';
import LoginStatus from './LoginStatus';

// clean up the jest dom after each test
afterEach(cleanup);

describe('Render the login-status with status', () => {
  const status = 'Mock status';
  const setup = () => render(<LoginStatus status={status} />);
  beforeEach(setup);

  test('should render the login status', () => {
    expect(screen.getByTestId('login-status')).toBeInTheDocument();
  });

  test('should render the login status value from props status', () => {
    expect(screen.getByTestId('login-status-value')).toHaveTextContent(status);
  });

});

describe('Render the login-status without status', () => {
  const setup = () => render(<LoginStatus />);
  beforeEach(setup);

  test('should not render the login status', () => {
    expect(screen.queryByTestId('login-status')).not.toBeInTheDocument();
  });
});
