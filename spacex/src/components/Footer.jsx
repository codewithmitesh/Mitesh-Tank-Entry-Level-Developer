import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
        <div className="mb-0 mt-0 lg:mb-0 lg:mr-8 ml-0">
          <img
            src="https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg"
            alt="SpaceX Logo"
            className="w-40 h-auto"
          />
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4">
          <a href="#" className="hover:text-blue-500 my-2 lg:my-0 lg:mx-2">
            TWITTER
          </a>
          <a href="#" className="hover:text-red-500 my-2 lg:my-0 lg:mx-2">
            YOUTUBE
          </a>
          <a href="#" className="hover:text-blue-800 my-2 lg:my-0 lg:mx-2">
            LINKEDIN
          </a>
          <a href="#" className="hover:text-pink-500 my-2 lg:my-0 lg:mx-2">
            FLICKR
          </a>
          <a href="#" className="hover:text-purple-500 my-2 lg:my-0 lg:mx-2">
            INSTAGRAM
          </a>
          <a href="#" className="hover:text-green-500 my-2 lg:my-0 lg:mx-2">
            PRIVACY POLICY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
