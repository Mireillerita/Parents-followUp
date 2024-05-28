import React from 'react';

const Courses = () => {
  return (
    <div className="w-full pt-36 mb-8">
      <div className="text-center mb-8 md:mb-12 flex flex-col items-center justify-center">
        <div className="flex items-center">
          <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
          <h1 className="text-teal-900 font-bold font-serif text-[24px] md:text-[32px] lg:text-[40px]">
            COURSES
          </h1>
          <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
        </div>
      </div>

      <div className="flex flex-col bg-white py-2 px-4 md:px-12 pl-20 pr-20">
        <div className="flex flex-wrap justify-center items-center mt-10 gap-4">
          <div className="flex flex-col transform hover:shadow-md rounded-lg shadow-sm bg-white w-full sm:w-80">
            <div className="flex items-center justify-center h-64 bg-teal-100 rounded-t-lg">
              <img
                src="./photos/nursary1.png"
                alt="Level One Course"
                className="rounded-full h-48 w-48"
              />
            </div>
            <div className="px-4 py-6 flex flex-col items-center">
              <h1 className="text-xl font-bold text-black">Level One</h1>
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600">
                Find More
              </button>
            </div>
          </div>

          <div className="flex flex-col transform hover:shadow-md rounded-lg shadow-sm bg-white w-full sm:w-80">
            <div className="flex items-center justify-center h-64 bg-teal-100 rounded-t-lg">
              <img
                src="./photos/nursary2.png"
                alt="Level Two Course"
                className="rounded-full h-48 w-48"
              />
            </div>
            <div className="px-4 py-6 flex flex-col items-center">
              <h1 className="text-xl font-bold text-black">Level Two</h1>
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600">
                Find More
              </button>
            </div>
          </div>

          <div className="flex flex-col transform hover:shadow-md rounded-lg shadow-sm bg-white w-full sm:w-80">
            <div className="flex items-center justify-center h-64 bg-teal-100 rounded-t-lg">
              <img
                src="./child.jpg"
                alt="Level Three Course"
                className="rounded-full h-48 w-48"
              />
            </div>
            <div className="px-4 py-6 flex flex-col items-center">
              <h1 className="text-xl font-bold text-black">Level Three</h1>
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600">
                Find More
              </button>
            </div>
          </div>

          <div className="flex flex-col transform hover:shadow-md rounded-lg shadow-sm bg-white w-full sm:w-80">
            <div className="flex items-center justify-center h-64 bg-teal-100 rounded-t-lg">
              <img
                src="./photos/logo.png"
                alt="Level Four Course"
                className="rounded-full h-48 w-48"
              />
            </div>
            <div className="px-4 py-6 flex flex-col items-center">
              <h1 className="text-xl font-bold text-black">Level Four</h1>
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600">
                Find More
              </button>
            </div>
          </div>

          <div className="flex flex-col transform hover:shadow-md rounded-lg shadow-sm bg-white w-full sm:w-80">
            <div className="flex items-center justify-center h-64 bg-teal-100 rounded-t-lg">
              <img
                src="./childbooks.jpg"
                alt="Level Five Course"
                className="rounded-full h-48 w-48"
              />
            </div>
            <div className="px-4 py-6 flex flex-col items-center">
              <h1 className="text-xl font-bold text-black">Level Five</h1>
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600">
                Find More
              </button>
            </div>
          </div>

          <div className="flex flex-col transform hover:shadow-md rounded-lg shadow-sm bg-white w-full sm:w-80">
            <div className="flex items-center justify-center h-64 bg-teal-100 rounded-t-lg">
              <img
                src="./photos/image.png"
                alt="Level Six Course"
                className="rounded-full h-48 w-48"
              />
            </div>
            <div className="px-4 py-6 flex flex-col items-center">
              <h1 className="text-xl font-bold text-black">Level Six</h1>
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600">
                Find More
              </button>
            </div>
          </div>

          <div className="flex flex-col transform hover:shadow-md rounded-lg shadow-sm bg-white w-full sm:w-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
