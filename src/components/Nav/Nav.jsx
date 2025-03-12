import React from 'react';
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black h-[64px] backdrop-blur-2xl rounded-full max-w-[460px] 
        mx-auto px-5 flex justify-between text-2xl text-white/50'>

          {/* Home */}
          <div className="group relative">
            <Link
              to="Home"
              activeClass="active"
              smooth={true}
              offset={-200}
              spy={true}
              duration={500}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center 
              rounded-full transition duration-300 relative hover:bg-gradient-to-r from-[#406aff] via-[#3bace2] to-[#b936ee]'>
              <BiHomeAlt />
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white 
            px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition duration-300">
              Home
            </span>
          </div>

          {/* About */}
          <div className="group relative">
            <Link
              to="About"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center 
              rounded-full transition duration-300 relative hover:bg-gradient-to-r from-[#406aff] via-[#3bace2] to-[#b936ee]'>
              <BiUser />
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white 
            px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition duration-300">
              About
            </span>
          </div>

          {/* Services */}
          <div className="group relative">
            <Link
              to="Services"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center 
              rounded-full transition duration-300 relative hover:bg-gradient-to-r from-[#406aff] via-[#3bace2] to-[#b936ee]'>
              <BsClipboardData />
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white 
            px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition duration-300">
              Services
            </span>
          </div>

          {/* Work */}
          <div className="group relative">
            <Link
              to="Work"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center 
              rounded-full transition duration-300 relative hover:bg-gradient-to-r from-[#406aff] via-[#3bace2] to-[#b936ee]'>
              <BsBriefcase />
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white 
            px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition duration-300">
              Work
            </span>
          </div>

          {/* Contact */}
          <div className="group relative">
            <Link
              to="Contact"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={500}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center 
              rounded-full transition duration-300 relative hover:bg-gradient-to-r from-[#406aff] via-[#3bace2] to-[#b936ee]'>
              <BsChatSquare />
            </Link>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white 
            px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition duration-300">
              Contact
            </span>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
