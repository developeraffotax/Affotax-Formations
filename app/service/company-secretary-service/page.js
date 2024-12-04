import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";

const page = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Full Company Secretary Service

          </h2>

          <div className="  flex justify-end items-center gap-8">
            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">
              £149.99
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
            This service is invaluable in providing peace of mind that the company secretarial aspects of your business are being taken care of, ensuring your company records are kept up to date and you remain compliant - all year long.


            </p>

            <p className="text-gray-700 mb-6">
                          
            Our Full Company Secretary Service allows you to make 15 changes to your company every year (such as an appointment of a director) for no additional charge. It also includes filing of your annual confirmation statement, exclusive monthly solicitor-written guidance notes on key aspects directors need to be aware of, and a dedicated account manager to answer your questions and process your instructions.
            </p>



             <h4 className="text-2xl mb-2  ">
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
                    </ul>

           
          </div>


          


















          <div>
            <h4 className="text-2xl mb-2  ">What happens next...</h4>

            <ul className="text-gray-700  mb-6">
              
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl  "/></span><span>Once you have purchased this service, you will receive a welcome email detailing how your service works as well as an introduction from your appointed account manager.


                </span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                {" "}<span><MdChevronRight className="mt-1 text-2xl "/></span>

                <span>We will prepare and store your company registers for your convenience. If you require a copy of these, we will forward them to you by email.


                </span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>Your dedicated account manager will always be on hand to answer any questions, carry out changes, maintain your registers and deliver copies on request, and file your annual confirmation statement.
                .</span>
              </li>

              
            </ul>










            <h4 className="text-2xl mb-2  ">
            How much does it cost?

            </h4>
            <p className="text-gray-700 mb-2">
            Our Full Company Secretary Service is charged at £149.99 +VAT and is renewable on an annual basis at the same price. Notice will always be given in advance of your renewal date and you will have the right to cancel the service.


            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
