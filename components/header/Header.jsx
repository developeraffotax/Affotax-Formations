"use client";

import React, { useContext, useRef, useState } from "react";
import Logo from "./Logo";
import { MdOutlineKeyboardBackspace, MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLogoWhatsapp, IoMenu } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import ServicesMenu from "./ServicesMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import ServicesMenuMobile from "./ServicesMenuMobile";
import { RiArrowRightSLine } from "react-icons/ri";
import UserDropdown from "./UserDropdown";
import { UserContext } from "@/app/(user)/layout";




const Header = () => {
  const mobileNavRef = useRef();
  const backdropRef = useRef();

  const hamBurgerHandler = () => {
    mobileNavRef.current.classList.remove("-translate-x-[999px]");
    backdropRef.current.classList.remove("hidden");

    mobileNavRef.current.classList.add("translate-x-0");
  
  };

  const hamBurgerHandlerClose = () => {
    mobileNavRef.current.classList.remove("translate-x-0");

    backdropRef.current.classList.add("hidden");
    mobileNavRef.current.classList.add("-translate-x-[999px]");
  };



  const [isMenuShow, setIsMenuShow] = useState(false);

  const [isMblMenuShow, setIsMblMenuShow] = useState(false);




  //const [classList, setClassList] = useState(['absolute', 'w-full', 'top-28', 'bg-gray-200',  'scale-100', 'transition-all'])



  const servicesMenuClasses = ['absolute', 'w-full', 'top-28', 'bg-white', 'shadow-md',  'scale-100', 'transition-all', ];
  const servicesMenuClasses2 = ['absolute', 'w-full', 'top-28', 'bg-white', 'scale-0', 'transition-all'];


  const servicesMenuClassesMbl = ['fixed',  'bg-white',  'transition-all', 'w-[70%]',  'z-[9999]', '-translate-x-0', 'top-0', 'left-0', 'h-[100vh]', 'overflow-y-auto'];
  const servicesMenuClasses2Mbl = ['fixed',  'bg-white',  'transition-all', 'w-[70%]',  'z-[9999]', '-translate-x-[9999px]', 'top-0', 'left-0', 'h-[100vh]', 'overflow-y-auto'];


  const onClickHandler = () => {





      setIsMenuShow(prev => !prev)


  }



  const {user, setUser} = useContext(UserContext);


console.log()







  return (
    <> <section id="main-header" className=" max-xl:hidden w-full  fixed bg-slate-100 backdrop-blur-sm py-4  top-0 left-0 z-[999] transition-all duration-500 h-28 shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.1)]" >
        <div className="w-full container mx-auto px-40 max-xl:px-8">
          <div className="w-full">
            <div className="w-full flex flex-row justify-between items-center mb-4">
              <div className="cursor-pointer "> <Link href="/"><Logo /></Link> </div>

              <div className="flex justify-center items-center gap-3  ">
                <Link href="mailto:support@affotaxformations.com"> <MdOutlineMarkEmailRead className="text-xl cursor-pointer hover:scale-125 transition-all" /> </Link>
                <Link href="https://wa.me/447723143223" target="_blank"> <IoLogoWhatsapp className="text-xl text-green-500 cursor-pointer hover:scale-125 transition-all" /> </Link>
                <Link href="tel:02081294481"> <span className="flex justify-center items-center gap-1 cursor-pointer hover:scale-110 transition-all"> <MdOutlinePhoneInTalk className="text-xl " /> <p className="font-Inter ">020 8129 4481</p> </span> </Link>
              </div>
            </div>

            <nav className="w-full flex flex-row justify-between items-center font-Inter ">
              <ul className=" flex  items-center gap-4 ">
                <Link href="/" className="cursor-pointer hover:text-orange-500"> Home </Link>
                <Link href="/packages/limited-company" className="cursor-pointer hover:text-orange-500" > Company Formation </Link>
                <li onClick={onClickHandler}  className={`cursor-pointer hover:text-orange-500 ${isMenuShow ? 'text-orange-500' : ''}`} > Business Services <MdKeyboardArrowDown className={`inline text-xl -ml-1 transition-all  ${isMenuShow ? 'rotate-180' : 'rotate-0'}`} /> </li>










                <Link href="/faqs" className="cursor-pointer   hover:text-orange-500" > FAQs </Link>
              </ul>

              <ul className=" flex  items-center gap-3 ">
                <Link href="/" className="cursor-pointer   hover:text-orange-500"> Blog </Link>
                <Link href="/contact-us" className="cursor-pointer hover:text-orange-500 "> Contact Us </Link>
                {!user && <Link href="/client-login" className="cursor-pointer hover:text-green-500" > <span className="flex justify-center items-center gap-1 "> <MdOutlineLock /> <p className="">Login</p> </span> </Link>}
                 {user && <span className="flex justify-center items-center gap-1 "> <UserDropdown  user={user}/> </span> }
              </ul>
            </nav>
          </div>
        </div>
                  <ServicesMenu onClick={() => setIsMenuShow(false)}  className={isMenuShow ? servicesMenuClasses.join(' ') : servicesMenuClasses2.join(' ')}/>
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
            {!user && <Link href={"/client-login"}> {" "} <button className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-all ">  <span className="flex justify-start items-center gap-1 "> <MdOutlineLock /> <p className="">Login</p> </span> </button>{" "} </Link>}
              {user && <div className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-all ">  <span className="flex justify-start items-center gap-1 "> <UserDropdown /> </span> </div> }
          </div>
        </div>

        <div ref={mobileNavRef} className="w-[70%] h-[100vh] py-8 -translate-x-[999px] fixed z-[9998] bg-purple-50 top-0 left-0 transition-all " >
          <nav className="w-full flex flex-col justify-between items-start h-full ">
            <ul className="w-full flex flex-col justify-center items-start gap-2 font-Inter relative  ">
              <button onClick={hamBurgerHandlerClose} className={`hover:text-primary  w-full   pl-10  py-1`} > {" "} <MdOutlineKeyboardBackspace className="text-2xl" /> </button>
              <Link onClick={hamBurgerHandlerClose} href={"/"} className={`hover:text-primary  w-full   pl-10  py-1`} > {" "} Home{" "} </Link>

              <Link onClick={hamBurgerHandlerClose} href={"/company-formation"} className={`hover:text-primary w-full   pl-10 py-1`} > {" "} Company Formation{" "} </Link>
              <li onClick={() => setIsMblMenuShow(true)}  className={`hover:text-primary w-full   pl-10 py-1 cursor-pointer flex justify-start items-center gap-1  `} > {" "} Business Services <RiArrowRightSLine className=" text-xl  "/>{" "} </li>

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

        <div onClick={() => {hamBurgerHandlerClose(); setIsMblMenuShow(false);}} ref={backdropRef} className="fixed w-[100vw]  h-[100vh] bg-black/25 backdrop-blur-sm z-[7777] hidden top-0 left-0" ></div>

        <ServicesMenuMobile onClick={() => {setIsMblMenuShow(false); hamBurgerHandlerClose()} } onCancel={() => setIsMblMenuShow(false)}  className={isMblMenuShow ? servicesMenuClassesMbl.join(' ') : servicesMenuClasses2Mbl.join(' ')}/>

      </section>
    </>
  );
};

export default Header;
