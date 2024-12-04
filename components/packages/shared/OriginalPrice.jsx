import React from "react";

const OriginalPrice = ({title, price }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center  absolute bg-orange-500 bottom-[100%]   ">
      <div className="w-full   text-center  relative pt-0 pb-5">
        {" "}
        <span className="z-50 relative text-sm  ">{title}</span>{" "}
        <span className="w-full z-40 h-[50%] left-0  bottom-0 absolute bg-[#E7F4FF]  [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]"></span>{" "}
      </div>

      <div className="w-full    text-center  relative bg-[#E7F4FF] flex justify-center items-start">
      <span className="   text-center text-lg text-gray-500 line-through   font-semibold   -translate-y-[40%] z-50">£{price.toString()} </span>
      </div>
      
    </div>
  );
};

export default OriginalPrice;
