'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Paths } from '@/routes/paths';
import Typography from '../typography';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-opacity-70 backdrop-blur-md shadow-lg fixed w-full  border-b-2 border-blue-900">
      <div className=" w-full mx-0 px-8 md:px-16 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Typography variant="h2">Book library</Typography>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-900 focus:outline-none focus:text-blue-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            {Paths.map((path, index) => (
              <Link key={index} href={path.path}>
                <Typography variant="h6">{path.label}</Typography>
              </Link>
            ))}
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            {Paths.map((path, index) => (
              <Link key={index} href={path.path}>
                <Typography variant="h6" className="block py-2">
                  {path.label}
                </Typography>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
