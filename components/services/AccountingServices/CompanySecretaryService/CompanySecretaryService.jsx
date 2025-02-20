
import Faqs from "../../shared/Faqs";
import PriceBox from "../../shared/PriceBox";
import ServiceCTA from "../../shared/ServiceCTA";
import { data } from "./data";

const CompanySecretaryService = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="   w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 max-lg:pt-4 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Company Secretary Service
          </h2>
        </div>

        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">
          <div className="space-y-10">
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              Ensuring your company remains compliant
              </h4>
              <p className="text-gray-800 mb-2  ">
              This service is invaluable in providing peace of mind that the company secretarial aspects of your business are being taken care of, ensuring your company records are kept up to date and you remain compliant - all year long.

              </p>
              <p className="text-gray-800 mb-2  ">
              Our Full Company Secretary Service allows you to make 15 changes to your company every year (such as an appointment of a director) for no additional charge. It also includes filing of your annual confirmation statement, exclusive monthly solicitor-written guidance notes on key aspects directors need to be aware of, and a dedicated account manager to answer your questions and process your instructions.
              </p>
            
            </div>

           

            

          



            <div className="w-full  "> 
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] "> What’s Included?  </h4>
            <ul className="list-none space-y-3   ">
           
           
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold " >Fifteen changes to your company per year: </h5>Including director appointments, share transfers, and share allotments free of charge (additional transactions thereafter are charged at our standard rates).

                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Filing of your annual confirmation statement: 
                </h5>Including the Companies House filing fee of £34.00.

                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Preparation and maintenance of your company registers: </h5>Including the statutory register of members (as required by the Companies Act 2006).

                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Exclusive solicitor-written guidance notes: </h5> Covering key topics and processes you need to be aware of when running a company (such as the directors' duties and entering into contracts).

                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Dormant company service:  </h5>If your company is dormant, we will submit your dormant company accounts to Companies House and provide you with a template letter to notify HMRC it is dormant for Corporation Tax purposes.



                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">A dedicated account manager:  </h5> You will be assigned an experienced company secretarial professional, who will be on hand to answer your questions and process your instructions.

                </li>
                
            </ul>
            </div>




          </div>





          <div>
            <ul className="text-gray-700 space-y-8 mb-8 ">
              <PriceBox
                serviceName={"Company Secretary Service"}
                title="Company secretary assignment"
                price={"149"}
                content="Appointing a company secretary can be a great way to ensure compliance and boost trust in your company. We’ll assign a dedicated personal manager to your company, ensuring all legal requirements are met."
                includesList={[
                  "Company register maintenance",
                  "Annual confirmation statement",
                  "Officer appointments and resignations",
                ]}
              />
              
            </ul>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              What happens next..
              </h4>

              <ul className="list-disc mb-3 ">
                <li>Once you have purchased this service, you will receive a welcome email detailing how your service works as well as an introduction from your appointed account manager.</li>
                <li>We will prepare and store your company registers for your convenience. If you require a copy of these, we will forward them to you by email.</li>
                <li>Your dedicated account manager will always be on hand to answer any questions, carry out changes, maintain your registers and deliver copies on request, and file your annual confirmation statement.</li>
               
              </ul>
            </div>



          </div>
        </div>
      </section>

      <section className=" ">
        <ServiceCTA />
      </section>

      <Faqs items={data}/>
    </>
  );
};

export default CompanySecretaryService;
