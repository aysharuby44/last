// components/Navbar.jsx
"use client"; // Client component directive

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/logo2.jpg" 
                alt="Your Logo" 
                width={100} 
                height={40} 
                className="object-contain" 
              />
            </Link>
          </div>
          <h1 className="text-2xl text-center text-white uppercase tracking-wide pb-2 hidden md:block moving-text">
          </h1>
          <div className="hidden md:flex md:space-x-4">
            <Link href="/" className="hover:bg-white hover:text-black px-3 py-2 rounded font-bold">
              HOME
            </Link>
            <Link href="/Aboutus" className="hover:bg-white hover:text-black px-3 py-2 rounded">
              ABOUT US
            </Link>
            <Link href="/Contact" className="hover:bg-white hover:text-black px-3 py-2 rounded">
             CONTACT US
            </Link>
           
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none" 
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#d3ad3c] text-white`}>
          <Link href="/" className="block hover:bg-black px-3 py-2 rounded font-bold">
            HOME
          </Link>
          <Link href="/Aboutus" className="block hover:bg-black px-3 py-2 rounded font-bold">
            ABOUT US
          </Link>
          <Link href="/Restaurant" className="block hover:bg-black px-3 py-2 rounded font-bold">
            RESTAURANT
          </Link>
          <Link href="/Hotel" className="block hover:bg-black px-3 py-2 rounded font-bold">
            HOTEL
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
      


  