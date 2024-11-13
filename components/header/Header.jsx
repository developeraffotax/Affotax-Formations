import React from "react";
import Logo from "./Logo";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <section id="main-header" className="w-full bg-cyan-100 py-4">
      <div className="w-full container mx-auto ">
        <div className="w-full">
          <div className="w-full flex flex-row justify-between items-center mb-4">
            <div className="cursor-pointer ">
              <Logo />
            </div>

            <div className="flex justify-center items-center gap-3  ">
              <Link href="mailto:info@affotax.com"><MdOutlineMarkEmailRead className="text-xl cursor-pointer hover:scale-125 transition-all" /></Link>
              <Link href="https://wa.me/447723143223" target="_blank"><IoLogoWhatsapp className="text-xl text-green-500 cursor-pointer hover:scale-125 transition-all" /></Link>
              <Link href="tel:02081294481"><span className="flex justify-center items-center gap-1 cursor-pointer hover:scale-110 transition-all">
                <MdOutlinePhoneInTalk className="text-xl " />
                <p className="font-Inter ">020 8129 4481</p>
              </span></Link>
            </div>
          </div>




          
          






          
          <nav className="w-full flex flex-row justify-between items-center font-Inter ">
            <ul className=" flex  items-center gap-4 ">
                <Link href="/" className="cursor-pointer hover:text-gray-700">Home</Link>
                <Link href="/company-formation"  className="cursor-pointer hover:text-gray-700">Company Formation</Link>
                <Link href="/services"  className="cursor-pointer hover:text-gray-700">Business Services</Link>
                <Link href="/faqs"  className="cursor-pointer hover:text-gray-700">FAQs</Link>
            </ul>


            <ul className=" flex  items-center gap-3 ">
                <Link href="/"  className="cursor-pointer hover:text-gray-700">Blog</Link>
                <Link href="/"  className="cursor-pointer hover:text-gray-700">Contact Us</Link>
                <Link href="/login"  className="cursor-pointer hover:text-gray-700">
                    <span className="flex justify-center items-center gap-1 ">
                        <MdOutlineLock />
                        <p className="">Login</p>
                    </span>
                </Link>
            </ul>
          </nav>
          




        </div>
      </div>
    </section>
  );
};

export default Header;
