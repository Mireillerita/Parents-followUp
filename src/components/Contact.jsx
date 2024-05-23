import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-evenly bg-gray-100 pt-40 pb-11"
    >
      <div className="text-center mb-8 md:mb-12 flex flex-row items-center justify-center">
        <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
        <h1 className="text-teal-900  font-bold font-serif text-[40px]">
          CONTACT
        </h1>
        <span className="block w-10 h-2 bg-teal-900 mx-4"></span>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="flex flex-col space-y-6 px-4">
          <h1 className="text-black text-xl">Get In Touch</h1>
          <p className="text-black ">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
          </p>
          <a href="#" className="text-teal-600 hover:underline">
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
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
          <input
            type="text"
            name="Email"
            placeholder="Your Email"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-600"
            rows="4"
          />
          <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
