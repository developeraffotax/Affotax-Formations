import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";

const page = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Director Service Address


          </h2>

          <div className="  flex justify-end items-center gap-8" >
            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">
              £29.99
            </h2>
            <button className="  rounded-lg bg-secondary px-8 py-4 text-nowrap mb-1 text-sm font-semibold text-white transition-all hover:shadow-lg  active:scale-95 ">
              {" "}
              BUY NOW{" "}
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed">
          <div>
            <h4 className="text-2xl mb-2  ">
            Ensuring your company remains compliant

            </h4>
            <p className="text-gray-700 mb-2">
            As a UK company director, you are required to provide an address for official correspondence from Companies House and HMRC.




            </p>

            <p className="text-gray-700 mb-6">
                          
            While using your home address might seem convenient, it can lead to unwanted exposure of your personal information. That’s where our Director Service Address comes in.
            </p>










            <h4 className="text-2xl mb-2  ">
            Why Use Our UK Director Service Address?

            </h4>
            <p className="text-gray-700 mb-2">
            Our directors service address helps you maintain a clear boundary between your professional and personal lives. By using our address, you can avoid having your home address publicly listed, which means fewer disruptions from unsolicited mail or unexpected visits.
            </p>




             {/* <h4 className="text-2xl mb-2  ">
             What's included?

                    </h4>
                    
                    <ul>
                    There are several reasons to voluntarily strike off your company:
                        <li className="mb-2 flex justify-start items-start gap-1 w-full  " ><span><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" /></span><span><b>Fifteen changes to your company per year:</b> Including director appointments, share transfers, and share allotments free of charge (additional transactions thereafter are charged at our standard rates).</span></li>
                        <li className="mb-2 flex justify-start items-start gap-1 w-full  " ><span><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" /></span> <span><b>Filing of your annual confirmation statement:</b> Including the Companies House filing fee of £34.00.</span></li>
                        <li className="mb-2 flex justify-start items-start gap-1 w-full  " ><span><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" /></span><span><b>Preparation and maintenance of your company registers:</b> Including the statutory register of members (as required by the Companies Act 2006).</span></li>
                        <li className="mb-2 flex justify-start items-start gap-1 w-full  " ><span><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" /></span><span><b>Exclusive solicitor-written guidance notes: </b>Covering key topics and processes you need to be aware of when running a company (such as the directors' duties and entering into contracts).</span></li>
                        <li className="mb-2 flex justify-start items-start gap-1 w-full  " ><span><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" /></span><span><b>Company Secretarial Trust Badge:</b> Enhance your business's online presence by displaying our exclusive trust badge on your website, demonstrating that your business takes compliance seriously.</span></li>
                        <li className="mb-2 flex justify-start items-start gap-1 w-full  " ><span><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" /></span><span><b>Dormant company service: </b>If your company is dormant, we will submit your dormant company accounts to Companies House and provide you with a template letter to notify HMRC it is dormant for Corporation Tax purposes.</span></li>
                        <li className="mb-2 flex justify-start items-start gap-1 w-full  " ><span><FaCheck className="text-green-500 inline-flex mr-2  mb-1 text-lg" /></span><span><b>A dedicated account manager: </b>You will be assigned an experienced company secretarial professional, who will be on hand to answer your questions and process your instructions.</span></li>
                    </ul> */}

           
          </div>


          


















          <div>
            <h4 className="text-2xl mb-2  ">How It Works</h4>

            <ul className="text-gray-700  mb-6">
              
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl  "/></span><span>Sign Up: Register on our website and verify your documents easily.

                </span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                {" "}<span><MdChevronRight className="mt-1 text-2xl "/></span>

                <span>Update Your Address: Change your registered address with Companies House to reflect your new UK company director service address.

                </span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>Receive Mail: We’ll manage all your official correspondence, forwarding or scanning it for your convenience.
                </span>
              </li>

              
            </ul>










            {/* <h4 className="text-2xl mb-2  ">
            How much does it cost?

            </h4>
            <p className="text-gray-700 mb-2">
            Our Full Company Secretary Service is charged at £149.99 +VAT and is renewable on an annual basis at the same price. Notice will always be given in advance of your renewal date and you will have the right to cancel the service.


            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
