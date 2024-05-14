import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (
      !formData.names ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error submitting form: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Form submission successful:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error signing up. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-black font-bold pb-4">SIGN UP</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="names"
              placeholder="Full names"
              value={formData.names}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirm password"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
              required
            />
          </div>
          <button
            className="w-full py-2 rounded-md bg-blue-700 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
