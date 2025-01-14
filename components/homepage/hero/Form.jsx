"use client"

import React from "react";
import { LuSearchCheck } from "react-icons/lu";
import { ClockLoader } from "react-spinners";

const Form = ({ onSubmitHandler, companyName, setCompanyName, isLoading, isInputEmpty  }) => {
  return (
    <form className="w-full mb-16 max-xl:mb-8  " onSubmit={onSubmitHandler}>
      <div className="flex relative rounded-md w-full   ">
        <input type="text" name="search_query" id="query" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder={`${isInputEmpty ? 'Please write something to search' : 'Search if your perfect company name is available'}`} className={`w-full px-4 text-black p-3 rounded-md  rounded-r-none border-none placeholder-gray-500  outline-none ${isInputEmpty ? 'placeholder-red-500' : 'placeholder-gray-600'}`} />
        <button disabled={isLoading} className=" bg-[#FC6600] w-[30%] text-white text-lg  py-3 px-6 rounded-r-md"> {" "} {isLoading ? ( <span className="  w-full flex justify-center items-center   "> <ClockLoader size={25} color="#ffffff" /> </span> ) : ( <div className="w-full flex justify-center items-center gap-0 "> <span className=""> {" "} <LuSearchCheck className="inline text-2xl" />{" "} </span>{" "} <span className=" ">Search </span>{" "} </div> )}{" "} </button>
      </div>
    </form>
  );
};

export default Form;
