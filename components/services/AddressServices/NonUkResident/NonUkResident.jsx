import React from "react";
import { MdChevronRight } from "react-icons/md";
import PriceBox from "../../shared/PriceBox";
import { IoHomeOutline } from "react-icons/io5";
import { PiHandshakeDuotone } from "react-icons/pi";
import { BsBuildingCheck } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import ServiceCTA from "../../shared/ServiceCTA";
import Faqs from "../../shared/Faqs";
import Checkmark from '@/public/checkmark2.png'

import { data } from "./data";
import Image from "next/image";

const NonUkResident = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Non-UK Resident Business Address - £99/yr
          </h2>

          <div className="  flex justify-end items-center gap-8">
            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">
              £99.00
            </h2>
            <button className="  rounded-lg bg-secondary px-8 py-3 text-nowrap mb-1 text-sm font-semibold text-white transition-all hover:shadow-lg  active:scale-95 ">
              {" "}
              BUY NOW{" "}
            </button>
          </div>
        </div>














        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">


          <div className="space-y-10">
            
            
            



            <div>
            <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
            UK business address service for non-UK citizens
            </h4>
            <p className="text-gray-700 mb-2  ">
            Do you live overseas but want to receive your business mail at a prestigious London address ? We provide comprehensive UK company formation for non-resident business owners with our business address service for non-UK residents.
            </p>
            <p className="text-gray-700 mb-2  ">
            If you're looking to enhance your brand presence and identity in the UK, you can do so with our virtual office address in London , which you can use to receive business correspondence from clients, customers and more.
            </p>
            <p className="text-gray-700 mb-2  ">
            How does it work? When you opt for our business postal address service, we will receive all your non-statutory business-related letters and parcels. We will open, scan and forward your mail to the email address given during your application. We can also forward your mail to your overseas postal address for an additional charge of 50p plus postage per item.
            </p>
            <p className="text-gray-700 mb-2  ">
            When you get a business address with Mint Formations, you can avoid unsolicited letters, hide your overseas home address and safeguard yourself and your family from potential identity theft. We will automatically eliminate and destroy all junk mail at no additional cost.
            </p>
            </div>
           




            <div>
            <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
            Why a UK business address service?
            </h4>
            <p className="text-gray-700 mb-2  ">
            A registered office address in a prestigious central London location is an effective way to enhance your brand image and appeal to your UK and European customers. It instantly gives you a professional presence in the capital of the UK. Please note that this registered office address cannot be used as the address displayed on the public record with Companies House or HMRC. You can only use our address as your business contact address.
            </p>
            
            </div>






            <ul className="list-disc ">
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
            What are the benefits of a business address service?
            </h4>
                <li className="">Enhance the professional image of your business with a prestigious London address

                </li>
                <li>Establish a business presence in a prominent sought-after area

                </li>
                <li>Provide a professional (non-residential) correspondence address to your vendors, customers, clients and other business contacts

                </li>
                <li>Keep your home address private from all business contacts

                </li>
                <li>Target a new market in the capital
                </li>
                <li>Boast a national presence with a London office</li>
            </ul>




            

            



          </div>




















          <div className="flex flex-col items-start justify-between gap-8 ">
           
            <ul className="text-gray-700 space-y-8  ">
                <PriceBox title="For Non-UK Residents"price={"99.00"} content="We handle the paperwork so you can focus on what you do best – running your business" includesList={['UK limited company formation', 'Registered office address', 'Directors Address, London E61', 'HMRC UTR number', 'Incorporation fee £50 included.', 'Digital Incorporation Certificate', 'Digital Articles of Association', 'Free accounting consultation', 'VAT registration (if needed)' ]} />
                


                

            
            </ul>



            
          </div>




        </div>




      {/* <div className="w-full py-16 ">
        <h3 className="w-full text-center text-3xl    font-poppins mb-12">Who Can Use a Registered Office Address Service?</h3>

        <ul className="w-full flex justify-center  items-center gap-5 divide-x ">

          <li className="flex flex-col justify-center items-center gap-3 px-12  "> <span className="text-[5rem] text-orange-500 "><IoHomeOutline /></span> <h4 className="text-lg font-poppins  ">Home Businesses</h4> </li>
          <li className="flex flex-col justify-center items-center gap-3 px-12  "> <span className="text-[5rem] text-orange-500 "><PiHandshakeDuotone /></span> <h4 className="text-lg font-poppins  ">Sole Traders</h4> </li>
          <li className="flex flex-col justify-center items-center gap-3 px-12  "> <span className="text-[5rem] text-orange-500 "><BsBuildingCheck /></span> <h4 className="text-lg font-poppins  ">Limited Companies</h4> </li>
          <li className="flex flex-col justify-center items-center gap-3 px-12  "> <span className="text-[5rem] text-orange-500 "><BsPeople /></span> <h4 className="text-lg font-poppins  ">Partnerships</h4> </li>



        </ul>

      </div> */}












      </section>






    

    <ServiceCTA />


    <Faqs items={data}/>











    </>
  );
};

export default NonUkResident;
