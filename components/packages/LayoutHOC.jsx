import React from "react";
import PackageHeader from "./PackageHeader";
import BankingSection from "./shared/BankingSection";
import EmailPhoneSection from "./shared/EmailPhoneSection";
import WhyUsSection2 from "./shared/WhyUsSection2";
import { FaRegCheckCircle } from "react-icons/fa";

const LayoutHOC = ({children, companyName}) => {
  return( <>
    <section className="w-full  font-Inter  ">
      <div className="w-full container mx-auto  px-40 max-xl:px-8 ">
        <PackageHeader />

        <div className="w-full    max-w-2xl text-center mx-auto ">
          {" "}
          <h3 className="w-full text-center font-Inter text-3xl "> {" "} Select the perfect package for you & register your new company online today.{" "} </h3>

          {
            companyName ? <div className="w-full flex  gap-2 justify-center items-center pt-8   ">
            <span className="text-[40px] text-cyan-500 ">
                <FaRegCheckCircle className=" "/>
            </span>

            <h3 className="bg-gradient-to-r text-cyan-500  font-poppins text-2xl  font-semibold ">Your New Company Name: {companyName} </h3>
          </div> : null
          }


          <h2 className="w-full text-6xl text-center font-bold font-Montserrat drop-shadow-lg bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text mt-12"> Choose a Plan </h2>{" "}
        </div>


        {children}
        
      </div>
    </section>

    <BankingSection />
    <EmailPhoneSection />
    <WhyUsSection2 />
  </>)
           

};

export default LayoutHOC;
