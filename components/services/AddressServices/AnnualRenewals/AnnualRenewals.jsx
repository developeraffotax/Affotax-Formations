
import Checkmark from '@/public/checkmark2.png'


import Image from "next/image";
import PriceBox from "./PriceBox";
import ServiceCTA from '../../shared/ServiceCTA';

const AnnualRenewals = () => {
  return (
    <>
      <section className="w-full container mx-auto font-Inter px-40 max-xl:px-8 pb-16  ">
        <div className="  max-xl:px-8 w-full flex justify-between items-center gap-8 border-b-2 border-gray-300  mb-6 pt-12 pb-2">
          <h2 className="w-full text-4xl  py-2">
          Annual Renewals
          </h2>

         
        </div>














        <div className="w-full grid grid-cols-1  max-xl:grid-cols-1 max-xl:gap-8 gap-16 leading-relaxed font-Inter text-base">


          <div className="space-y-10">
            
            
            



            <div>

            <p className="text-gray-800 mb-2  ">
            Our services are set up to renew automatically on an annual basis, however, if you prefer to manually renew them, you can do so here.
            </p>


            <h4 className="text-lg mb-2 font-semibold  text-[#002B5B]">
            How it works:
            </h4>
            <p className="text-gray-800 mb-2  "> If you wish to renew a service, select the Buy Now button and login to your account, after which you will be taken to your Active Services page, where you will be able to extend the service (and any other services you may have), for another year. </p>
            <p className="text-gray-800 mb-2  "> If the service you wish to renew has expired within the last 35 days, select the Services tab on the menu and then select Renew Expired Services. Services that expired over 35 days ago, cannot be renewed and require being re-purchased in the Shop section.
            </p>
            <p className="text-gray-800 mb-2  "> To discuss your renewals please contact our Services Manager at 020 8144 6811. </p>
            
            </div>
           



            <ul className="list-disc text-gray-800">
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] ">
            Advantages of a director's service address:
            </h4>
                <li className="">Hide your residential address from the internet, marketing agencies and the public
                </li>
                <li>Protect your home address from being displayed on the public register
                </li>
                <li>Protect yourself from being a victim of identity fraud
                </li>
                <li>Prevent unsolicited letters from marketing agencies
                </li>
                <li>Prevent customers or visitors arriving at your home address</li>
                <li>Receive a prestigious London company address that will enhance your professional image</li>
            </ul>




            <div className="w-full  "> 
            <h4 className="text-lg font-semibold mb-2 text-[#002B5B] "> What’s Included?  </h4>
            <ul className="list-none space-y-3   ">
           
           
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold " >Director's service address</h5>Setting up a director's service address gives you more privacy and authority. We’ll handle the process for you, ensuring your privacy is protected
                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Statutory mail handling</h5>We’ll receive all your personal statutory mail from HMRC and Companies House, scan, and email your letters to yo
                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Address change notification</h5>We’ll immediately notify Companies House of your address change, ensuring all records are up-to-date.
                </li>
                <li className="flex flex-col justify-start items-start gap-0 "><h5 className="font-semibold ">Protection of home address</h5> We help protect your home address from being displayed on the public register, preventing unsolicited letters and enhancing your privacy.
                </li>
                
            </ul>
            </div>
           

            



          </div>




















          <div className="flex flex-col items-start justify-between gap-8 ">
           
            <ul className="text-gray-700 space-y-8  ">
                <PriceBox title="Registered Office Address" price={'39.00'} content="Renew your Registered Office Address and continue to protect the privacy of your home address for another 12 months." />
                <PriceBox title="Service Address" price={'26.00'} content="Maintain the privacy provided with our Service Address for another year." />
                <PriceBox title="Business Address Service" price={'96.00'} content="Renew your Registered Office Address and continue to protect the privacy of your home address for another 12 months." />
                <PriceBox title="Confirmation Statement Service" price={'59.99'} content="Extend your Confirmation Statement Service and make sure you stay compliant with Companies House." />
                <PriceBox title="Dormant Company Accounts Service" price={'49.99'} content="You can renew our Dormant Company Accounts Service here, and we will prepare and file your accounts for another year." />
                <PriceBox title="Full Company Secretary Service" price={'149.99'} content="Renew your service and have the peace of mind that your company secretarial work is being taken care of for another year." />
                


                

            
            </ul>



            
          </div>




        </div>




      











      </section>

    <section className='pb-16'>

    <ServiceCTA />
    </section>





    



    











    </>
  );
};

export default AnnualRenewals;
