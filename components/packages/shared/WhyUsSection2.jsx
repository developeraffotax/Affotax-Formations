"use client"

import React from "react";


import { IoPeople } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import { IoMdPricetags } from "react-icons/io";
import { MdWifiCalling2 } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbReceiptTax } from "react-icons/tb";








const LIST = [
    {title: 'Experienced Staff',  bgUrl: "bg-[url('/staff.jpg')]", icon: <IoPeople /> , content: 'Platform to convert Domains into Content websites.' },
    {title: 'Banking Introduction',  bgUrl: "bg-[url('/banking.jpg')]", icon: <AiFillBank /> , content: 'Platform to convert Domains into Content websites.'},
    {title: 'Price', bgUrl: "bg-[url('/pricing.jpg')]", icon: <IoMdPricetags /> , content: 'Platform to convert Domains into Content websites.'},
    {title: 'Accountant Free Consultation',  bgUrl: "bg-[url('/consultation.jpg')]", icon: <MdWifiCalling2 /> , content: 'Platform to convert Domains into Content websites.'},
    {title: 'Home Address Privacy',  bgUrl: "bg-[url('/address.jpg')]", icon: <FaHome /> , content: 'Platform to convert Domains into Content websites.'},
    {title: 'Tax Filing Support', bgUrl: "bg-[url('/tax.jpg')]", icon: <TbReceiptTax /> , content: 'Platform to convert Domains into Content websites.'},
]



const WhyUsSection2 = () => {
  return (
    <section className="w-full bg-cyan-800 relative py-8 ">


<div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
  </div>


        <div className="w-full container mx-auto  px-40 max-xl:px-8 pt-12 pb-24">




                
<div className=" p-4 ">
  



  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2   text-gray-100 mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-secondary">
        <path fillRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clipRule="evenodd"></path>
      </svg>
      <h2 className="  text-2xl font-bold text-white md:text-4xl w-full text-center font-poppins drop-shadow-md  ">Why Register your company with <span className="bg-gradient-to-br from-orange-700 via-orange-500 to-yellow-600 bg-clip-text text-transparent ">Affotax Formation?</span></h2>
      
    </div>





    <ul
      className="w-full mt-16 grid     divide-gray-500 overflow-hidden shadow-lg shadow-black/30  rounded-3xl border text-gray-600 border-gray-400 sm:grid-cols-2 lg:grid-cols-3    xl:grid-cols-3">
      

      {
        LIST.map((el) => {
            return (
                <li key={el.title} className=" group relative border-r border-b  border-gray-400  hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10 overflow-hidden cursor-pointer ">


<div className={`w-full h-full absolute  bg-gray-800/40  group-hover:bg-black/50  transition-all duration-500 z-[30]`}></div>
                                    <div className={`w-full h-full absolute opacity-0 group-hover:opacity-90 hidden  bg-center bg-cover  ${el.bgUrl} z-[10] scale-125 group-hover:scale-100  transition-all duration-1000`}></div>
                                    <div className="w-full h-full  absolute backdrop-blur-[0.2px] z-[20] "></div>



        <div className="relative space-y-8 py-12 p-8 z-[50] font-Inter">
          {/* <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200"className="w-12 h-12 rounded-full"  /> */}
         


          <div className="space-y-2  ">
            <h5 className="text-xl  text-white  transition-all duration-500  flex justify-start items-center gap-2 "> <span className="text-2xl">{el.icon}</span> {el.title} </h5>
            <p className="text-gray-300 group-hover:text-white  transition-all duration-500 ">{el.content}</p>
          </div>
        </div>
      </li>
            )
        })
      }


      
      

      </ul>
    </div>
  </div>











        </div>


    </section>
  )
};

export default WhyUsSection2;






















