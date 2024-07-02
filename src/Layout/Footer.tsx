import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../CustomComponents/darkmode';

export default function Footer() {
  type NavLinks = {
    name: string;
    path?: string;
    type?: string;
  };

  const navigationLinks: NavLinks[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];


  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" }
  ];

  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-gray-100 sm:p-6 dark: dark:bg-dark-gray">
       <div className="border-t border-gray-200 dark:border-white sm:pt-8"></div>
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col items-center mb-6 md:mb-0 md:items-start md:w-1/2">
            <Link to="/" className="flex items-center mb-4 md:mb-0">
              <img
                src={theme === 'dark' ? '/images/HollyHipwelldark.png':'/images/HollyHipwell.png'}
                className="h-8 sm:h-6"
                alt="Company Logo"
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-between md:w-1/2">
            {/* Navigation Section */}
            <div className="w-full sm:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <div className=" md:hidden border-t border-gray-200 dark:border-gray-400 pt-8 my-4"></div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
              <ul className="text-gray-600 dark:text-white">
                {navigationLinks.map((link, index) => (
                  link.path ? (
                    <li key={index} className="mb-4">
                      <Link to={link.path} className="hover:underline">{link.name}</Link>
                    </li>
                  ) : null
                ))}
              </ul>
            </div>

      

            {/* Legal Section */}
            <div className="w-full sm:w-1/2 text-center md:text-left">
            <div className=" md:hidden border-t border-gray-200 dark:border-gray-400 pt-8 my-4"></div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-white">
                {legalLinks.map((link, index) => (
                  <li key={index} className="mb-4">
                    <Link to={link.path} className="hover:underline">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-white">© {currentYear} <Link to="/" className="hover:underline">Holly Hipwell™</Link>. All Rights Reserved.</span>
        </div>
      </div>
    
    
    </footer>
  );
}