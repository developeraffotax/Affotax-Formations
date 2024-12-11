import Faqs from "../../shared/Faqs";
import PriceBox from "../../shared/PriceBox";
import ServiceCTA from "../../shared/ServiceCTA";
import { data } from "./data";

const CompanyDissolution = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Company Dissolution - £75
          </h2>
        </div>

        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">
          <div className="space-y-10">
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              What is company dissolution?
              </h4>
              <p className="text-gray-800 mb-2  ">
              To dissolve a company is to apply to Companies House to strike it off the register of companies. After dissolution, the company no longer legally exists.
              </p>

            </div>




            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              Why should I close my limited company with Affotax?
              </h4>
              
              

              <ul className="list-disc mb-3 ">
                
                <li>Avoid filling complicated forms

                </li>
                <li>Avoid stressful legal processes
                y

                </li>
                <li>Ensure the dissolution process is handled the right way to ensure speedy and accurate completion
                </li>
              </ul>

            </div>



            
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              What is included in your price?
              </h4>
              
              

              <ul className="list-disc mb-3 ">
                
                <li>Companies House fee of £33.00


                </li>
                <li>Completion and filing of the company dissolution form (DS01). A hard copy must be filed — we can do this for you

                y

                </li>
                <li>Board meeting minutes — a document where the directors agree to the strike-off application
                </li>
              </ul>

            </div>




            
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              How does it work?
              </h4>
              
              

              <ul className="list-disc mb-3 ">
                
                <li>Click the “Dissolve My Company Now” button


                </li>
                <li>
                Make the payment


                </li>
                <li>Enter the company information
                </li>
              </ul>


              <p className="text-gray-800 mb-2  ">

              We will send you the documents electronically. These must be printed, signed by majority directors and then returned to us. We can provide you with printed documents by post for an additional fee.
                </p>
            </div>



            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              What are the general reasons for dissolving a limited company?
              </h4>
              
              <p className="text-gray-800  ">

              A director (or directors) may choose to dissolve a UK limited company for any number of reasons, but these are the most common:
              </p>

              <ol className="list-disc mb-3 ">
                
                <li>The company was started to exploit a business model that is no longer working



                </li>
                <li>
                Company members are no longer interested in pursuing the business



                </li>
                <li>The company is a subsidiary and the registered business name is no longer required
                </li>
              </ol>


             
            </div>





            <div className="w-full  ">
              <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
                {" "}
                What’s Included?{" "}
              </h4>
              <ul className="list-none space-y-3   ">
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">
                  Company dissolution assistance
                  </h5>
                  Dissolving a limited company can be a complex legal procedure. We’ll handle everything for you and ensure all legal and Companies House requirements are met.
                </li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">
                  Companies House fee
                  </h5>
                  To dissolve a company in the UK, you need to pay a fee to Companies House. We include this fee in our service price so you can make one simple payment.
                </li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">Board minute meetings
                  </h5>For a company to dissolve, its directors must agree to the dissolution application on the record. We’ll prepare board meeting minutes to ensure you tick that box
                </li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">Completion and filing of DS01 form</h5>You’ll need to complete a company dissolution form (DS01) to dissolve your company. We’ll complete and file the form and ensure a successful dissolution
                </li>
              </ul>
            </div>


          
            



            
          </div>





          <div>
            <ul className="text-gray-700 space-y-8 mb-8 ">
              <PriceBox title="Company Dissolution" price={"59.00"} content="In this package, we will complete all of the necessary documentation, including accurate filing & compliance with the UK government." includesList={[ "Completion and filing of dissolution form", "Board Resolution to approve the dissolution", "The Govt fee £33 is paid by Affotax", ]} />
              <PriceBox title="Company Dissolution + Annual filing" price={"69.00"} content="In this package, Affotax will complete all the necessary documentation and submit the final set of accounts before closing the LTD." includesList={[ "Completion and filing of dissolution form", "Board Resolution to approve the dissolution", "The Govt fee £33 is paid by Affotax", ]} />
            </ul>


            
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              What options do I have if I want to keep the company but no longer wish to trade?
              </h4>
              
              <p className="text-gray-800  ">

              If you wish to keep your UK limited company but you do not wish to trade at this moment, you can make it a dormant company . Your company is deemed to be dormant if:


              </p>

              <ul className="list-disc mb-3 ">
                
                <li>Your company is not carrying out any business activities




                </li>
                <li>
                Your company is no longer trading




                </li>
                <li>The company is no longer receiving any income

                </li>
              </ul>


             
            </div>
         
          </div>
        </div>
      </section>







      <section className="pb-16">
        <ServiceCTA />
      </section>

      <Faqs items={data}/>
    </>
  );
};

export default CompanyDissolution;
