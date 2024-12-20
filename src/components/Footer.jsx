import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>

    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400">
      <div>
        <h1 className="w-full text-3xl font-bold text-green-500 ">React.</h1>
        <p className="py-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It
        </p>
        <div className="flex justify-between   md:w-[75%]  my-4">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
   
  <div className="flex flex-row justify-between  sm:justify-between gap-10  py-4 m-3 ">
    <div className="sm:w-1/3">
      <h6 className="font-medium text-xl sm:text-2xl lg:text-3xl text-gray-400">Solutions</h6>
      <ul>
        <li className="py-2 text-sm sm:text-base">Analytics</li>
        <li className="py-2 text-sm sm:text-base">Marketing</li>
        <li className="py-2 text-sm sm:text-base">Commerce</li>
        <li className="py-2 text-sm sm:text-base">Insights</li>
      </ul>
    </div>
    <div className="sm:w-1/3">
      <h6 className="font-medium text-xl sm:text-2xl lg:text-3xl text-gray-400">Support</h6>
      <ul>
        <li className="py-2 text-sm sm:text-base">Pricing</li>
        <li className="py-2 text-sm sm:text-base">Documentation</li>
        <li className="py-2 text-sm sm:text-base">Guides</li>
        <li className="py-2 text-sm sm:text-base">API Status</li>
      </ul>
    </div>
    <div className="sm:w-1/3">
      <h6 className="font-medium text-xl sm:text-2xl lg:text-3xl text-gray-400">Company</h6>
      <ul>
        <li className="py-2 text-sm sm:text-base">About</li>
        <li className="py-2 text-sm sm:text-base">Blog</li>
        <li className="py-2 text-sm sm:text-base">Jobs</li>
        <li className="py-2 text-sm sm:text-base">Press</li>
        <li className="py-2 text-sm sm:text-base">Careers</li>
      </ul>
    </div>
  </div>
    </div>
  <div className="flex justify-center p-3 bg-white text-green-500 font-bold  h-[70px]">
    <h1 className="fixed-bottom">copy@ by Adhi...</h1>
  </div> 
    </>
  );
};

export default Footer;
