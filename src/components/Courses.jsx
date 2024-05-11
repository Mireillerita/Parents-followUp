import React from 'react';

const Courses = () => {
  return (
    <div className=" w-full h-screen bg-white py-5  ">
      <div className="pt-20 px-[600px] ">
        <h1 className=" text-[25px]">Search class here </h1>
        <p className="text-[10px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          <br />
          reiciendis et nulla omnis at qui officia. Recusandae voluptate quia{' '}
          <br />
        </p>
      </div>
      <div className="flex flex-row justify-center items-center space-x-8 mt-5 ">
        <div className="flex flex-col hover:scale-110 duration-500 opacity">
          <div className=" bg-red-100 rounded-full h-64 w-64 items-center flex ">
            <img
              src="public/photos/image.png"
              alt=""
              className="rounded-full h-48 w-48 ml-8"
            />
          </div>
          <div className="bg-red-100 h-40 w-80 py-10">
            <h1>Subject:Maths </h1>
          </div>
        </div>
        <div className="flex flex-col hover:scale-110 duration-500 opacity">
          <div className=" bg-red-100 rounded-full h-64 w-64 items-center flex">
            <img
              src="public/photos/wal5.jpeg"
              alt=""
              className="rounded-full h-48 w-48 ml-8 mt-2"
            />
          </div>
          <div className="bg-red-100 h-40 w-80 py-10">
            <h1 className="text-[20px]">Leve1</h1>
            <h1 className="text-white">Subject: Kinyarwanda</h1>
          </div>
        </div>
        <div className="flex flex-col hover:scale-110 duration-500 opacity">
          <div className=" bg-red-100 rounded-full h-64 w-64">
            <img
              src="public/photos/pxl.jpeg"
              alt=""
              className="rounded-full h-48 w-48 ml-8 mt-8"
            />
          </div>
          <div className="bg-red-100 h-40 w-80 py-10">
            <h1>Subject:</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
