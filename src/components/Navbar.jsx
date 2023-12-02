import React from 'react';
import logo from "../assets/img/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // Navigation bar container
    <nav class="text-2xl border-gray-200 w-[96%] pb-3 mx-10 my-2 top-2 fixed rounded-lg backdrop-filter backdrop-blur-[6px] shadow-md bg-gradient-to-l from-white-opacity-10 to-white-opacity-25 ">
      <div class="flex flex-wrap justify-between items-center mx-[160px]">
        {/* Logo and Home link */}
        <NavLink to="/" class="flex items-center text-gray-700 font-extrabold text-7xl">
          <img src={logo} class="h-20 w-52" alt="logo" />
        </NavLink>
        {/* Navigation links */}
        <div class="flex items-center lg:order-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink to="/" class="text-gray-700">Home</NavLink>
            </li>
            <li>
              <NavLink to="/transaction" class="text-gray-700">Make Transaction</NavLink>
            </li>
            <li>
              <NavLink to="/data" class="text-gray-700">Transaction Data</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
