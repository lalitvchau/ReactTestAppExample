import PropTypes from 'prop-types';

function LoginStatus({ status }) {
  return (
    status?.length > 0 &&
    <div data-testid='login-status'>
      <div data-testid='login-status-value'>{status}</div>
    </div>
  );
}

LoginStatus.prototype = {
  status: PropTypes.string
};

export default LoginStatus;
