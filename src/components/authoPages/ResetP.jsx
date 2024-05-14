import React from 'react';

const Resetpass = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-center font-bold pb-4">
          RESET ACCOUNT PASSWORD
        </h1>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            placeholder="Enter new password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="confirm password"
            placeholder="Confirm new password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-700"
            required
          />
        </div>
        <button className="w-full py-2 rounded-md bg-blue-700 text-white hover:bg-blue-700focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default Resetpass;
