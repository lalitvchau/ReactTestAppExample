import { useState } from 'react';
import PropTypes from 'prop-types';

function LoginForm({ doLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div data-testid='login-form'>
      <input type='text'
        id='username'
        data-testid="username"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input type='password'
        id='password'
        data-testid="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button data-testid="login-action"
        onClick={() => doLogin(username, password)}
        disabled={!username?.length > 0 || !password?.length > 0}
      >
        Login
      </button>
    </div>
  );
}

LoginForm.prototype = {
  doLogin: PropTypes.func.isRequired,
};

export default LoginForm;
