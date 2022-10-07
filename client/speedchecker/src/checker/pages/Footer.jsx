import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="flex flex-col justify-around items-center md:flex-row   px-3 py-5 w-full  bg-[#2c479a]   gap-16 ">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <p className="text-sm text-white">
          &copy; 2022 all right reserved created by
          <span className="text-white font-bold"> Beta tech Technology</span>
        </p>
        <div className="flex gap-3">
          <li className="list-none text-white hover:text-black font-bold">
            Contact
          </li>
          <li className="list-none text-white hover:text-black font-bold">
            Terms
          </li>
          <li className="list-none text-white hover:text-black font-bold">
            Privacy
          </li>
        </div>
      </div>
      <div className="flex gap-2">
        <span className=" border border-white p-3 cursor-pointer text-white rounded-[50%]  transition-all duration-300 hover:bg-black text-xl">
          <NavLink to="https://www.youtube.com/watch?v=lRIIIADGOD4">
            <FaTwitter />
          </NavLink>
        </span>
        <span className=" border border-white p-3 cursor-pointer text-white rounded-[50%]  transition-all duration-300 hover:bg-black text-xl">
          <NavLink to="/">
            <FaFacebook />
          </NavLink>
        </span>
        <span className=" border border-white p-3 cursor-pointer text-white rounded-[50%]  transition-all duration-300 hover:bg-black text-xl">
          <NavLink to="/">
            <FaLinkedin />
          </NavLink>
        </span>
        <span className=" border border-white p-3 cursor-pointer text-white rounded-[50%]  transition-all duration-300 hover:bg-black text-xl">
          <NavLink to="/">
            <FaInstagram />
          </NavLink>
        </span>
      </div>
    </div>
  );
}
