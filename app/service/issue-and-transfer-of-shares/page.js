import React from "react";
import { MdChevronRight } from "react-icons/md";

const page = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Issue & Transfer of Shares Service

          </h2>

          <div className="  flex justify-end items-center gap-8">
            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">
              £69.99
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
            Transfer of Shares

            </h4>
            <p className="text-gray-700 mb-2">
            Do you need to transfer shares from one shareholder to another but don’t know where to begin? Let us take care of it for you, taking the burden away from you and ensuring everything is done correctly.

            With this service, our team of experts will prepare all of the necessary internal company documentation required to move existing shares between new or current shareholders.


            </p>

            <p className="text-gray-700 mb-6">
                          
            For an additional cost of £55.99 plus VAT, we’ll also prepare and file a confirmation statement, updating your latest share situation on the Companies House register. This may be required if you are opening a business bank account and the bank wish to see updated records.

            </p>



            <h4 className="text-2xl mb-2  ">
            Issue of Shares

            </h4>
            <p className="text-gray-700 mb-2">
            The issue of shares is essentially the process by which companies create new shares to pass onto shareholders, who may themselves be new or existing shareholders. Companies can issue shares to both individuals and corporate bodies.


            </p>

            <p className="text-gray-700 mb-6">
                          
            Details of share issues will not be updated on the Companies House register until after the filing of the next confirmation statement. Clients wishing to record share issues now, should file a confirmation statement. If share issues are required to open a business bank account, we always recommend filing a confirmation statement.

            </p>

           
          </div>


          


















          <div>
            <h4 className="text-2xl mb-2  ">How does the service work?</h4>

            <ul className="text-gray-700  ">
              
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl  "/></span><span>Select 'Buy Now'

                </span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                {" "}<span><MdChevronRight className="mt-1 text-2xl "/></span>

                <span>Complete the simple application form

                </span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>Proceed to checkout and make payment
                .</span>
              </li>

              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>We will email your digital documents within 2-3 working days
                .</span>
              </li>

              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>The transferor and transferee will need to sign the stock transfer form. This should then be filed with your company records

                .</span>
              </li>

              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>If purchased, we will prepare and file a confirmation statement
                .</span>
              </li>
              
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
