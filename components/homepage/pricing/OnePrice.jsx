import dynamic from "next/dynamic";
import React from "react";
import { v4 as uuidv4 } from 'uuid';


const BuyNowBtn = dynamic(
  () => import('./BuyNowBtn'),
  { ssr: false }
)



const OnePrice = ({ name, description, badge, price, List, href, pkg, company }) => {
  
  return (
    <div className="bg-white flex flex-col justify-between  bg-opacity-10 rounded-lg shadow-lg p-6 max-xl:p-8 relative ">
      <div className="">
      {
        badge && <div className="absolute -top-3 right-[50%] translate-x-[50%]  ">
        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-cyan-50 text-cyan-700 text-nowrap ">
          {badge}
        </span>
      </div>
      }
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
        <p className="mt-4 text-gray-100">{description}</p>
      </div>
      <div className="mb-8">
        <span className="text-5xl font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-yellow-600 to-orange-600">{price}</span>
        {/* <span className="text-xl font-medium text-purple-100">/mo</span> */}
      </div>

      <ul className="mb-8 space-y-4 text-gray-100">
        {List.map((el) => {
          return (
            <li key={uuidv4()} className="flex items-center">
            <svg className="h-6 w-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> </svg>
            <span>{el}</span>
          </li>
          )
        })}
      </ul>
      </div>

      
      {/* <a
        href="#"
        className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
      >
        Buy Now
      </a> */}

<BuyNowBtn href={href} pkg={pkg} company={company}/>


    </div>
  );
};

export default OnePrice;
