import React from "react";

const PriceBox = ({title, content, includesList}) => {
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

        <div className="w-full text-end ">
            <button className=" bg-orange-500 text-white font-semibold font-poppins rounded-lg py-2 px-8 transition-all hover:shadow-lg  active:scale-95 ">Buy Now</button>
        </div>


    </li>
  )
};

export default PriceBox;
