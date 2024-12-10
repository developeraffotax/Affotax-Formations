import React from "react";

const PriceBox = ({title, content, price}) => {
  return (
    <li className="w-full p-8 flex justify-between gap-12 items-center border border-orange-500   shadow-md  shadow-black/10  ">

        <div className="flex flex-col justify-start items-start gap-4 ">
        <h2 className=" px-4 text-center bg-gradient-to-br from-orange-500   to-red-500   rounded-lg  text-white text-lg font-poppins py-1 shadow-md  shadow-black/10">{title}</h2>

<p className="w-full  text-black text-base font-Inter px-2">{content}</p>
        </div>


        
        <div className="  w-[30%]  flex flex-col justify-between items-end gap-4   px-2">
            <h3 className="font-semibold font-poppins text-gray-600  text-3xl ">£{price?.toString()}</h3>
            <button className="  shadow-md  shadow-black/10 bg-orange-500 text-white font-semibold font-poppins rounded-lg py-2 px-8 transition-all hover:shadow-lg  active:scale-95 ">Buy Now</button>
        </div>


    </li>
  )
};

export default PriceBox;
