import Image from "next/image";
import React from "react";
// import FaqImage from '@/public/faq.jpg'

const Header = () => {
  return (
    <div className="w-full bg-[url('/faq.jpg')] bg-cover bg-top  h-64 bg-blend-multiply  flex items-center  ">
        <h1 className="text-5xl text-white w-full text-center font-poppins font-semibold ">Contact Us</h1>
        {/* <Image src={FaqImage}  alt="faq-header-image" className="object-center object-cover   " /> */}
    </div>
  )
};

export default Header;
