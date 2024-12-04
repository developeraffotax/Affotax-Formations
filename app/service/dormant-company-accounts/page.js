import React from "react";
import { MdChevronRight } from "react-icons/md";

const page = () => {
  return (

    
    <>
    




    <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">


            <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">

            <h2 className="w-full text-4xl  py-2">Dormant Company Accounts</h2>
        
            <div className="  flex justify-end items-center gap-8">

            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">£49.99</h2>
            <button className="  rounded-lg bg-secondary px-8 py-4 text-nowrap mb-1 text-sm font-semibold text-white transition-all hover:shadow-lg  active:scale-95 " > BUY NOW  </button>




            </div>
        </div>

            <div className="w-full grid grid-cols-2 max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed">


                <div>
                    <h4 className="text-2xl mb-2  ">
                    What are dormant company accounts?

                    </h4>
                    <p className="text-gray-700 mb-6">
                    Dormant company accounts are a highly simplified form of accounts that include just a balance sheet detailing the company’s share capital.

Companies that are dormant for Companies House’s purposes are permitted to file this type of accounts. <br/> This can save a great deal of time and money as they do not require the services of an accountant to prepare them.
                    </p>


                    <h4 className="text-2xl mb-2  ">
                    How often must dormant company accounts be filed?

                    </h4>
                    <p className="text-gray-700">
                    Dormant accounts must be filed every year. The fact a company is dormant does not exempt it from fulfilling the requirement to deliver annual accounts to Companies House.

                    </p>
                </div>






                <div>
                <h4 className="text-2xl mb-2  ">
                How does this service work?

                    </h4>


                <ul className="text-gray-700 list-disc  ">


                    <li className="mb-1"> Select ‘Buy Now,' enter the required details, checkout and pay</li>
                    <li className="mb-1">  We will email you an online questionnaire for you to complete.</li>
                    <li className="mb-1">  Your dormant company accounts will be filed within 1 working day of receiving the required information, based on your answers to the questionnaire</li>
                    <li className="mb-1">  We will inform you by email when Companies House accepts the accounts</li>
                    <li className="mb-1">  This service is renewable annually at a cost of £49.99 +VAT</li>







                </ul>



                </div>
















            </div>










    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>























  )
};

export default page;
