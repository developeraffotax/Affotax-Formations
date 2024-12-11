
import PriceBox from "../../shared/PriceBox";

import ServiceCTA from "../../shared/ServiceCTA";
import Faqs from "../../shared/Faqs";

import { data } from "./data";

const PayeRegistration = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          PAYE Registration - £29
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
            PAYE registration service
            </h4>
            <p className="text-gray-800 mb-2  "> When you’ve register a company name , you may want to register for Pay as You Earn (PAYE). Whether or not you've had a recent change of company director, when you sign up for PAYE, the director may take a salary, of which £8,632 is completely tax and national insurance-free (provided the director receives no additional income from other sources). For all the necessary information on how to set up PAYE, we can help! </p>
            
            </div>




            <div>
            <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
            Do I have to set up a proper payroll to get my full tax-free salary?
            </h4>
            <p className="text-gray-800 mb-2  "> Yes. HMRC operates a real-time information system where you and your employees' salaries must be disclosed. </p>
           
            </div>

            <div>
            <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
            Do I need to submit a monthly payroll?
            </h4>
            <p className="text-gray-800 mb-2  "> No. The annual scheme allows a company to submit an annual payroll and for a director to take their salary in one month. This is particularly useful for small companies where the directors are the only employees and are taking small salaries. By submitting payroll annually, a director can save valuable time and cut down on administrative tasks.</p>
           
            </div>

           
            
            <div>
            <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
            How do I set up payroll?
            </h4>
            <p className="text-gray-800 mb-2  "> To set up a payroll, you have two options. You can apply to HMRC directly or we can set it up on your behalf. </p>
            <p className="text-gray-800 mb-2  "> As soon as payroll registration is complete, HMRC will expect regular submissions (either monthly or annually).</p>
            <p className="text-gray-800 mb-2  "> Please note that if you want to run an annual payroll, you must notify HMRC or you run the risk of fines for non-submission. When setting up your payroll, we can inform HMRC of how you’d like to disclose your and your employees’ salaries.</p>
            </div>



              
           
            
            
           

            



          </div>




















          <div>
           
            <ul className="text-gray-700 space-y-8  ">
                <PriceBox title="For UK Residents" price={"29.00"} content="We offer seamless PAYE registration services with HMRC, ensuring your business is set up to handle employee payroll and tax obligations smoothly. Our expert team manages the process for a hassle-free experience." includesList={['PAYE registration', 'Preparation and submission to HMRC', 'Get Paye Registration Letter showing Payroll Number.' ]} />
                <PriceBox title="For Non-UK Residents" price={"49.00"} content="We offer seamless PAYE registration services with HMRC, ensuring your business is set up to handle employee payroll and tax obligations smoothly. Our expert team manages the process for a hassle-free experience." includesList={['PAYE registration', 'Preparation and submission to HMRC', 'Get Paye Registration Letter showing Payroll Number.' ]} />
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

export default PayeRegistration;
