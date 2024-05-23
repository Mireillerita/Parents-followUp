import React from 'react';
import { FaGraduationCap, FaBookOpen, FaHome } from 'react-icons/fa';
import { PiChatCircleDotsLight } from 'react-icons/pi';
import { HiMiniArrowSmallRight } from 'react-icons/hi2';

const About = () => {
  return (
    <div className="w-full pt-40 pb-4">
      <div className="text-center mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-center">
        <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
        <h1 className="text-teal-900 font-bold font-serif text-[24px] md:text-[32px] lg:text-[40px]">
          ABOUT US
        </h1>
        <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-6">
        <div className="text-teal-600 bg-teal-100 hover:bg-teal-600 hover:text-white w-full md:w-80 h-64 p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out">
          <FaGraduationCap className="w-16 h-16 mb-2" />
          <h2 className="text-black hover:text-white text-xl">
            Skilled Students
          </h2>
          <p className="text-black hover:text-white text-center">
            Diam elitr kasd sed at elitr
          </p>
          <p className="text-black hover:text-white text-center">
            sed ipsum justo dolor
          </p>
          <p className="text-black hover:text-white text-center">
            sed clita amet diam
          </p>
        </div>

        <div className="text-teal-600 bg-teal-100 hover:bg-teal-600 hover:text-white w-full md:w-80 h-64 p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out">
          <FaBookOpen className="w-16 h-16 mb-2" />
          <h2 className="text-black hover:text-white text-xl">Book Library</h2>
          <p className="text-black hover:text-white text-center">
            Diam elitr kasd sed at elitr
          </p>
          <p className="text-black hover:text-white text-center">
            sed ipsum justo dolor
          </p>
          <p className="text-black hover:text-white text-center">
            sed clita amet diam
          </p>
        </div>

        <div className="text-teal-600 bg-teal-100 hover:bg-teal-600 hover:text-white w-full md:w-80 h-64 p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out">
          <PiChatCircleDotsLight className="w-16 h-16 mb-2" />
          <h2 className="text-black hover:text-white text-xl">Chat</h2>
          <p className="text-black hover:text-white text-center">
            Diam elitr kasd sed at elitr
          </p>
          <p className="text-black hover:text-white text-center">
            sed ipsum justo dolor
          </p>
          <p className="text-black hover:text-white text-center">
            sed clita amet diam
          </p>
        </div>

        <div className="text-teal-600 bg-teal-100 hover:bg-teal-600 hover:text-white w-full md:w-80 h-64 p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out">
          <FaHome className="w-16 h-16 mb-2" />
          <h2 className="text-black hover:text-white text-xl">Home</h2>
          <p className="text-black hover:text-white text-center">
            Diam elitr kasd sed at elitr
          </p>
          <p className="text-black hover:text-white text-center">
            sed ipsum justo dolor
          </p>
          <p className="text-black hover:text-white text-center">
            sed clita amet diam
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly mt-28 gap-8">
        <div
          className="bg-center bg-cover w-full md:w-96 h-64 md:h-96"
          style={{ backgroundImage: 'url(/public/childbooks.jpg)' }}
        ></div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-teal-600 text-2xl mb-4">About Us</h2>
          <p className="text-4xl mb-4">Welcome to Parents-followUp</p>
          <p className="mb-2">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <div className="mt-5 mb-4">
            <p className="mb-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
          </div>
          <div className="mt-9">
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="text-teal-600 text-2xl mr-2" />
              <p>Best performance</p>
            </div>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="text-teal-600 text-2xl mr-2" />
              <p>Chat of parents and the facilitators of their children</p>
            </div>
            <div className="flex items-center">
              <HiMiniArrowSmallRight className="text-teal-600 text-2xl mr-2" />
              <p>Library</p>
            </div>
          </div>
          <div className="mt-5">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-black">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
