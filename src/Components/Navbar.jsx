
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaDesktop, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Logo from "../assets/Logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const [showSunMenu, setShowSunMenu] = useState(false);
  const modeBtnRef = useRef(null);


  useEffect(() => {
    const body = document.querySelector("body");
    body.className =
      mode === "dark" ? "bg-gray-900 text-white" : "bg-gradient-to-b from-gray-300 via-blue-gray-200 to-cool-gray-500";

    // Add event listener to window when the sun menu is open
    window.addEventListener("click", handleOutsideClick);

    // Remove event listener when the component unmounts or the sub menu is closed
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, showSunMenu]);

  const handleClick = () => setNav(!nav);
  
  const handleSunClick = () => {
    setShowSunMenu((prev) => !prev);
  }

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    localStorage.setItem("mode", selectedMode);
  };

  const handleOutsideClick = (event) => {
    if(!modeBtnRef?.current){
      return;
    }



    const isModeBtn = event.target.closest('.mode-btn');

    // do nothing if clicked on mode btn
    if(isModeBtn){
      
        
      return;
    }
    
    if(!showSunMenu){
      
      return;
    }
    setShowSunMenu((prev) => !prev);

   
  };

  return (
    <div
      className={`w-full h-[85px] fixed flex justify-between px-4 items-center ${mode === "dark" ? " text-white" : "bg-gradient-to-b from-gray-300 via-blue-gray-500 to-cool-gray-500 text-gray-900  "
        }`}
    >
      <div>
        {/* <a href="https://www.youtube.com/"> */}
          <img src={Logo} alt="Logo" style={{ width: '70px' }} />
          {/* className="ml-10 mt-6  w-[100px] " */}
        {/* </a> */}
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Contact</li>
        <li className="mt-1" >
        <span onClick={handleSunClick} className="mode-btn" ref={modeBtnRef} >
            <FaSun />
          </span>
          <ul 
            className={`  bg-gray-300 p-4 absolute right-[6px] font-bold top-[68px] text-black w-auto rounded-xl ${showSunMenu ? 'block' : 'hidden'} `}
          >
            <li
              className="flex gap-4 hover:text-blue-600 p-[10px]"
              onClick={() => handleModeChange("light")}
            >
              <FaSun />
              Light
            </li>
            <li
              className="flex gap-4 hover:text-blue-600 p-[10px]"
              onClick={() => handleModeChange("dark")}
            >
              <FaMoon />
              Dark
            </li>
            <li
              className="flex gap-4 hover:text-blue-600 p-[10px]"
              onClick={() => handleModeChange("system")}
            >
              <FaDesktop />
              System
            </li>
          </ul>
        </li>
      </ul>
      {/* Mobile Reponsive */}
      <div className="flex items-center md:hidden ">

        <div>
          <span onClick={handleSunClick} className="mode-btn" ref={modeBtnRef} >
            <FaSun />
          </span>
          <ul
            className={`bg-gray-300 p-4 absolute right-[6px] font-bold top-[68px] text-black w-auto rounded-xl ${showSunMenu ? 'block' : 'hidden'}`}
          >
            <li
              className="flex gap-4 hover:text-blue-600 p-[10px]"
              onClick={() => handleModeChange("light")}
            >
              <FaSun />
              Light
            </li>
            <li
              className="flex gap-4 hover:text-blue-600 p-[10px]"
              onClick={() => handleModeChange("dark")}
            >
              <FaMoon />
              Dark
            </li>
            <li
              className="flex gap-4 hover:text-blue-600 p-[10px]"
              onClick={() => handleModeChange("system")}
            >
              <FaDesktop />
              System
            </li>
          </ul>
        </div>

        <div onClick={handleClick} className="md:hidden z-10 p-9">
          {!nav ? <FaBars /> : <FaTimes className="text-green-200" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "  absolute top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center"}>
        <li className="py-7 text-4xl">Home</li>
        <li className="py-7 text-4xl">About</li>
        <li className="py-7 text-4xl">Skills</li>
        <li className="py-7 text-4xl">Experience</li>
        <li className="py-7 text-4xl">Contact</li>
      </ul>

      <div className="hidden md:flex fixed flex-col top-[35%] left-0  ">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-200 bg-[#333333] " >
            <a className="flex justify-between items-center w-full text-gray-300 " href="/"  > Github <FaGithub size={27} /></a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-200 bg-blue-800" >
            <a className="flex justify-between items-center w-full text-gray-300 " href="/"  > Linkedin <FaLinkedin size={27} /></a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-200 bg-[#03382d] " >
            <a className="flex justify-between items-center w-full text-gray-300 " href="/"  > Email  <HiOutlineMail size={27} /></a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-200 bg-green-800 " >
            <a className="flex justify-between items-center w-full text-gray-300 " href="/"  > Other <BsFillPersonLinesFill size={27} /></a>
          </li>


        </ul>
      </div>

    </div>
  );
}

export default Navbar;