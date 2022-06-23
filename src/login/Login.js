import { useState } from 'react';
import LoginForm from './LoginForm';
import LoginStatus from './LoginStatus';

function Login() {
  const [status, setStatus] = useState(undefined);

  const doLogin = (username, password) => {
    if (username === "TestUser" && password === "TestPassword") {
      setStatus('Login is successful!');
    } else {
      setStatus('Login is un-successful!');
    }
  };

  return (<>
    <LoginForm doLogin={doLogin} />
    <LoginStatus status={status} />
  </>
  );
}

export default Login;
