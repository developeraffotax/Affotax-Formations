import Faqs from "../../shared/Faqs";
import PriceBox from "../../shared/PriceBox";
import ServiceCTA from "../../shared/ServiceCTA";
import { data } from "./data";


const ConfirmationStatement = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Confirmation Statement Filing
          </h2>
        </div>

        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">
          <div className="space-y-10">
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              Filing Your Confirmation Statement Simple
              </h4>
              <p className="text-gray-800 mb-2  ">
              Has Companies House requested that you file your confirmation statement? If you don’t know where to start or simply don’t want the stress of filing your confirmation statement, Mint Formations can help.
              </p>
              <p className="text-gray-800 mb-2  ">
                {" "}
                We’ll gather all the information we need from you, including any changes to shareholders, directors or persons of significant control, and file your statement for you.
              </p>
            </div>

            <ul className="list-disc ">
            
              <li className="">No hidden costs (honest pricing)</li>
              <li>FREE lifetime customer support</li>
              <li>Companies House authorised</li>
              <li>Consistent 5-star reviews</li>
              <li> Verification that company is up to date with filing requirements </li>
            </ul>



            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              Confirmation Statements in the UK Explained
              </h4>
              <p className="text-gray-800 mb-2  ">
                {" "}
                When you register a company, you will need to file a document called a confirmation statement at least once every 12 months. Delivered to Companies House, it confirms the registered details of a company on a certain date.
              </p>
              <p className="text-gray-800 mb-2  ">
                {" "}
                It is important not to confuse the confirmation statement with your annual accounts; the accounts outline the financial figures, while a confirmation statement outlines information about the company and its directors. Companies House will list the date to which the statement should be made up and the date it must be filed by.
              </p>
            </div>


            <ul className="list-disc ">
              <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
                WConfirmation Statement Purpose
              </h4>

              <p>
              An annual confirmation statement filing confirms the following information:
              </p>

              <li className="">Information about the company’s directors</li>
              <li>Information about the company’s secretary (if appointed)</li>
              <li>The company’s registered office address</li>
              <li>The company’s core business activities (SIC codes)</li>
              <li>Details of any shareholders</li>
              <li>Issue of shares</li>
              <li>Person(s) of significant control (PSC).</li>
            </ul>


            

           
            
          </div>



        








          <div>
            <ul className="text-gray-700 space-y-8  ">
              <PriceBox
                serviceName={"Confirmation Statement"}
                title="Standard Service"
                price={"59"}
                content="Your confirmation statement will be filed within 3 working days of receiving the required information"
                includesList={[
                  "Completion and filing of the CS01 form",
                  "Submission to Companies House",
                  "The government's filing fee is covered by Affotax with add-on.",
                ]}
              />
              <PriceBox
                serviceName={"Confirmation Statement"}
                title="Express Service"
                price={"69"}
                content="Your confirmation statement will be filed within 3 working days of receiving the required information"
                includesList={[
                  "Completion and filing of the CS01 form",
                  "Submission to Companies House",
                  "The government's filing fee is covered by Affotax with add-on.",
                  "Express Delivery (1 Day)"
                ]}
              />
            </ul>
          </div>
        </div>



        <div className="w-full pt-8 ">
              <h4 className="text-lg font-semibold mb-2 text-[#002B5B]  "> {" "} How Affotax Formations File Confirmation Statements </h4>
              <p className="text-gray-800 mb-2  "> Confirmation statement filing (previously known as annual return filing) is a mandatory annual requirement for all limited and LLP companies. An annual confirmation statement is a snapshot of the company on a given date each year, usually the incorporation date. We can file your annual confirmation statement at Companies House correctly, ensuring complete compliance for your UK company. </p>
              <p className="text-gray-800 mb-2  "> At Affotax Formations, we can handle the entire confirmation statement filing process on your behalf. We will: </p>
              <ul className="list-none w-full grid grid-cols-4  gap-4 pt-5  ">
                <li className=" flex flex-col justify-start items-center gap-4 p-6 border border-orange-500 text-center shadow-md shadow-black/10 "> <h5 className="font-semibold text-orange-400  text-xl  "> Step - 1 </h5> <p> Prepare your annual confirmation statement </p> </li>
                <li className=" flex flex-col justify-start items-center gap-4 p-6 border border-orange-500 text-center shadow-md shadow-black/10 "> <h5 className="font-semibold text-orange-400  text-xl  "> Step - 2 </h5> <p>File your confirmation statement to Companies House</p> </li>
                <li className=" flex flex-col justify-start items-center gap-4 p-6 border border-orange-500 text-center shadow-md shadow-black/10 "> <h5 className="font-semibold text-orange-400  text-xl  "> Step - 3 </h5> <p> Fill in your confirmation statement form </p> </li>
                <li className=" flex flex-col justify-start items-center gap-4 p-6 border border-orange-500 text-center shadow-md shadow-black/10 "> <h5 className="font-semibold text-orange-400  text-xl  "> Step - 4 </h5> <p> Ensure your company’s confirmation statement is filed in accordance with all UK regulations </p> </li>

                
              </ul>
            </div>


            
      </section>

      <section className="pb-16">
      <ServiceCTA />
      </section>

      <Faqs items={data}/>
    </>
  );
};

export default ConfirmationStatement;
