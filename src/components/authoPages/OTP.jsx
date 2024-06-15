import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const OTP = () => {
  const [code, setCode] = useState(new Array(6).fill(''));
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [resendMessage, setResendMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = async () => {
    const otp = code.join('');
    if (otp.length < 6) {
      setErrorMessage('Please enter the 6-digit code.');
      return;
    }

    try {
      const response = await axios.post(
        'https://blood-link-be.onrender.com/api/user/verify',
        { otp, email }
      );

      if (response.status === 200) {
        setSuccessMessage('Verification successful!');
        setErrorMessage('');
        setTimeout(() => {
          navigate('/Login');
        }, 2000);
      } else {
        setErrorMessage('Invalid OTP code.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(
        error.response?.status === 400
          ? 'Invalid OTP code.'
          : 'An unexpected error occurred.'
      );
      setSuccessMessage('');
    }
  };

  const handleResend = async () => {
    try {
      const response = await axios.post(
        'https://blood-link-be.onrender.com/api/user/resend-otp',
        { email }
      );

      if (response.status === 200) {
        setResendMessage('OTP has been resent to your email!');
        setErrorMessage('');
      } else {
        setResendMessage('');
        setErrorMessage('Failed to resend OTP.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResendMessage('');
      setErrorMessage('An unexpected error occurred.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-8 shadow-md">
      <div className="max-w-md w-full">
        <p className="text-2xl font-bold mb-6 text-gray-500 text-center">
          Enter Authentication Code
        </p>
        <h2 className="my-5 text-gray-600">
          Please, enter the code that has been sent to your email!
        </h2>
        <div className="flex justify-center space-x-2">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded"
            />
          ))}
        </div>
        <button
          className="mt-6 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 focus:outline-none"
          onClick={handleVerify}
        >
          Verify
        </button>
        {successMessage && (
          <p className="text-green-700 mt-3">{successMessage}</p>
        )}
        {errorMessage && <p className="text-teal-700 mt-3">{errorMessage}</p>}
        {resendMessage && <p className="text-blue-700 mt-3">{resendMessage}</p>}
      </div>
      <div className="mt-3 py-5 w-full text-center">
        <p>
          Haven't received the code?{' '}
          <button onClick={handleResend} className="text-teal-700">
            Resend OTP
          </button>
        </p>
        <p>
          <Link to="/Resetpass">
            <span className="text-teal-700">Click here to reset password</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OTP;
