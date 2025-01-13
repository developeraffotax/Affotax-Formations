import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { BiSearchAlt } from "react-icons/bi";
import { LuListChecks } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";


const PackageHeader = () => {
  return (
    <section className="w-full grid   grid-cols-[2fr_1fr_2fr_1fr_2fr_1fr_2fr] py-12    ">


      <div className=" flex flex-col justify-center items-center gap-4 text-cyan-500   border-b-2 pb-2 border-cyan-500    "> 

        <span className="text-4xl "><BiSearchAlt /></span>

        <h2 className="font-poppins text-lg   ">1. Company Name</h2>

      </div>


      <div className=" flex flex-col justify-center items-center gap-4  "> 

        <span className="text-4xl "><MdKeyboardArrowRight /></span>

       

      </div>



      <div className=" flex flex-col justify-center items-center gap-4  border-b-2 pb-2 border-black"> 

        <span className="text-4xl "><LuListChecks /></span>

        <h2 className="font-poppins text-lg     ">2. Select Package</h2>

      </div>




      <div className=" flex flex-col justify-center items-center gap-4 "> 

      <span className="text-4xl "><MdKeyboardArrowRight /></span>



      </div>





      <div className=" flex flex-col justify-center items-center gap-4  border-b-2 pb-2 border-black  "> 

        <span className="text-4xl "><IoBagCheckOutline /></span>

        <h2 className="font-poppins text-lg     ">3. Checkout</h2>

      </div>





      <div className=" flex flex-col justify-center items-center gap-4 "> 

      <span className="text-4xl "><MdKeyboardArrowRight /></span>

        

      </div>





      <div className=" flex flex-col justify-center items-center gap-4  border-b-2 pb-2 border-black  "> 

        <span className="text-4xl "><CiViewList /></span>

        <h2 className="font-poppins text-lg     ">4. Company Details</h2>

      </div>


      
    </section>

  
  )
};

export default PackageHeader;
