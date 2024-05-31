import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation and error handling omitted for brevity

    setLoading(true);

    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/user/signin',
        {
          name: username,
          email: username,
          password: password,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        alert('Login successful!');
        const userRole = response.data.role; // Adjust according to your actual response structure
        navigate(userRole === 'admin' ? '/Dashboard' : '/Dash'); // Corrected to navigate to /Dashboard for admins
        // Redirect based on the role
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-black font-bold pb-4">SIGN IN</h1>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-700"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-teal-600 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Sign In
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account?{' '}
          <Link to="/SignUp">
            <span className="text-red-600">SignUp</span>
          </Link>
          <br />
          Forgot Password?{' '}
          <Link to="/ResetPassword">
            <span className="text-red-600">Reset Password</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
