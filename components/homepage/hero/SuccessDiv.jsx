"use client"

import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";


const SuccessDiv = ({ searchAgainBtnHandler, companyNameToShow }) => {





  const localStorageHandler = () => {

      localStorage.setItem('company_name', companyNameToShow)






  }







  return (
    <div className="w-[60%] text-white pt-20 pb-20 max-xl:pb-12 max-w-2xl ">
      <div className="flex flex-col items-center justify-center gap-4 mb-8 max-xl:mb-8   bg-white  backdrop-blur-md   rounded-xl shadow-md shadow-gray-800/50  py-8 px-16 font-Inter">
        <span className="bg-green-500 text-white  text-[60px] rounded-full p-2  ">
          <FaCheck />
        </span>

        <h2 className="text-3xl text-green-500  font-semibold ">{companyNameToShow}</h2>
        <h3 className="text-lg  text-gray-800 font-poppins max-w-xl text-center">
          Congratulations! This company name is available.
        </h3>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-1 ">
        <Link href={`/packages/limited-company`} onClick={localStorageHandler} className="text-xl px-5 py-3 rounded-md text-white font-poppins bg-green-500 hover:bg-green-600 transition-all active:scale-95 cursor-pointer  flex justify-center items-center gap-1 ">
          Choose Package{" "}
          <span>
            <FaAnglesRight />
          </span>
        </Link>
        <button onClick={searchAgainBtnHandler} className="text-lg   py-2 rounded-md text-white font-poppins cursor-pointer active:scale-95 hover:text-green-500 transition-all">
          Or Search Again
        </button>
      </div>
    </div>
  );
};

export default SuccessDiv;
