import React from "react";
import { RiInformation2Line } from "react-icons/ri";
import { RiShieldCheckFill } from "react-icons/ri";
import OriginalPrice from "./shared/OriginalPrice";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import dynamic from 'next/dynamic'
import MobilePackage from "./shared/MobilePackage";
import { Badge } from "@heroui/react";
 
const BuyNowBtn = dynamic(
  () => import('./BuyNowBtn'),
  { ssr: false }
)




const Llp = () => {
  return (
    <>








<div className="w-full grid grid-cols-1  py-20   max-lg:hidden">
            <ul className="w-[50%] grid grid-cols-3 gap-0  border  shadow-md">
              <Link
                href="/packages/limited-company"
                className="flex  justify-center items-center py-3 border-r text-sm  hover:bg-orange-500 hover:text-white  "
              >
                {" "}
                <h3>Limited Company</h3>
              </Link>
              <Link
                href="/packages/non-residents"
                className="flex  justify-center items-center py-3 border-r text-sm    hover:bg-orange-500 hover:text-white      "
              >
                {" "}
                <h3>Non-Residents</h3>
              </Link>
              <Link
                href="/packages/llp"
                className="flex  justify-center items-center py-3  text-sm hover:bg-orange-500  hover:text-white  bg-orange-500 text-white  "
              >
                <h3>LLP</h3>
              </Link>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b   bg-[#E7F4FF] shadow-sm">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-2 border-x        ">
                <h3 className="flex justify-start gap-2 items-center ">
                  {" "}
                  What you'll get!
                </h3>{" "}
              </li>

              <li className="flex flex-col justify-center items-center py-2 px-2 border-r text-lg  relative    ">
                <h3>Standard</h3> <span className="font-semibold text-2xl text-orange-500">£199</span><span className="text-xs text-gray-700 text-center ">+ £50 Govt. Fee</span>
              </li>
              <li className="flex flex-col justify-center items-center py-2 px-2  border-r text-lg relative">
                {" "}
                <OriginalPrice title={"50% OFF"} price={"999"} />{" "}
                <h3>Premium</h3> <span className="font-semibold text-2xl text-orange-500">£499</span><span className="text-xs text-gray-700 text-center ">+ £50 Govt. Fee</span>
              </li>
              {/* <li className="flex flex-col justify-center items-center py-2 border-r text-lg  relative    ">
                {" "}
                <OriginalPrice title={"30% OFF"} price={"130"} />{" "}
                <h3>All-Inclusive</h3>{" "}
                <span className="font-semibold">£100</span>
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b    ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x        ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl " />
                  </span>{" "}
                  Limited Liability Company
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Digital Memorandum and Articles of Association
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>{" "}
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Digital (Word) Draft LLP Agreement
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Tax Consultation (30min)
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  London Registered Address
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  London Service Address
                  
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  London Trading Address
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Confirmation Statement Service
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Full LLP Secreterial Service (Worth £149)
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Annual LLP Accounts filing (Worth £399)
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>

              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              {/* <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li> */}
            </ul>








            <ul className="w-full grid grid-cols-[4fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "></li>

              <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">
                {" "}

                <BuyNowBtn href={"/buy/packages/llp/standard-package"}  pkg={"standard-package"} company={"llp"}/>

              </li>
              <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">
                {" "}


                <BuyNowBtn href={"/buy/packages/llp/premium-package"}  pkg={"premium-package"} company={"llp"}/>
             
              </li>
              {/* <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">
                {" "}
                <BuyNowBtn href={"/buy/packages/llp/all-inclusive-package"}  pkg={"all-inclusive-package"}  company={"llp"}/>
                
              </li> */}
            </ul>
          </div>



















































          
          <div className="w-full grid grid-cols-1  py-12   lg:hidden ">

            <ul className="w-full grid grid-cols-1  gap-6     ">

          <h3 className="text-xl w-full text-center font-poppins ">Limited Liabality Partnership - LLP Packages</h3>
 





                <MobilePackage title={"Standard"} description={`Our limited liability partnership formation package, is ideal for any type of profession that would normally operate as a traditional partnership, but whose members require limited liability.`} price={'199'} whatsIncludedArr={[ 'Limited Liability Company', 'Digital Memorandum and Articles of Association', 'Digital (Word) Draft LLP Agreement', 'Tax Consultation (30min)', 'London Registered Address', 'London Service Address', 'London Trading Address', 'Confirmation Statement Service' ]} ><BuyNowBtn href={"/buy/packages/llp/standard-package"}  pkg={"standard-package"} company={"llp"}/>
                </MobilePackage>




                  

    <Badge classNames={{badge: 'px-2 py-1   top-0 right-[50%]   '}}  color="primary" content={<p><span className="line-through">£999</span> | 50% OFF</p>} placement="top-right" shape="rectangle"   >
      
                <MobilePackage title={"Premium"} description={`Our limited liability partnership formation package, is ideal for any type of profession that would normally operate as a traditional partnership, but whose members require limited liability. Includes everything in Standard Package plus Full LLP Secreterial Service (Worth £149), Annual LLP Accounts filing (Worth £399).`} price={'499'} whatsIncludedArr={[ 'Limited Liability Company', 'Digital Memorandum and Articles of Association', 'Digital (Word) Draft LLP Agreement', 'Tax Consultation (30min)', 'London Registered Address', 'London Service Address', 'London Trading Address', 'Confirmation Statement Service', 'Full LLP Secreterial Service (Worth £149)', 'Annual LLP Accounts filing (Worth £399)' ]} >    <BuyNowBtn href={"/buy/packages/llp/premium-package"}  pkg={"premium-package"} company={"llp"}/></MobilePackage>
</Badge>








            </ul>

           
          </div>
    </>
  );
};

export default Llp;
