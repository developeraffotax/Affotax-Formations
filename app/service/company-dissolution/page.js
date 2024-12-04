import React from "react";
import { FaCheck } from "react-icons/fa6";

const page = () => {
  return (

    
    <>
    




    <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">


            <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">

            <h2 className="w-full text-4xl  py-2">Company Dissolution Service</h2>
        
            <div className="  flex justify-end items-center gap-8">

            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">£89.99</h2>
            <button className="  rounded-lg bg-secondary px-8 py-4 text-nowrap mb-1 text-sm font-semibold text-white transition-all hover:shadow-lg  active:scale-95 " > BUY NOW  </button>




            </div>
        </div>

            <div className="w-full grid grid-cols-2 max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed">


                <div>
                    <h4 className="text-2xl mb-2  ">
                    What is company dissolution?

                    </h4>
                    <p className="text-gray-700 mb-6">
                    Company dissolution is a quick and easy way of closing a company down. It involves the director(s) making a voluntary application to Companies House to strike off the company from the public register. Once the strike off application has been accepted, the company is usually dissolved within 2-3 months.
                    </p>


                    <h4 className="text-2xl mb-2  ">
                    Why should I close my company?

                    </h4>
                    
                    <ul>
                    There are several reasons to voluntarily strike off your company:
                        <li><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" />The company is no longer required, or it has served its purpose</li>
                        <li><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" /> To save on administration costs of running a company, e.g. preparing annual accounts</li>
                        <li><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" />Avoiding fines or prosecution due to late filings</li>
                        <li><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" />To reduce the liability of directors</li>
                    </ul>

                    
                </div>






                <div>
                <h4 className="text-2xl mb-2  ">
                How does this service work?

                    </h4>


                <ul className="text-gray-700 list-disc ">


                    <li className="mb-1">Select ‘Buy Now,' enter the required details, checkout and pay</li>
                    <li className="mb-1">You will receive your board resolution by email within 3 to 5 working hours - simply sign and store it for safekeeping.</li>
                    <li className="mb-1"> The director(s) will receive an invitation by email from Companies House to electronically sign the dissolution application (known as the ‘DS01’) - simply sign and submit.</li>
                    <li className="mb-1">We will file the dissolution application at Companies House</li>
                    <li className="mb-1">Once the application to dissolve has been accepted, we will inform you by email</li>
                    <li className="mb-1"> Within 2-3 months, Companies House will inform you by letter to your registered office when the company is dissolved</li>






                </ul>



                </div>
















            </div>










    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>























  )
};

export default page;
