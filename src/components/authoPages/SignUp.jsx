import React from 'react';
const Signup = () => {
  return (
    <div>
      <h1 className="text-2xl text-black font-bold">SIGN UP</h1>
      <div className="mt-5 flex flex-col gap-5">
        <div>
          <input
            type="text"
            id="names"
            placeholder="Full names"
            value=""
            className=" bg-white px-3 py-2 rounded-md w-[50%] border border-black text-black"
          />
        </div>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Email"
            required
            className=" bg-white px-3 py-2 rounded-md w-[50%] border border-black text-black"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="password"
            value=""
            className=" bg-white px-3 py-2 rounded-md border border-black w-[50%] text-black"
          />
        </div>
        <div>
          <input
            type="password"
            id="confirm password"
            placeholder="Confirm password"
            value=""
            className=" bg-white px-3 py-2 rounded-md border border-black w-[50%] text-black"
          />
        </div>
        <button className="bg-black py-2 rounded-md text-white w-[50%] border border-black ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
