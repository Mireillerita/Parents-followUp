import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : 1);
  };

  return (

    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="flex-1 bg-cover bg-center md:bg-cover md:bg-center md:pl-8 md:pr-4 relative "
        style={{
          backgroundImage:
            currentSlide === 0
              ? 'url(public/photos/background.jpg)'
              : 'url(public/photos/classes-4.jpg)',
          marginRight: 0,
        }}
      >
        <div className="flex items-center justify-between p-10 absolute top-0 bottom-0 right-0 left-0">
          <div className="flex flex-col">
            <p onClick={goToPreviousSlide}>
              <FaArrowLeft />
            </p>
            <p onClick={goToNextSlide}>
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-blue-700 font-normal text-[20px] md:text-[40px]">
            PARENTS-FOLLOW-UP
          </h1>
          <p className="text-[20px] md:text-[50px] text-black">
            Home environments that support learning,
          </p>
          <p className="text-[20px] text-black md:text-[50px]">
            cultivate brighter futures.
          </p>
          <p className="text-blue-900 text-[14px] md:text-[20px] px-24text-center md:text-left">
            Help your child revise their studies routine and providing positive
            encouragement. Break tasks into manageable chunks and utilize
            various learning techniques to keep them engaged and motivated.
          </p>
          <div className="flex justify-center md:justify-start mt-10">
            <button className="bg-blue-700 text-white text-20 md:text-30 mr-10 py-3 px-6 md:py-5 md:px-10">
              READ MORE
            </button>
            <button className="bg-white text-blue-700 text-20 md:text-30 py-3 px-6 md:py-5 md:px-10">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    <div className="bg-black h-[700px] text-white flex flex-row  pt-20 justify-center ">

    </div>
  );
};

export default Home;
