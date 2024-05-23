import React from 'react';

const Home = () => {
  return (
    <div className="w-full h-screen pt-33  ">
      <div className="bg-black relative h-[100%]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(public/photos/image.png)' }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12">
          <h1 className="text-teal-400 text-2xl md:text-3xl lg:text-4xl mb-4">
            PARENTS-FOLLOW-UP
          </h1>
          <p className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug mb-4">
            Empowering Parents to Support Child's Learning Journey
            <br />
            Platform
          </p>
          <p className="text-white text-sm md:text-lg font-semibold mb-6">
            One good practice for helping children revise studies at home is
            <br />
            to establish a consistent study routine, allocating specific times
            each day for review sessions.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            
            <button className="bg-teal-600 text-white text-base md:text-lg lg:text-xl rounded-md py-2 px-6 hover:bg-black hover:border-teal-600">
              Read more
            </button>
            
            <button className="bg-white text-black text-base md:text-lg lg:text-xl rounded-md py-2 px-6 hover:bg-black hover:border-teal-600">
              Join now
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
