


import Checkmark from '@/public/checkmark2.png'

import { data } from "../RegisteredOfficeAddress/data";
import Image from "next/image";
import PriceBox from "../../shared/PriceBox";
import ServiceCTA from '../../shared/ServiceCTA';
import Faqs from '../../shared/Faqs';

const DirectorServiceAddress = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Director's Service Address - £24/yr
          </h2>

          <div className="  flex justify-end items-center gap-8">
            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">
              £24.00
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
            Directors service address
            </h4>
            <p className="text-gray-700 mb-2  ">
            Are you a UK limited company director, secretary or shareholder who has just completed the process of registering a company name ? Do you want to protect the privacy of your home address? For just £24 per year, you can use our director's service address and keep your residential address off the public register.
              
              
            </p>
            <p className="text-gray-700 mb-2  ">
            Our director's service address is available to all UK limited company directors, secretaries, LLP members, shareholders, secretaries and Persons with Significant Control (PSCs). We will receive all your personal statutory mail from HMRC and Companies House and scan and email your letters to you for free.
              
            </p>
            </div>
           



            <ul className="list-disc ">
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
            Advantages of a director's service address:
            </h4>
                <li className="">Hide your residential address from the internet, marketing agencies and the public
                </li>
                <li>Protect your home address from being displayed on the public register
                </li>
                <li>Protect yourself from being a victim of identity fraud
                </li>
                <li>Prevent unsolicited letters from marketing agencies
                </li>
                <li>Prevent customers or visitors arriving at your home address</li>
                <li>Receive a prestigious London company address that will enhance your professional image</li>
            </ul>




            <div className="w-full  "> 
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] "> What’s Included?  </h4>
            <ul className="list-none space-y-3   ">
           
           
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold " >Director's service address</h5>Setting up a director's service address gives you more privacy and authority. We’ll handle the process for you, ensuring your privacy is protected
                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Statutory mail handling</h5>We’ll receive all your personal statutory mail from HMRC and Companies House, scan, and email your letters to yo
                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Address change notification</h5>We’ll immediately notify Companies House of your address change, ensuring all records are up-to-date.
                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Protection of home address</h5> We help protect your home address from being displayed on the public register, preventing unsolicited letters and enhancing your privacy.
                </li>
                
            </ul>
            </div>
           

            



          </div>




















          <div className="flex flex-col items-start justify-between gap-8 ">
           
            <ul className="text-gray-700 space-y-8  ">
                <PriceBox title="Director's Service Address" price={'24.00'} content="You can now protect the privacy of your residential address and prevent it from appearing online through the use of our “directors Service address” service." includesList={['Exclusive London director Service Address.', 'All mail scanned free of charge.', 'Guidence on all mail notices what action is required.' ]} />
                


                <div className="w-full bg-[#002B5B] text-white p-8 space-y-4  ">


              <h4 className="text-xl font-poppins ">Who can use our director's service address?</h4>

              <ul className=" list-disc space-y-2 text-sm   ">
           
           
                <li className="flex justify-start items-start gap-2 "><Image src={Checkmark} width={20} height={20} alt="checkmark"/>UK company directors </li>
                <li className="flex justify-start items-start gap-2 "><Image src={Checkmark} width={20} height={20} alt="checkmark"/>Company secretaries </li>
                <li className="flex justify-start items-start gap-2 "><Image src={Checkmark} width={20} height={20} alt="checkmark"/>LLP members </li>
                <li className="flex justify-start items-start gap-2 "><Image src={Checkmark} width={20} height={20} alt="checkmark"/>Shareholders </li>
                <li className="flex justify-start items-start gap-2 "><Image src={Checkmark} width={20} height={20} alt="checkmark"/>Subscribers (shareholders or guarantors at the time of the company's incorporation) </li>
                <li className="flex justify-start items-start gap-2 "><Image src={Checkmark} width={20} height={20} alt="checkmark"/>Persons with Significant Control (PSCs — shareholders who own more than 25% of all shares) </li>
               
                
                
               </ul>

            </div>

            
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

export default DirectorServiceAddress;
