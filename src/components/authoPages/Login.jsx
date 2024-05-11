import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setEmailError('Please enter your email address.');
      return;
    } else if (!isValidEmail(username)) {
      setEmailError('Please inter valid password; with @, .com or .net');
      return;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Please enter your password.');
      return;
    } else if (password.length < 6) {
      setPasswordError('Your password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      emailRegex.test(email) &&
      (email.includes('.com') || email.includes('.net'))
    );
  };

  return (
    <div>
      <h1 className="text-2xl text-black font-bold">SIGN IN</h1>
      <form className="mt-5 flex flex-col gap-5" onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Email"
            className="bg-white px-3 py-2 rounded-md w-[50%] border border-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {emailError && <p className="text-black">{emailError}</p>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-white  px-3 py-2 rounded-md border w-[50%] border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-black">{passwordError}</p>}
        </div>
        <div>
          <button className="bg-white  px-5 py-2 rounded-md text-white w-[50%] border-black">
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-3">
        Already have an account?
        <Link to="/SignUp">
          {' '}
          <span className="text-red-600">SignUp</span>
        </Link>
        <br />
        Forgot Password?{' '}
        <Link to="/ResetP">
          <span className="text-red-600">ResetP</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
