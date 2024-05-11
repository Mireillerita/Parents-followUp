import React from 'react';

const Resetpass = () => {
  return (
    <div>
      <h1 className="text-2xl text-black font-bold">RESET ACCOUNT PASSWORD</h1>
      <h3></h3>
      <div className="mt-5 flex flex-col gap-5">
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter new password"
            value=""
            className=" bg-white px-3 py-2 rounded-md border border-black w-[50%]"
          />
        </div>
        <div>
          <input
            type="password"
            id=""
            placeholder="Confirm new password"
            value=""
            className=" bg-white px-3 py-2 rounded-md border border-black w-[50%]"
          />
        </div>
        <button className="bg-white  py-2 rounded-md text-white w-[50%] border border-black">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default Resetpass;
