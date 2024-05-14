import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { PiChatCircleDotsLight } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
const About = () =>{
  return (
     <div
    className="flex-1 bg-cover bg-center bg-no-repeat h-screen"
    style={{ backgroundImage: 'url(/../public/child.jpg)' }} 
  >
    <div className='flex justify-center'>
      <div className='flex-col m-96 text-white'>
    <p className='text-8xl'>About Us</p> 
    <p className='text-xl px-5'>Home/About/Courses/Contact</p>
    </div>
    </div>
    <div className='flex flex-row justify-evenly'>
    <div className='text-blue-300 bg-blue-50 hover:scale-125 hover:bg-blue-300 w-56'>
      <div className='flex justify-center'>
    <FaGraduationCap className='w-20 h-20'/>
    </div>
    <h2 className='text-black text-xl justify-center flex'>Skilled students</h2>
    <p className='text-black justify-center flex'>Diam elitr kasd sed at elitr</p>
    <p className='text-black justify-center flex'>sed ipsum justo dolor</p>
    <p className='text-black justify-center flex'>sed clita amet diam</p>

    </div>
    <div className='text-blue-300 bg-blue-50 hover:scale-125 hover:bg-blue-300 w-56'>
      <div className='flex justify-center'>
    <FaBookOpen className='w-20 h-20'/>
    </div>
    <h2 className='text-black text-xl  justify-center flex'>Book Library</h2>
    <p className='text-black  justify-center flex'>Diam elitr kasd sed at elitr</p>
    <p className='text-black  justify-center flex'>sed ipsum justo dolor</p>
    <p className='text-black  justify-center flex'>sed clita amet diam</p>
      </div>
      <div className='text-blue-300 bg-blue-50 hover:scale-125 hover:bg-blue-300 w-56'>
        <div className='flex justify-center'>
      <PiChatCircleDotsLight className='w-20 h-20'/>
      </div>
      <p className='text-black  text-xl  justify-center flex'>Chat</p>
      <p className='text-black  justify-center flex'>Diam elitr kasd sed at elitr</p>
    <p className='text-black  justify-center flex'>sed ipsum justo dolor</p>
    <p className='text-black  justify-center flex'>sed clita amet diam</p>
      </div>
      <div className='text-blue-300 bg-blue-50 hover:scale-125 hover:bg-blue-300 w-56'>
<div className='flex justify-center'>
    <FaHome className='w-20 h-20'/>
    </div> 
    <p className='text-black text-xl  justify-center flex'>Home</p>
    <p className='text-black  justify-center flex'>Diam elitr kasd sed at elitr</p>
    <p className='text-black  justify-center flex'>sed ipsum justo dolor</p>
    <p className='text-black  justify-center flex'>sed clita amet diam</p>
    </div>
    </div>
    <div className='flex flex-row justify-evenly mt-20 bg-blue-950 text-white'>
    <div>
    <h3 className='text-3xl'>Quick Link</h3>
    <div className='flex flex-row'>
    <HiMiniArrowSmallRight className='mt-1'/>
    <p>About Us</p>
    </div>
    <div className='flex flex-row'>
    <HiMiniArrowSmallRight className='mt-1'/>
    <p>Contact Us</p>
    </div>
    <div className='flex flex-row'>
    <HiMiniArrowSmallRight className='mt-1'/>
    <p>Courses</p>
    </div>
    </div>
    <div>
      <h3 className='text-3xl'>Contact</h3>
      <div className='flex flex-row'>
      <FaPhoneAlt className='mt-1'/>
      <p>+250 793200567</p>
      </div>
      <div className='flex flex-row'>
      <MdOutlineEmail className='mt-1'/>
      <p>Wisdomschool@gmail.com</p>
     
      </div>
      <div className='mt-9'>
      <div className='flex flex-row gap-4'>
      <AiFillTwitterCircle className=''/>
      <BsFacebook />
      <IoLogoYoutube />
      <BsInstagram />
      </div>
      </div>
    </div>
    <div>
    <h3 className='text-3xl'>Developers</h3>
   <div className='flex flex-row hover:bg-red-500'>
    <HiMiniArrowSmallRight className='mt-1'/>
    <p>Documentation</p>
   </div>
   <div className='flex flex-row'>
   <HiMiniArrowSmallRight className='mt-1'/>
   <p>Documentation</p>
   </div>
   <div className='flex flex-row'>
   <HiMiniArrowSmallRight className='mt-1'/>
   <p>API</p>
   </div>
   <div className='flex flex-row'>
   <HiMiniArrowSmallRight className='mt-1'/>
   <p>Open source</p>
   </div>
   </div>
   </div>
      </div>
  )
}

export default About




