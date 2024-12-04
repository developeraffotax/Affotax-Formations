import React from "react";
import { MdChevronRight } from "react-icons/md";

const page = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
            Confirmation Statement Service
          </h2>

          <div className="  flex justify-end items-center gap-8">
            <h2 className="text-3xl max-xl:text-2xl text-black w-full text-start font-poppins font-semibold ">
              £59.99
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
              What is a confirmation statement?
            </h4>
            <p className="text-gray-700 mb-2">
              A confirmation statement is a filing that every company must
              submit to Companies House at least once every 12 months. It allows
              companies to report changes and confirm a number of different
              aspects about the company, including the SIC codes, share capital,
              shareholders, and the trading status of the company’s shares.
            </p>

            <p className="text-gray-700 mb-6">
              Additionally, it also confirms that all other information the
              company has reported at Companies House (for example, director and
              People with Significant Control details) is up to date and
              correct.
            </p>

            <h4 className="text-2xl mb-2  ">
              How often do I need to file a confirmation statement?
            </h4>
            <p className="text-gray-700 mb-2">
              Every company needs to file a confirmation statement at least once
              a year. A company can file as many confirmation statements as it
              wants during this period, but to fulfil its obligations a minimum
              of one needs to be delivered to Companies House every 12 months.
              
              
            </p>
            <p className="text-gray-700 ">
            Failure to do so may lead to the company being struck off and the
            director(s) liable to prosecution.
            </p>
          </div>

          <div>
            <h4 className="text-2xl mb-2  ">How does the service work?</h4>

            <ul className="text-gray-700  ">
              <li className="mb-1">Select the Standard or Express Service</li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl  "/></span><span>Enter the required details in the online form, checkout and pay</span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                {" "}<span><MdChevronRight className="mt-1 text-2xl "/></span>

                <span>We will email you an online questionnaire for you to complete</span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>Your confirmation statement will be filed, based on your answers
                to the questionnaire</span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                <span><MdChevronRight className="mt-1 text-2xl "/></span>
                <span>We will confirm the acceptance of your confirmation statement by
                email</span>
              </li>
              <li className="mb-1 flex justify-start items-start gap-1 w-full  ">
                {" "}<span><MdChevronRight className="mt-1 text-2xl "/></span>

                <span>This service is renewable on an annual basis at a cost of £59.99
                +VAT</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
