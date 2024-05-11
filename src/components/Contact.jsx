import React, { useState } from 'react';

const Contact = () => {
  return (
    <div id="contact" className=" w-full flex flex-col ">
      <div class="container mx-auto px-4 text-center mt-8 text-cyan-400 pt-20">
        <h1 class="font-bold text-2xl md:text-3xl lg:text-[20px] flex pl-96">
          <span className="h-2 w-10 bg-black"></span>
          <span className="h-2 w-10 bg-red-500"></span> CONTACT US
          <span className="h-2 w-10 bg-black"></span>
          <span className="h-2 w-10 bg-red-500"></span>
        </h1>
        <h1 className="text-black text-[30px] pl-80">Contact For Any Querry</h1>
      </div>
      <div className="grid grid-cols-3 px-24">
        <div className=" ">
          <h1 className="text-black text-xl ">Get In Touch</h1>
          <p>
            The contact form is currently inactive. Get a functional
            <br />
            and working contact form with Ajax & PHP in a few minutes. Just copy
            and paste the files, add a little code and you're done.
            <span className="text-cyan-400">Download Now</span>
          </p>
        </div>
        <div className=" px-6">
          <img
            src="public/photos/wallpaper.png"
            alt=""
            className="h-[500px] w-[500px] "
          />
        </div>
        <div className="grid-rows-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="border-2 p-3 border-black bg-white "
          />
          <input
            type="text"
            name="Email"
            placeholder="Your Email"
            className="border-2 p-3  border-black bg-white ml-2"
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            className="border-2 px-28  border-black bg-white ml-2 mt-4 py-6"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="border-2 px-28  border-black bg-white ml-2 mt-4 py-10"
          />
          <button className="bg-cyan-400 text-white px-36 py-6">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
