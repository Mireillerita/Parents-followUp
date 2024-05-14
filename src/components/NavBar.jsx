import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="bg-white text-blue-500 flex flex-row justify-between items-center fixed w-full top-0 z-50 p-4">
      <div className="flex flex-row items-center">
        <img
          className="h-20 w-20 pr-3 rounded-full"
          src="public/photos/Logos.png"
          alt=" rounded-lg"
        />
        <h1 className="text-blue-500 text-[30px]">Parents-follow-up</h1>
      </div>
      <nav
        className={`md:flex md:flex-row md:text-black md:gap-7 ${
          showMenu ? 'flex' : 'hidden'
        }`}
      >
        <div className="md: flex md:flex-col ">
          <NavLink to="/Home" className="hover:text-blue-500">
            Home
          </NavLink>
        </div>
        <div className="">
          <NavLink to="/About" className="hover:text-blue-500">
            About
          </NavLink>
        </div>
        <div className="">
          <NavLink to="/Courses" className="hover:text-blue-500">
            Courses
          </NavLink>
        </div>
        <div className="">
          <NavLink to="/Pages" className="hover:text-blue-500">
            Pages
          </NavLink>
        </div>
        <div className="">
          <NavLink to="/Contact" className="hover:text-blue-500">
            Contact
          </NavLink>
        </div>
        <div className="bg-blue-500 pl-4 pr-4 pt-2 pb-2 ml-auto mr-0">
          <NavLink to="/Login" className="text-white hover:bg-blue-500">
            Login
          </NavLink>
        </div>
      </nav>
      <div className="md:hidden">
        <FaBars className="text-black cursor-pointer" onClick={toggleMenu} />
      </div>
    </section>
  );
};

export default NavBar;
