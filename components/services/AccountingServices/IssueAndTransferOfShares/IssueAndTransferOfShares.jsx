import Faqs from "../../shared/Faqs";
import PriceBox from "../../shared/PriceBox";
import ServiceCTA from "../../shared/ServiceCTA";
import { data } from "./data";

const IssueAndTransferOfShares = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="   w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 max-lg:pt-4 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Issue & Transfer of Shares
          </h2>
        </div>

        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">
          <div className="space-y-10">
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              Transfer of Shares
              </h4>
              <p className="text-gray-800 mb-2  ">Do you need to transfer shares from one shareholder to another but don’t know where to begin? Let us take care of it for you, taking the burden away from you and ensuring everything is done correctly.
              </p>
              <p className="text-gray-800 mb-2  ">With this service, our team of experts will prepare all of the necessary internal company documentation required to move existing shares between new or current shareholders.
              </p>
              <p className="text-gray-800 mb-2  ">For an additional cost of £55.99 plus VAT, we’ll also prepare and file a confirmation statement, updating your latest share situation on the Companies House register. This may be required if you are opening a business bank account and the bank wish to see updated records.</p>

            </div>




            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              What do I get?
              </h4>
              
              

              <ul className="list-disc mb-3 ">
                
                <li>Stock transfer form


                </li>
                <li>Board resolution

                </li>
                <li>Share certificates
                </li>
              </ul>

            </div>



            
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
              How the service works:
              </h4>
              
              

              <ul className="list-disc mb-3 ">
                
                <li>Select 'Buy Now'



                </li>
                <li>

                Complete the simple application form


                </li>
                <li>Proceed to checkout and make payment </li>
                <li>We will email your digital documents within 2-3 working days
                </li>
                <li>The transferor and transferee will need to sign the stock transfer form. This should then be filed with your company records
                </li>
                <li>If purchased, we will prepare and file a confirmation statement</li>
              </ul>

            </div>



          
            



            
          </div>





          <div>
            <ul className="text-gray-700 space-y-8 mb-8 ">
              <PriceBox serviceName={"Issue & Transfer of Shares"} title="Transfer" price={"59"} content="In this package, we will complete all of the necessary documentation, including accurate filing & compliance with the UK government." includesList={[ "Completion and filing of dissolution form", "Board Resolution to approve the dissolution", "The Govt fee £33 is paid by Affotax", ]} />
              <PriceBox serviceName={"Issue & Transfer of Shares"} title="Issue" price={"69"} content="In this package, Affotax will complete all the necessary documentation and submit the final set of accounts before closing the LTD." includesList={[ "Company Dissolution Service", "Prepare the last year final accounts", "Submission of final accounts with companies house", ]} />
            </ul>


           
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

export default IssueAndTransferOfShares;
