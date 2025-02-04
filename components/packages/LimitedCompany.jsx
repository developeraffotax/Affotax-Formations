import React from "react";
import { RiInformation2Line } from "react-icons/ri";
import { RiShieldCheckFill } from "react-icons/ri";
import OriginalPrice from "./shared/OriginalPrice";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import dynamic from 'next/dynamic'
 
const BuyNowBtn = dynamic(
  () => import('./BuyNowBtn'),
  { ssr: false }
)






const LimitedCompany = () => {
  return (
        


<div className="w-full grid grid-cols-1  py-20  ">
            <ul className="w-[50%] grid grid-cols-3 gap-0  border  shadow-md">
              <Link
                href="/packages/limited-company"
                className="flex  justify-center items-center py-3 border-r text-sm  hover:bg-orange-500  bg-orange-500 text-white    "
              >
                {" "}
                <h3>Limited Company</h3>
              </Link>
              <Link
                href="/packages/non-residents"
                className="flex  justify-center items-center py-3 border-r text-sm    hover:bg-orange-500 hover:text-white    "
              >
                {" "}
                <h3>Non-Residents</h3>
              </Link>
              <Link
                href="/packages/llp"
                className="flex  justify-center items-center py-3  text-sm hover:bg-orange-500  hover:text-white   "
              >
                <h3>LLP</h3>
              </Link>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b   bg-[#E7F4FF] shadow-sm">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-2 border-x        ">
                <h3 className="flex justify-start gap-2 items-center ">
                  {" "}
                  What you'll get!
                </h3>{" "}
              </li>
              <li className="flex flex-col justify-center items-center py-2  px-2 border-r text-lg relative       ">
                {" "}
                <h3>Basic</h3> <span className="font-semibold text-orange-500">£49</span><span className="text-sm text-center ">+ £50 Companies House Fee</span>
              </li>
              <li className="flex flex-col justify-center items-center py-2  px-2 border-r text-lg  relative    ">
                <OriginalPrice title={"40% OFF"} price={"165"} />{" "}
                <h3>Standard</h3> <span className="font-semibold text-orange-500">£99</span><span className="text-sm text-center ">+ £50 Companies House Fee</span>
              </li>
              <li className="flex flex-col justify-center items-center py-2  px-2 border-r text-lg relative">
                {" "}
                {/* <OriginalPrice title={"30% OFF"} price={"110"} />{" "} */}
                <h3>Premium</h3> <span className="font-semibold text-orange-500">£199</span><span className="text-sm text-center ">+ £50 Companies House Fee</span>
              </li>
              <li className="flex flex-col justify-center items-center py-2  px-2 border-r text-lg  relative    ">
                {" "}
                <OriginalPrice title={"50% OFF"} price={"799"} />{" "}
                <h3>All-Inclusive</h3>{" "}
                <span className="font-semibold text-orange-500">£399</span><span className="text-sm text-center ">+ £50 Companies House Fee</span>
              </li>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b    ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x        ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl " />
                  </span>{" "}
                  Limited Company
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>
              <li className="flex justify-center items-center py-4 border-r       ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Digital Company Documents
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
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
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
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
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
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
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
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
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
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
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
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>


            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  PAYE Registration
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>


            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Full Company Secreterial Service (Worth £99)
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>


            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Company Accounts (Worth £99)
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>

            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  ">
                <h3 className="flex justify-start gap-2 items-center ">
                  <span>
                    <RiShieldCheckFill className="text-orange-500 text-xl  " />
                  </span>
                  Company Tax Return (Worth £149)
                </h3>{" "}
                <span>
                  <RiInformation2Line className="text-gray-500 text-xl hover:cursor-pointer " />
                </span>
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <RxCross2 className="text-2xl text-red-400" />
              </li>
              <li className="flex justify-center items-center py-4 border-r     ">
                <IoCheckmark className="text-3xl text-cyan-500 " />
              </li>
            </ul>



            <ul className="w-full grid grid-cols-[4fr_1fr_1fr_1fr_1fr] gap-0 border-b      ">
              <li className="w-full flex justify-between items-center gap-4 px-4 py-4 border-x  "></li>
              <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">
                <BuyNowBtn href={"/buy/packages/limited-company/basic-package"} pkg={"basic-package"} company={"limited-company"}/>
              </li>
              <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">
                {" "}

                <BuyNowBtn href={"/buy/packages/limited-company/standard-package"} pkg={"standard-package"} company={"limited-company"}/>


                
              </li>
              <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">
                

              <BuyNowBtn href={"/buy/packages/limited-company/premium-package"} pkg={"premium-package"} company={"limited-company"}/>


              
              </li>
              <li className="flex flex-col justify-center items-center gap-2  py-4 border-r     ">
                {" "}

                <BuyNowBtn href={"/buy/packages/limited-company/all-inclusive-package"} pkg={"all-inclusive-package"} company={"limited-company"}/>



              </li>
            </ul>
          </div>
  );
};

export default LimitedCompany;





















