import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Login from './Login';

const setup = () => render(<Login />);

// clean up the jest dom after each test
afterEach(cleanup);
beforeEach(setup);

describe('Render the component', () => {
  /**
   * findBy* Methods
   * When Match Is Found: Returns a resolved Promise.
   * When Match Is Not Found: Returns a rejected Promise.
   * 
   */

  /**
 * getBy* Methods
 * When Match Is Found: Returns the node that matches the query.
 * When Match Is Not Found: Throws an error.
 * 
 */

  /**
  * queryBy* Methods
  * When Match Is Found: Returns the node that matches the query.
  * When Match Is Not Found: Returns null.
  * 
  */

  test('should render the login form default', () => {
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  test('should not render the login status default', async () => {
    expect(screen.queryByTestId('login-status')).not.toBeInTheDocument();
  });

  test('should render the login status after performing the login action', () => {
    // Enter username and password
    fireEvent.change(screen.getByTestId('username'), { target: { value: 'TestUser' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'TestPassword' } });
    // click on login-action
    fireEvent.click(screen.getByTestId('login-action'));
    expect(screen.getByTestId('login-status')).toBeInTheDocument();
  });

  test('should render the login status success with correct credential', () => {
    // Enter username and password
    fireEvent.change(screen.getByTestId('username'), { target: { value: 'TestUser' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'TestPassword' } });
    // click on login-action
    fireEvent.click(screen.getByTestId('login-action'));
    expect(screen.getByTestId('login-status-value')).toHaveTextContent('Login is successful!');
  });

  test('should render the login status failed with wrong credential', () => {
    // Enter username and password
    fireEvent.change(screen.getByTestId('username'), { target: { value: 'InvalidUsername' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'TestPassword' } });
    // click on login-action
    fireEvent.click(screen.getByTestId('login-action'));
    expect(screen.getByTestId('login-status-value')).toHaveTextContent('Login is un-successful!');
  });
});
