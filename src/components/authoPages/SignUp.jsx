import React, { useState } from 'react';
import axios from 'axios';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

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
    await axios({
      method: 'POST',
      url: 'http://parents-follow-u.onrender.com/parent/user/signup',
      data: form,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '', // Added confirmPassword field
  //   role: 'parent', // Default role set to 'parent'
  // });

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.id]: event.target.value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (
  //     !formData.name ||
  //     !formData.email ||
  //     !formData.password ||
  //     !formData.confirmPassword || // Correct field name
  //     !formData.role
  //   ) {
  //     alert('Please fill in all required fields.');
  //     return;
  //   }

  //   if (formData.password !== formData.confirmPassword) {
  //     alert('Passwords do not match.');
  //     return;
  //   }

  //   try {
  //     console.log('Submitting form with data:', formData); // Log the formData before submitting

  //     const response = await axios.post(
  //       'http://parents-follow-u.onrender.com/parent/user/signup',
  //       {
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(formData),
  //       }
  //     );
  //     // changes

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       throw new Error(
  //         `Error submitting form: ${response.status} ${response.statusText} - ${errorText}`
  //       );
  //     }

  //     const data = await response.json();
  //     console.log('Form submission successful:', data);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert('There was an error signing up. Please try again later.');
  //   }
  // };

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
              type="email" // Changed to type "email"
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
              type="password" // Corrected to type "password"
              id="confirmPassword" // Corrected id to "confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword} // Correct field value
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
