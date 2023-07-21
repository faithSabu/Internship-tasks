
import React from 'react';
import { Navigate, Link } from 'react-router-dom';

const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  renderErrorMessage,
  isSubmitted,
  renderForm,
}) => {
  return (
    <div className='container'>
      <div className='App'>
        <h4 align='center'>
          <i>Welcome to the Image Viewer</i>
        </h4>
        <br />
        <form onSubmit={handleSubmit}>
          <div class='mb-3'>
            Email Address
            <input
              type='email'
              class='form-control'
              id='InputEmail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name='email'
            />
            {renderErrorMessage('email')}
          </div>
          <div class='mb-3'>
            Password
            <input
              type='password'
              class='form-control'
              id='InputPassword'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name='password'
            />
            {renderErrorMessage('password')}
          </div>
          <button type='submit' class='btn btn-primary'>
            Log In
          </button>
        </form>
        <div className='login-form'>
          {isSubmitted ? <Navigate to='/landing' /> : renderForm}
        </div>
      </div>
      <Link to='/landing'>linkthis</Link>
    </div>
  );
};

export default Login;
