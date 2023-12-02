import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/img/4.jfif";
import hero from "../assets/img/hero1.png";

const Homepage = () => {
  return (
    // Main container with background image
    <div className="h-screen w-full flex items-center justify-start px-32" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover' }}>
      {/* Content container */}
      <div className='flex flex-col items-start justify-center mt-36 w-1/2 ml-10 mr-24 mb-20'>
        {/* Title */}
        <h1 className="mb-4 text-6xl font-extrabold leading-none text-gray-900">Ethereum Payments for Software Companies</h1>
        {/* Description */}
        <p className="mb-6 font-normal text-gray-700 text-2xl">Simplify and streamline software transactions with our Ethereum payment solution for seamless and efficient payments.</p>
        {/* Buttons */}
        <div className='flex'>
          {/* Make Transaction Button */}
          <NavLink to="/transaction">
            <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-2xl font-normal text-center text-white rounded-lg bg-gray-900 hover:bg-slate-700">
              Make Transaction
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </NavLink>
          {/* Transaction Data Button */}
          <NavLink to="/data">
            <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-2xl font-normal text-center text-gray-900 bg-transparent rounded-lg border border-gray-700 hover:bg-gray-100">
              Transaction Data
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
