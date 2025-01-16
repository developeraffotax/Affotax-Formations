import Faqs from "../../shared/Faqs";
import PriceBox from "../../shared/PriceBox";
import ServiceCTA from "../../shared/ServiceCTA";
import { data } from "./data";

const DormantCompanyAccounts = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
            Dormant Company Accounts - £69.99
          </h2>
        </div>

        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">
          <div className="space-y-10">
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                What is a dormant account filing service?
              </h4>
              <p className="text-gray-800 mb-2  ">
                Every limited company in the UK is required to file accounts on
                an annual basis. If your company is classified as dormant (not
                trading), you do not need to file full accounts, however, you
                are required to file dormant company accounts.
              </p>
              <p className="text-gray-800 mb-2  ">
                1st Formations provide a dormant account filing service for
                limited companies, regardless of whether the company was
                incorporated using our website. The process takes no longer than
                24 hours (Express Service), and you can save on not having to
                pay costly accountancy fees.
              </p>
              <p className="text-gray-800 mb-2  ">
                The cost of our Dormant Company Accounts Service is £49.99 +VAT.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                How it works
              </h4>

              <ul className="list-disc mb-3 ">
                <li>Select the Standard or Express Service</li>
                <li>Fill out the order form, checkout, and pay</li>
                <li>
                  Simply confirm your answers to the questions by replying to
                  the email{" "}
                </li>
                <li>
                  We will file your dormant accounts and inform you by email
                  when Companies House accepts them
                </li>
                <li>
                  This service is renewable on an annual basis at a cost of
                  £49.99 plus VAT
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                What Do You Need to Provide?
              </h4>

              <ul className="list-disc mb-3 ">
                <li>Company name and number</li>
                <li>Authentication code (if you have one)</li>
                <li>Bank statement (if the company has a bank account)</li>
                <li>
                  Information about your company's shares (paid or unpaid)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                How long does it take?
              </h4>
              <p className="text-gray-800 mb-2  ">
                Using our Express Service it takes 24 hours (1 working day) to
                prepare and file dormant company accounts with Companies House
                (subject to receiving the required information). If you are not
                in a rush, our Standard Service takes up to 3 working days
                (subject to receiving the required information).
              </p>
              <p className="text-gray-800 mb-2  ">
                Please note: We cannot take responsibility for any late filing
                penalties or fines if your order or required information is not
                received in a timely manner.
              </p>
            </div>
          </div>

          <div>
            <ul className="text-gray-700 space-y-8 mb-8 ">
              <PriceBox
                serviceName={"Dormant Company Accounts"}
                title="Dormant Accounts Standard"
                price={"59.00"}
                content="This exclusive package will help you prepare your UK company Dormant accounts and submit them to Companies House within 3 working days."
                includesList={[
                  "Preparation of Dormant Company Accounts",
                  "Submission with companies house",
                ]}
              />
              <PriceBox
                serviceName={"Dormant Company Accounts"}
                title="Dormant Accounts Express"
                price={"69.00"}
                content="This exclusive package will help you prepare your UK company Dormant accounts and submit them to Companies House within 1 working day."
                includesList={[
                  "Preparation of Dormant Company Accounts",
                  "Submission with companies house",
                ]}
              />
              <PriceBox
                serviceName={"Dormant Company Accounts"}
                title="Dormant Accounts Bundle Service"
                price={"69.00"}
                content="The Premium delivery package helps you prepare and file as UK limited companies, and submitting them to Companies House within one working day."
                includesList={[
                  "Preparation of Dormant Company Accounts",
                  "Submission with companies house",
                  "Prepepartion of confirmation statement",
                  "Inclusive of Companies House fee with add-on.",
                ]}
              />
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

export default DormantCompanyAccounts;
