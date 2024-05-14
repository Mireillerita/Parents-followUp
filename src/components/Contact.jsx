import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4"
    >
      <div className="container mx-auto text-center mt-8 text-blue-700 pt-20">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl flex justify-center">
          <span className="h-2 w-10 bg-black"></span>
          <span className="h-2 w-10 bg-red-500"></span> CONTACT US
          <span className="h-2 w-10 bg-black"></span>
          <span className="h-2 w-10 bg-red-500"></span>
        </h1>
        <h2 className="text-black text-xl md:text-2xl lg:text-3xl">
          Contact For Any Querry
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="flex flex-col space-y-6 px-4">
          <h1 className="text-black text-xl">Get In Touch</h1>
          <p className="text-black ">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Download Now
          </a>
        </div>
        <div className="px-4">
          <img
            src="public/photos/wallpaper.png"
            alt="Contact"
            className="rounded-lg shadow-md mx-auto sm:w-full md:w-full lg:w-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 px-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            name="Email"
            placeholder="Your Email"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows="4"
          />
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
