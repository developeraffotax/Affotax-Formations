import React from "react";
import { MdChevronRight } from "react-icons/md";
import PriceBox from "../../shared/PriceBox";
import { IoHomeOutline } from "react-icons/io5";
import { PiHandshakeDuotone } from "react-icons/pi";
import { BsBuildingCheck } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import ServiceCTA from "../../shared/ServiceCTA";
import Faqs from "../../shared/Faqs";

import { data } from "./data";

const RegisteredOfficeAddress = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-0">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Registered Office Address
          </h2>

          {/* <div className="  flex justify-end items-center gap-8">
            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">
              £59.99
            </h2>
            <button className="  rounded-lg bg-secondary px-8 py-3 text-nowrap mb-1 text-sm font-semibold text-white transition-all hover:shadow-lg  active:scale-95 ">
              {" "}
              BUY NOW{" "}
            </button>
          </div> */}
        </div>














        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">


          <div className="space-y-10">
            
            
            <ul className="list-disc ">
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
            Registered Office Address London - Boost Your Privacy, Legitimacy and Brand Image Today
            </h4>
                <li className="">Avoid using your home address for your company.
                </li>
                <li>Give your business the impression of a successful London brand.
                </li>
                <li>Acquire a professional London business address without paying high property prices.
                </li>
                <li>Perfect for both domestic and international business owners.
                </li>
                <li>Set up and access your new London business address in minutes!</li>
            </ul>

            

            <div>
            <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
            How Our Registered Office Address London Service Works
            </h4>
            <p className="text-gray-700 mb-2  ">
              Getting your registered office address in London with Mint Formations couldn't be easier. Just follow our simple three-step system.
              
              
            </p>
            </div>
           

            <div>
            <h4 className="text-lg mb-2 font-semibold text-[#002B5B] ">
            What Is a Registered Office Address?
            </h4>
            <p className="text-gray-700 mb-2"> A registered office address is assigned to your company but is owned by Mint Formations. Your annual fee gives you the legal right to use this address for your company. </p>
            <p className="text-gray-700 mb-2"> This central London address is not a physical location you can visit and use as office space. It’s a postal address you can use to manage your company registration and official correspondence from HMRC and Companies House. </p>
            <p className="text-gray-700 mb-2"> The key details: you pay to use a London-based business address for your company’s official registered office address.</p>
            </div>



          </div>




















          <div>
           
            <ul className="text-gray-700 space-y-8  ">
                <PriceBox serviceName={"Registered Office Address"} title="Registered Office Address" price={"35"} content="Use our UK London office as your Registered Office Address. Includes FREE forwarding of all statutory government letters addressed to your company." includesList={['Using a London address as your official registered address UK.', 'All official government mail scanned and emailed to you, free of charge. ' ]} />
                <PriceBox serviceName={"Registered Office Address"} title="Registered Office + Director Service Address" price={"49"} content="It offers everything in the basic package + director address within the UK for your company's official communications." includesList={['Using a London address as your company registered address.', 'All official government mail scanned and emailed to you, free of charge.', "Using a London address as your director Service address." ]} />
            </ul>
          </div>




        </div>




      <div className="w-full py-16 ">
        <h3 className="w-full text-center text-3xl    font-poppins mb-12">Who Can Use a Registered Office Address Service?</h3>

        <ul className="w-full flex justify-center  items-center gap-5 divide-x ">

          <li className="flex flex-col justify-center items-center gap-3 px-12  "> <span className="text-[5rem] text-orange-500 "><IoHomeOutline /></span> <h4 className="text-lg font-poppins  ">Home Businesses</h4> </li>
          <li className="flex flex-col justify-center items-center gap-3 px-12  "> <span className="text-[5rem] text-orange-500 "><PiHandshakeDuotone /></span> <h4 className="text-lg font-poppins  ">Sole Traders</h4> </li>
          <li className="flex flex-col justify-center items-center gap-3 px-12  "> <span className="text-[5rem] text-orange-500 "><BsBuildingCheck /></span> <h4 className="text-lg font-poppins  ">Limited Companies</h4> </li>
          <li className="flex flex-col justify-center items-center gap-3 px-12  "> <span className="text-[5rem] text-orange-500 "><BsPeople /></span> <h4 className="text-lg font-poppins  ">Partnerships</h4> </li>



        </ul>

      </div>












      </section>






    

    <ServiceCTA />


    <Faqs items={data}/>











    </>
  );
};

export default RegisteredOfficeAddress;
