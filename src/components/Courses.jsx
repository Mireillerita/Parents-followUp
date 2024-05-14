import React from 'react';

const Courses = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white py-5 px-4">
      <div className="pt-20 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold">Search class here</h1>
        <p className="text-gray-500 text-base md:text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          reiciendis et nulla omnis at qui officia. Recusandae voluptate quia...
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10 gap-4 md:grid md:grid-cols-3">
        <div className="flex flex-col hover:scale-110 duration-300 transform hover:shadow-md rounded-lg shadow-sm bg-white">
          <div className="flex items-center justify-center h-64 bg-red-100 rounded-t-lg">
            <img
              src="public/photos/nursary1.png"
              alt="Level One Course"
              className="rounded-full h-48 w-48"
            />
          </div>
          <div className="px-4 py-6 flex flex-col items-center">
            <h1 className="text-xl font-bold text-black">Level One</h1>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Find More
            </button>
          </div>
        </div>
        <div className="flex flex-col hover:scale-110 duration-300 transform hover:shadow-md rounded-lg shadow-sm bg-white">
          <div className="flex items-center justify-center h-64 bg-red-100 rounded-t-lg">
            <img
              src="public/photos/nursary2.png"
              alt="Level Two Course"
              className="rounded-full h-48 w-48"
            />
          </div>
          <div className="px-4 py-6 flex flex-col items-center">
            <h1 className="text-xl font-bold text-black">Level Two</h1>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Find More
            </button>
          </div>
        </div>
        <div className="flex flex-col hover:scale-110 duration-300 transform hover:shadow-md rounded-lg shadow-sm bg-white">
          <div className="flex items-center justify-center h-64 bg-red-100 rounded-t-lg">
            <img
              src="public/photos/image.png"
              alt="Level Three Course"
              className="rounded-full h-48 w-48"
            />
          </div>
          <div className="px-4 py-6 flex flex-col items-center">
            <h1 className="text-xl font-bold text-black">Level Three</h1>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Find More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
