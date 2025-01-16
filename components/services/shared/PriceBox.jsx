"use client"

import { useRouter } from "next/navigation";
import React from "react";

const PriceBox = ({title, content, includesList, price, serviceName}) => {


    const router = useRouter()

    const buyNowHandler = () => {

            //localStorage.setItem('selected_packages', JSON.stringify(selectedPackages))
            localStorage.setItem('selected_service_name', JSON.stringify(serviceName))
            localStorage.setItem('selected_packages', JSON.stringify([]))
            localStorage.setItem('selected_pkg_name', JSON.stringify(title))
            localStorage.setItem('selected_pkg_price', JSON.stringify(price))

            //router.push(`/buy/service?service_name=${serviceName}&package_name=${title}`)
            router.push(`/checkout`)

    }



  return (
    <li className="w-full p-8 border border-orange-500 space-y-4 shadow-sm  shadow-black/10  ">

        <h2 className="w-full text-center bg-orange-500 text-white text-lg font-poppins py-1">{title}</h2>

        <p className="w-full  text-black text-base font-Inter px-2">{content}</p>


        <div className="w-full ">
        <span className="     bg-[#002B5B] text-white font-poppins text-sm   rounded-lg  py-1 px-4 ">Package Includes: </span>
        </div>
        <ul className="w-full list-disc text-sm ml-5 pb-2">

            {
                includesList?.map((el) => {
                    return (
                        <li key={el + 'pkg'} className="mb-1">{el}</li>
                    )
                })
            }

        </ul>

        <div className="w-full text-end flex justify-between gap-4  items-center px-2">
            <h3 className="font-semibold font-poppins text-gray-600  text-3xl ">£{price?.toString()}</h3>
            <button onClick={buyNowHandler} className=" bg-orange-500 text-white font-semibold font-poppins rounded-lg py-2 px-8 transition-all hover:shadow-lg  active:scale-95 ">Buy Now</button>
        </div>


    </li>
  )
};

export default PriceBox;
