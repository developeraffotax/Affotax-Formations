import Faqs from "../../shared/Faqs";
import PriceBox from "../../shared/PriceBox";
import ServiceCTA from "../../shared/ServiceCTA";
import { data } from "./data";

const DirectorAppointment = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-0 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 max-lg:pt-4 pb-2">
          <h2 className="w-full text-4xl  py-2">
            Director appointment or resignation service
          </h2>
        </div>

        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">
          <div className="space-y-10">
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                Director appointment or resignation service
              </h4>
              <p className="text-gray-800 mb-2  ">
                When you register a company name, you can easily appoint a
                director to your UK company without filling out complicated
                forms or seeking a lawyer’s help by using our simple online
                process.
              </p>
              <p className="text-gray-800 mb-2  ">
                {" "}
                Our team will collect all the required documents and fill the
                director appointment forms on your behalf to ensure your new
                director is appointed in the right way — all you need to do is
                get your director to sign them
              </p>
              <p className="text-gray-800 mb-2  ">
                {" "}
                With vast experience and understanding of company laws in the
                UK, our team will take care of all legal formalities and
                compliance with Companies House regulations.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                What is included in our price?
              </h4>
              <ul className="list-disc ">
                <li className="">
                  An appointment letter for the director to sign
                </li>
                <li>Board meeting minutes, as required by law</li>
                <li>
                  Filing the form required with Companies House, as required by
                  law
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                How the service works
              </h4>
              <ul className="list-disc mb-3 ">
                <li className="">
                  Click on the “Appoint a New Director for Your Business Now”
                  button on the right{" "}
                </li>
                <li>Fill in your information </li>
              </ul>

              <p className="text-gray-800 mb-2  "> It's that simple. </p>
              <p className="text-gray-800 mb-2  ">
                {" "}
                We will file the required forms electronically with Companies
                House and supply you with your paperwork by email within three
                working days.{" "}
              </p>
            </div>

            <div className="w-full  ">
              <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
                {" "}
                What’s Included?{" "}
              </h4>
              <ul className="list-none space-y-3   ">
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">
                    Director appointment assistance
                  </h5>
                  If you want to appoint a new director for your company, we can
                  handle the entire process for you and ensure all legal
                  requirements are met.
                </li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">
                    Compliance with UK laws and regulations
                  </h5>
                  With our years of experience in UK company formations, we
                  ensure your new director appointment complies with all
                  Companies House regulations and doesn’t cause any future
                  issues
                </li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">Document preparation</h5>We'll
                  prepare all required documents, including the director
                  appointment letter and board meeting minutes, and file them
                  with Companies House.
                </li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">Quick online service</h5> We do
                  everything possible to make our services as fast and efficient
                  as possible. Our online service streamlines the process,
                  emailing your paperwork within three working days.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                Why choose our service for new director appointment?
              </h4>
              <ul className="list-disc mb-3 ">
                <li className="">
                  With vast experience in UK company law and Companies House
                  regulations, we can ensure your new director appointment is
                  done the right way
                </li>
                <li>
                  Our team will complete all the paperwork and adhere to all
                  legal requirements
                </li>
                <li>Avoid stressful compliance and formalities</li>
              </ul>
            </div>

            
          </div>

          <div>
            <ul className="text-gray-700 space-y-8 mb-8 ">
              <PriceBox serviceName={"Director Appointment"} title="Director Appointment" price={"59"} content="Our package covers the essentials for a smooth director appointment process, ensuring compliance and accurate updates." includesList={[ "Guidance on legal requirements and documentation.", "Preparation of necessary director resignation forms.", "Submission to relevant authorities", ]} />
              <PriceBox serviceName={"Director Appointment"} title="Director Resignation" price={"69"} content="Our package covers the essentials for a smooth director appointment process, ensuring compliance and accurate updates." includesList={[ "Guidance on legal requirements and documentation.", "Preparation of necessary director resignation forms.", "The government's filing fee is covered by Affotax with add-on.", ]} />
            </ul>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                What are the qualifications for a UK limited company director?
              </h4>
              <ul className="list-disc mb-3 ">
                <li className="">Anyone above the age of 16</li>
                <li>Anyone who is not an undischarged bankrupt</li>
                <li>Anyone who is not already a disqualified director</li>
                <li>
                  Any person who is not already acting as a director of the
                  company
                </li>
                <li>Anyone who is not subject to UK government restrictions</li>
              </ul>
            </div>

            

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]"> {" "} Can I appoint a Non-UK resident as a director in my limited company?{" "} </h4>
              <p className="text-gray-800 w-full mb-2"> {" "} Yes, a non-UK resident can become a director of a UK limited company as long as they meet the above requirements.{" "} </p>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]"> {" "} Can you also help us with the director resignation process?{" "} </h4>
              <p className="text-gray-800 w-full mb-2"> {" "} Yes, we can help you formally relieve or resign an existing director of your business. We understand that sometimes, a director may reach the end of their contract, they might not be able to devote enough time to the role or they might have health issues requiring them to resign. Companies House must be notified of the resignation within 14 days from the date of exit — let Mint Formations handle your director resignation on your behalf.{" "} </p>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]"> Proof of ID </h4>
              <p className="text-gray-800 w-full mb-2"> {" "} Anti money laundering (AML) regulations may require us to request photo ID and proof of address. We will ask for proof of ID as required by law — this must be provided if requested{" "} </p>
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

export default DirectorAppointment;
