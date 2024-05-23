import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { BsInstagram } from 'react-icons/bs';
import { HiMiniArrowSmallRight } from 'react-icons/hi2';

const Footer = () => {
  return (
    <div className="bg-teal-950 text-white mt-0 ">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-3xl mb-4">Quick link</h1>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <p>About Us</p>
            </div>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <p>Contact Us</p>
            </div>
            <div className="flex items-center">
              <HiMiniArrowSmallRight className="mr-2" />
              <p>Courses</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" />
              <p>+250 793200567</p>
            </div>
            <div className="flex items-center mb-4">
              <MdOutlineEmail className="mr-2" />
              <p>Wisdomschool@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              <AiFillTwitterCircle className="text-2xl" />
              <BsFacebook className="text-2xl" />
              <IoLogoYoutube className="text-2xl" />
              <BsInstagram className="text-2xl" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl mb-4">Gallery</h1>
            <div className="flex flex-wrap gap-4">
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(/../public/photo2.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(/../public/photo3.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(/../public/photo4.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(/../public/photo5.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(/../public/photo2.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div
                className="bg-center w-16 h-16"
                style={{
                  backgroundImage: 'url(/../public/photo7.jpg)',
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl mb-4">Developers</h3>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <p>Documentation</p>
            </div>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <p>API</p>
            </div>
            <div className="flex items-center mb-2">
              <HiMiniArrowSmallRight className="mr-2" />
              <p>Open source</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
