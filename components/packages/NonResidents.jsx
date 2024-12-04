import React from "react";
import { RiInformation2Line } from "react-icons/ri";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

import OriginalPrice from "./shared/OriginalPrice";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Header from "../contact/Header";
import PackageHeader from "./PackageHeader";






const NonResidents = () => {
  return (
    <section className="w-full  font-Inter  ">




<div className="w-full container mx-auto  px-40 max-xl:px-8 ">













<PackageHeader />


<div className="w-full    max-w-2xl text-center mx-auto "> <h3 className="w-full text-center font-Inter text-3xl "> Select the perfect package for you & register your new company online today. </h3>  
<h2 className="w-full text-6xl text-center font-bold font-Montserrat drop-shadow-lg bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text mt-12">Choose a Plan</h2> </div>







<div className="w-full grid grid-cols-1  py-20  ">


<ul className="w-[50%] grid grid-cols-3 gap-0  border  shadow-md">
 
   <Link href='/packages/limited-company' className="flex  justify-center items-center py-3 border-r text-sm  hover:bg-orange-500 hover:text-white  "> <h3>Limited Company</h3></Link>
   <Link href='/packages/non-residents' className="flex  justify-center items-center py-3 border-r text-sm    hover:bg-orange-500 hover:text-white    bg-orange-500 text-white   "> <h3>Non-Residents</h3></Link>
   <Link href='/packages/llp' className="flex  justify-center items-center py-3  text-sm hover:bg-orange-500  hover:text-white   "><h3>LLP</h3></Link>
   
</ul>


<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b   bg-[#E7F4FF] shadow-sm">
  <li className="w-full flex justify-between items-center gap-4 px-4 py-2 border-x        "><h3 className="flex justify-start gap-2 items-center ">  What you'll get!</h3> </li>
  
   <li className="flex flex-col justify-center items-center py-2 border-r text-lg  relative    "><h3>Standard</h3>  <span className="font-semibold">£69</span></li>
   <li className="flex flex-col justify-center items-center py-2 border-r text-lg relative"> <OriginalPrice title={'30% OFF'} price={'110'} />  <h3>Premium</h3>  <span className="font-semibold">£89</span></li>
   <li className="flex flex-col justify-center items-center py-2 border-r text-lg  relative    ">  <OriginalPrice title={'30% OFF'} price={'130'} />  <h3>All-Iclusive</h3>  <span className="font-semibold">£100</span></li>
</ul>



<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b    ">
  <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x        "><h3 className="flex justify-start gap-2 items-center "><span><RiShieldCheckFill className="text-orange-500 text-xl "/></span> Limited Company</h3>  <span><RiInformation2Line className='text-gray-500 text-xl hover:cursor-pointer ' /></span></li>
   
   <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
   <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
   <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
</ul>

<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b      ">
  <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "><h3 className="flex justify-start gap-2 items-center "><span><RiShieldCheckFill className="text-orange-500 text-xl  "/></span>Inclusive of companies’ house, all other government fees</h3> <span><RiInformation2Line className='text-gray-500 text-xl hover:cursor-pointer ' /></span> </li>
  
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
</ul>

<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b      ">
  <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "><h3 className="flex justify-start gap-2 items-center "><span><RiShieldCheckFill className="text-orange-500 text-xl  "/></span>Filing of the First Confirmation Statement</h3> <span><RiInformation2Line className='text-gray-500 text-xl hover:cursor-pointer ' /></span></li>

  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
</ul>

<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b      ">
  <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "><h3 className="flex justify-start gap-2 items-center "><span><RiShieldCheckFill className="text-orange-500 text-xl  "/></span>Registered OfficeServiceLondon WC2, for 12 months</h3> <span><RiInformation2Line className='text-gray-500 text-xl hover:cursor-pointer ' /></span></li>

  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
</ul>

<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b      ">
  <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "><h3 className="flex justify-start gap-2 items-center "><span><RiShieldCheckFill className="text-orange-500 text-xl  "/></span>VAT Registration (use at anytime)</h3> <span><RiInformation2Line className='text-gray-500 text-xl hover:cursor-pointer ' /></span></li>

  <li className="flex justify-center items-center py-4 border-r     "><RxCross2 className="text-2xl text-red-400" /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
</ul>

<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b      ">
 <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "><h3 className="flex justify-start gap-2 items-center "><span><RiShieldCheckFill className="text-orange-500 text-xl  "/></span>Full Company Secretary Service FREE for 12 months (worth £99.99)</h3> <span><RiInformation2Line className='text-gray-500 text-xl hover:cursor-pointer ' /></span></li>
 
  <li className="flex justify-center items-center py-4 border-r     "><RxCross2 className="text-2xl text-red-400" /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
</ul>

<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b      ">
  <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "><h3 className="flex justify-start gap-2 items-center "><span><RiShieldCheckFill className="text-orange-500 text-xl  "/></span>Annual Tax Filing Service FREE for 12 months (worth £249.99)</h3> <span><RiInformation2Line className='text-gray-500 text-xl hover:cursor-pointer ' /></span></li>
  
  <li className="flex justify-center items-center py-4 border-r     "><RxCross2 className="text-2xl text-red-400" /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
  <li className="flex justify-center items-center py-4 border-r     "><IoCheckmark className="text-3xl text-cyan-500 " /></li>
</ul>


<ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr] gap-0 border-b      ">
  <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "></li>
  
  <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">  <button className="bg-orange-500 shadow-sm shadow-black/30 text-white px-4 py-2 rounded-lg hover:bg-green-500 hover:scale-105 active:scale-95 transition-all  ">BUY NOW</button> <Link href='/' className="text-sm text-orange-500 underline  ">Read More</Link></li>
  <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">  <button className="bg-orange-500 shadow-sm shadow-black/30 text-white px-4 py-2 rounded-lg hover:bg-green-500 hover:scale-105 active:scale-95 transition-all  ">BUY NOW</button> <Link href='/' className="text-sm text-orange-500 underline  ">Read More</Link></li>
  <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">  <button className="bg-orange-500 shadow-sm shadow-black/30 text-white px-4 py-2 rounded-lg hover:bg-green-500 hover:scale-105 active:scale-95 transition-all  ">BUY NOW</button> <Link href='/' className="text-sm text-orange-500 underline  ">Read More</Link></li>
  
</ul>


</div>


</div>
    </section>
  );
};

export default NonResidents;



