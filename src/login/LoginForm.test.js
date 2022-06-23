import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

const mockDoLogin = jest.fn();

const setup = () => render(<LoginForm doLogin={mockDoLogin} />);

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

  test('should render username and password element with empty values', () => {
    const username = screen.getByTestId('username');
    const password = screen.getByTestId('password');
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(username).toHaveValue('');
    expect(password).toHaveValue('');
  });

  test('should render login-action with disabled state', () => {
    const loginAction = screen.getByTestId('login-action');
    expect(loginAction).toBeInTheDocument();
    expect(loginAction).toBeDisabled();
  });
});

describe('Test the component behaviors', () => {

  test('should handle username and password element change events', () => {
    const username = screen.getByTestId('username');
    const password = screen.getByTestId('password');
    expect(username).toHaveValue('');
    expect(password).toHaveValue('');
    // Insert value by trigging the change event of username and password text fields
    fireEvent.change(username, { target: { value: 'TestUser' } });
    fireEvent.change(password, { target: { value: 'TestPassword' } });

    expect(username).toHaveValue('TestUser');
    expect(password).toHaveValue('TestPassword');
  });

  test('should enabled login-action after inserting value to username and password', () => {
    const loginAction = screen.getByTestId('login-action');
    expect(loginAction).toBeDisabled();

    // Insert value by trigging the change event of username and password text fields
    fireEvent.change(screen.getByTestId('username'), { target: { value: 'TestUser' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'TestPassword' } });
    expect(loginAction).toBeEnabled();
  });

  test('should call doLogin with trigger login action', () => {
    const loginAction = screen.getByTestId('login-action');
    expect(loginAction).toBeDisabled();

    // Insert value by trigging the change event of username and password text fields
    fireEvent.change(screen.getByTestId('username'), { target: { value: 'TestUser' } });
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'TestPassword' } });
    fireEvent.click(screen.getByTestId('login-action'));
    expect(mockDoLogin).toBeCalled();
    expect(mockDoLogin).toBeCalledTimes(1);
  });
});
