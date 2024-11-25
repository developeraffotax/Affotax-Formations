"use client";

import React, { useRef } from "react";
import Logo from "./Logo";
import { MdOutlineKeyboardBackspace, MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLogoWhatsapp, IoMenu } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";



const Header = () => {
  const mobileNavRef = useRef();
  const backdropRef = useRef();

  const hamBurgerHandler = () => {
    mobileNavRef.current.classList.remove("-translate-x-[999px]");
    backdropRef.current.classList.remove("hidden");

    mobileNavRef.current.classList.add("translate-x-0");
    console.log(mobileNavRef.current.classList);
  };

  const hamBurgerHandlerClose = () => {
    mobileNavRef.current.classList.remove("translate-x-0");

    backdropRef.current.classList.add("hidden");
    mobileNavRef.current.classList.add("-translate-x-[999px]");
  };



  return (
    <> <section id="main-header" className=" max-xl:hidden w-full fixed bg-slate-100 backdrop-blur-sm py-4  top-0 left-0 z-[9999] transition-all duration-500 h-28 shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.1)]" >
        <div className="w-full container mx-auto ">
          <div className="w-full">
            <div className="w-full flex flex-row justify-between items-center mb-4">
              <div className="cursor-pointer "> <Logo /> </div>

              <div className="flex justify-center items-center gap-3  ">
                <Link href="mailto:support@affotaxformations.com"> <MdOutlineMarkEmailRead className="text-xl cursor-pointer hover:scale-125 transition-all" /> </Link>
                <Link href="https://wa.me/447723143223" target="_blank"> <IoLogoWhatsapp className="text-xl text-green-500 cursor-pointer hover:scale-125 transition-all" /> </Link>
                <Link href="tel:02081294481"> <span className="flex justify-center items-center gap-1 cursor-pointer hover:scale-110 transition-all"> <MdOutlinePhoneInTalk className="text-xl " /> <p className="font-Inter ">020 8129 4481</p> </span> </Link>
              </div>
            </div>

            <nav className="w-full flex flex-row justify-between items-center font-Inter ">
              <ul className=" flex  items-center gap-4 ">
                <Link href="/" className="cursor-pointer hover:text-gray-700"> Home </Link>
                <Link href="/company-formation" className="cursor-pointer hover:text-gray-700" > Company Formation </Link>
                <Link href="/services" className="cursor-pointer hover:text-gray-700" > Business Services </Link>
                <Link href="/faqs" className="cursor-pointer hover:text-gray-700" > FAQs </Link>
              </ul>

              <ul className=" flex  items-center gap-3 ">
                <Link href="/" className="cursor-pointer hover:text-gray-700"> Blog </Link>
                <Link href="/contact-us" className="cursor-pointer hover:text-gray-700"> Contact Us </Link>
                <Link href="/login" className="cursor-pointer hover:text-gray-700" > <span className="flex justify-center items-center gap-1 "> <MdOutlineLock /> <p className="">Login</p> </span> </Link>
              </ul>
            </nav>
          </div>
        </div>
      </section>













      {/* -----------------------------------------MOBILE NAVIGATION---------------------------------------------- */}
      <section id="main-header-mobile" className=" w-full bg-slate-100 backdrop-blur-md  transition-all duration-500  fixed top-0 left-0 z-[6666] xl:hidden shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="w-full h-20 flex justify-between items-center    px-8 max-xl:text-sm text-nowrap   text-base  mx-auto container font-Mulish  font-semibold ">
          <div>
            <IoMenu className="text-3xl cursor-pointer mr-4" onClick={hamBurgerHandler} /> </div>

          <div className="">
            <Link href={"/"}> {" "} <Logo /> </Link>
          </div>

          <div>
            <Link href={"/contact-us"}> {" "} <button className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-all ">  <span className="flex justify-start items-center gap-1 "> <MdOutlineLock /> <p className="">Login</p> </span> </button>{" "} </Link>
          </div>
        </div>

        <div ref={mobileNavRef} className="w-[60%] h-[100vh] py-8 -translate-x-[999px] fixed z-[9999] bg-purple-50 top-0 left-0 transition-all " >
          <nav className="w-full flex flex-col justify-between items-start h-full ">
            <ul className="w-full flex flex-col justify-center items-start gap-2 font-Inter relative  ">
              <button onClick={hamBurgerHandlerClose} className={`hover:text-primary  w-full   pl-10  py-1`} > {" "} <MdOutlineKeyboardBackspace className="text-2xl" /> </button>
              <Link onClick={hamBurgerHandlerClose} href={"/"} className={`hover:text-primary  w-full   pl-10  py-1`} > {" "} Home{" "} </Link>

              <Link onClick={hamBurgerHandlerClose} href={"/company-formation"} className={`hover:text-primary w-full   pl-10 py-1`} > {" "} Company Formation{" "} </Link>
              <Link onClick={hamBurgerHandlerClose} href={"/services"} className={`hover:text-primary w-full   pl-10 py-1`} > {" "} Business Services{" "} </Link>

              <Link onClick={hamBurgerHandlerClose} href={"/blogs"} className={`hover:text-primary w-full  pl-10  py-1`} > {" "} Blogs{" "} </Link>
              <Link onClick={hamBurgerHandlerClose} href={"/faqs"} className={`hover:text-primary w-full  pl-10  py-1`} > {" "} FAQs{" "} </Link>


            </ul>












            <ul className="flex flex-col justify-center items-start gap-2 pl-10">
           
            

            
            </ul>














            <ul className="flex flex-col justify-center items-start gap-2 pl-10">
              <Link href={"/contact-us"}> {" "} <button className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-all "> {" "} Contact Us{" "} </button>{" "} </Link>
              <li className=" hover:text-primary text-sm  ">
                <a href="tel:+0208 144 6811"> <FaPhone className="inline-block mr-2   " /> <span>0208 144 6811</span>{" "} </a>
              </li>
              <li className=" hover:text-primary text-sm">
                <a href="mailto:support@affotaxformations.com" target="_blank" > <IoMdMail className="inline-block mr-2   " /> <span>support@affotaxformations.com</span> </a>
              </li>
            </ul>
          </nav>
        </div>

        <div onClick={hamBurgerHandlerClose} ref={backdropRef} className="fixed w-[100vw] h-[100vh] bg-black/25 backdrop-blur-sm z-[7777] hidden top-0 left-0" ></div>
      </section>
    </>
  );
};

export default Header;
