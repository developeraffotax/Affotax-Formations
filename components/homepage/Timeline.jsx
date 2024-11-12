import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";

const Timeline = () => {
  return (
   
<div className="w-full  flex flex-col justify-center sm:py-0 ">
  <div className=" sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

    <div className=" text-gray-700 antialiased text-sm font-semibold pt-20 pb-32">

      {/* <!-- Vertical bar running through middle --> */}
      <div className="hidden sm:block w-1 bg-gray-200 absolute top-0 h-[100vh] left-1/2 transform -translate-x-1/2 "></div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12 ">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-2 bg-white rounded shadow">
              1. Choose Company Name
              </div>
            </div>
          </div>
          <div className="rounded-full bg-cyan-500 border-white border-4 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg> */}
            <IoMdSearch className="text-white text-xl"/>
          </div>
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-end w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pl-8">
              <div className="p-2 bg-white rounded shadow">
              2. Choose a company package

              </div>
            </div>
          </div>
          <div className="rounded-full bg-cyan-500 border-white border-4 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg> */}
            <MdOutlineLocalOffer className="text-white text-xl"/>
          </div>
        </div>
      </div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-2 bg-white rounded shadow">
              3. Checkout
              </div>
            </div>
          </div>
          <div className="rounded-full bg-cyan-500 border-white border-4 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> */}
            <IoBagCheckOutline className="text-white text-xl"/>
          </div>
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-0">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-end w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pl-8">
              <div className="p-2 bg-white rounded shadow">
              4. Submit your details

              </div>
            </div>
          </div>
          <div className="rounded-full bg-cyan-500 border-white border-4 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg> */}
            <FaRegCircleCheck className="text-white text-xl"/>
          </div>
        </div>
      </div>



    </div>

  </div>
</div>
  )
};

export default Timeline;
