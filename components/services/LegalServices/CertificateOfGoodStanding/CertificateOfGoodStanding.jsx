import PriceBox from "../../shared/PriceBox";
import ServiceCTA from "../../shared/ServiceCTA";


const CertificateOfGoodStanding = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
            Certificate of Good Standing - £69
          </h2>
        </div>

        <div className="w-full grid grid-cols-2  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">
          <div className="space-y-10">
            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                What is a Certificate of Good Standing?
              </h4>
              <p className="text-gray-800 mb-2  ">
                All limited companies in the UK are legally required to make
                annual filings with Companies House - the UK registrar of
                companies. Failure to meet the statutory requirements can result
                in penalties; however, if your company successfully maintains
                all legal filing obligations, it will be in 'good standing' with
                Companies House.{" "}
              </p>
              <p className="text-gray-800 mb-2  ">
                {" "}
                You can request that Companies House issue a Certificate to
                verify this good standing. This will effectively demonstrate
                that your company is compliant with all statutory requirements.
              </p>
            </div>

            <ul className="list-disc ">
              <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
                Please note:
              </h4>

              <p>
                 Due to changes to the Small Business Enterprise and Employment
                Act on 30th June 2016, you will no longer be able to order
                Certificates of Good Standing with information on shareholders,
                shareholdings or statement of capital information.
              </p>

              <h5>
                The following information will be shown on the Certificate
              </h5>
              <li className="">Date of incorporation</li>
              <li>Director(s) name(s)</li>
              <li>Company secretary name (if relevant)</li>
              <li>Registered office address</li>
              <li>Company objects (if relevant)</li>
              <li>
                Verification that company is up to date with filing requirements
              </li>
            </ul>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                Why should I have a Certificate of Good Standing?
              </h4>
              <p className="text-gray-800 mb-2  ">
                {" "}
                You may require a Certificate of Good Standing if you want to
                open a business bank account or set up an overseas branch of an
                existing UK-based limited company. Potential investors and
                lenders may also request a certificate before investing in your
                business.
              </p>
            </div>

            <ul className="list-disc ">
              <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
                What are the uses of a certificate of good standing?
              </h4>

              <p>
                A certificate of good standing is an important document that
                might be required in various scenarios. You may require a
                certificate of good standing to:
              </p>

              <li className="">Open a business bank account</li>
              <li>Set up an overseas branch of your UK limited company</li>
              <li>Attract potential investors and lenders</li>
              <li>Secure a bank loan</li>
            </ul>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                How is the Certificate delivered?
              </h4>
              <p className="text-gray-800 mb-2  ">
                We send our Certificates of Good Standing using Royal Mail
                Special Delivery or International Tracked and Signed mail (free
                of charge), or a premium courier (at an additional cost), to any
                destination in the world.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
                When will my Certificate be issued?
              </h4>
              <p className="text-gray-800 mb-2  ">
                {" "}
                If you order your certificate using the Standard Service, it
                will be issued within 10 working days. If you order using our
                Express Service, your certificate will be issued within 24
                hours. The Express Service is only available on orders placed
                before 1pm Mon – Fri.
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
                    Certificate of Good Standing procurement
                  </h5>
                  A Certificate of Good Standing proves that your company has
                  filed its annual paperwork with Companies House and has no
                  outstanding fees. We’ll handle the application for you,
                  ensuring you get your certificate.
                </li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">
                    Document preparation and submission
                  </h5>
                  We'll prepare all required forms and paperwork and submit your
                  request to Companies House on your behalf.
                </li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                  <h5 className="font-semibold ">Quick online service</h5>Once
                  you’ve filled out our 30-second form, we’ll handle everything
                  and deliver your certificate of good standing quickly —
                  usually within a few days of application.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <ul className="text-gray-700 space-y-8  ">
              <PriceBox
                title="For UK Residents"
                price={"69.00"}
                content="We offer seamless PAYE registration services with HMRC, ensuring your business is set up to handle employee payroll and tax obligations smoothly. Our expert team manages the process for a hassle-free experience."
                includesList={[
                  "PAYE registration",
                  "Preparation and submission to HMRC",
                  "Get Paye Registration Letter showing Payroll Number.",
                ]}
              />
              {/* <PriceBox
                title="For Non-UK Residents"
                price={"49.00"}
                content="We offer seamless PAYE registration services with HMRC, ensuring your business is set up to handle employee payroll and tax obligations smoothly. Our expert team manages the process for a hassle-free experience."
                includesList={[
                  "PAYE registration",
                  "Preparation and submission to HMRC",
                  "Get Paye Registration Letter showing Payroll Number.",
                ]}
              /> */}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16">
      <ServiceCTA />
      </section>

      {/* <Faqs items={data}/> */}
    </>
  );
};

export default CertificateOfGoodStanding;
