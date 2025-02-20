
import PriceBox from "../../shared/PriceBox";

import ServiceCTA from "../../shared/ServiceCTA";
import Faqs from "../../shared/Faqs";

import { data } from "./data";

const VatRegistration = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="    w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 max-lg:pt-4 pb-2">
          <h2 className="w-full text-4xl  py-2">
          VAT Registration
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
            


          <div>
            <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
            Register for VAT online with HMRC
            </h4>
            <p className="text-gray-800 mb-2  "> Do you wish to register your company for VAT, but are feeling daunted by the task? Let one of our experts prepare and submit your application to HMRC for you. </p>
            <p className="text-gray-800 mb-2  "> It doesn’t matter if you must register because your turnover exceeds the £90,000 VAT threshold, or if you want to register voluntarily to give the impression of a solid, well-established business – either way, we can help. </p>
            <p className="text-gray-800 mb-2  "> With this service, we’ll take care of preparing the VAT registration documents and submitting them to HMRC on your behalf. As soon as your application has been approved by HMRC, you will be sent your VAT Registration Number by post. The cost of this service is £39.99 +VAT.</p>
            </div>






            
            <ul className="list-disc ">
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
            How it works:
            </h4>
                <li className="">Select 'Buy Now'.
                </li>
                <li>Provide the necessary information and proceed to checkout.
                </li>
                <li>We will email you a link to our digital VAT questionnaire.
                </li>
                <li>Complete and submit the questionnaire.
                </li>
                <li>Using the information provided, an expert will prepare and submit your VAT application.</li>
                <li>HMRC will email you your application reference code within 5-7 working days.</li>
                <li>Once successfully processed by HMRC, your VAT Registration Number and Certificate of VAT Registration will be sent to you by post to your principal place of business by HMRC.</li>
            </ul>

            




              
            <ul className="list-disc ">
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
            What is included?
            </h4>
                <li className="">Your VAT registration prepared by our team and submitted to HMRC
                </li>
                <li>A VAT expert to assist you with any questions regarding your application
                </li>
                <li>Your VAT Registration Number and Certificate of VAT Registration, sent to you by post by HMRC
                </li>
                <li>Comprehensive guidance on how to open your HMRC Government Gateway account
                </li>
                
            </ul>

            
            
           

            



          </div>




















          <div>
           
            <ul className="text-gray-700 space-y-8  ">
                <PriceBox serviceName={"Vat Registration"} title="Basic Package" price={"29"} content="It covers the essentials, guiding your business through the process to ensure you get the VAT number." includesList={['The registration process.', 'Submit required ID documents to HMRC.', 'We act as your VAT agent in the UK.' ]} />
                <PriceBox serviceName={"Vat Registration"} title="Premium Package + Director Service Address" price={"49"} content="It covers everything in the basic package + we setup gateway login and activate the whole scheme for you." includesList={['The registration process.', 'Submit required ID documents to HMRC.', 'We act as your VAT agent in the UK.', 'Guide you on filing UK MTD VAT return' ]} />
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

export default VatRegistration;
