import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const ServiceCTA = () => {
  return (
    <section className="w-full container mx-auto px-40 max-lg:px-0 font-Inter ">
      <div className=" max-lg:px-8 bg-[#002B5B] py-8 space-y-3 text-white  ">
        <h3 className="w-full text-center text-3xl  font-semibold ">
          You Can Also Order Via Phone
        </h3>
        <p className="w-full text-center  text-base max-w-xl mx-auto ">
          Just call us and speak with our friendly company registration expert.
          We will complete your order by phone or guide you step by step.
        </p>

        <div className="w-full text-center flex justify-center items-center    ">
          
        <Link href="tel:02081294481"  className="px-8 py-2  bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 transition-all  rounded-lg shadow-md shadow-black/30 hover:scale-105 hover:shadow-orange-300/30 active:scale-95 flex justify-center items-start gap-2   "> <span className="flex justify-center items-center gap-1 "><FiPhoneCall />Call us at :</span><span>020-8129-4481</span> 
          
          </Link>
        </div>

        <p className="text-sm w-full text-center ">
          <Link href="mailto:support@affotaxformations.com " className="  ">or Email us: info@affotax.com</Link>
        </p>
      </div>
    </section>
  );
};

export default ServiceCTA;
