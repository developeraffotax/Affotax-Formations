import React from "react";
import { MdChevronRight } from "react-icons/md";

const page = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Director Appointment & Resignation Service

          </h2>

          <div className="  flex justify-end items-center gap-8">
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
            Appoint or remove a company director

            </h4>
            <p className="text-gray-700 mb-2">
            Putting together the correct company documents when appointing or resigning a director is often overlooked and leaves companies at risk of being non-compliant.

            </p>

            <p className="text-gray-700 mb-6">
                          
            With this service, we’ll file the necessary Companies House forms and take care of all of the other paperwork required to ensure your company records are in order.

            The cost of this service is £29.99 +VAT per appointment or resignation.
            </p>

           
          </div>

          <div>
            <h4 className="text-2xl mb-2  ">How does the service work?</h4>

            <ul className="text-gray-700  ">
              
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl  "/></span><span>Select 'Buy Now', complete the order form, checkout, and pay.
                </span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                {" "}<span><MdChevronRight className="mt-1 text-2xl "/></span>

                <span>Our Team will prepare and electronically file the appointment/resignation documents with Companies House.
                </span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>We will email you as soon as the update has been made at Companies House (this will normally take 2-3 working days). You will also receive your VAT invoice and copies of the digital documents.</span>
              </li>
              
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
