import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      role: role,
    };
    console.log(form);

    try {
      await axios({
        method: 'POST',
        url: 'https://parents-follow-u.onrender.com/followup/user/signup',
        data: form,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        console.log(response.data);
        alert('Signup successful!');
        navigate('/login');
      });
    } catch (error) {
      console.error(error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-black font-bold pb-4">SIGN UP</h1>
        <form className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-600"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-600"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-600"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-600"
              required
            />
          </div>
          <div>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-600"
              required
            >
              <option value="parent">Parent</option>
              <option value="instructor">Instructor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
