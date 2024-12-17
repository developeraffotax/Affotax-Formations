import React from "react";
import { RiInformation2Line } from "react-icons/ri";




const Recommendation = ({name, desc, price, info, onAdd, id, isBorder}) => {


  console.log(isBorder)

  return (



        <li className={`w-full flex justify-between items-start gap-6  ${isBorder && 'border-b pb-4'}`}>
            <div className="w-full flex flex-col justify-start items-start gap-1 max-w-md">
                <h2 className="w-full font-poppins text-lg  ">{name}</h2>
                <p className="w-full font-Inter text-sm  max-w-sm">{desc}</p>
            </div>

            <span className="text-2xl text-gray-500 mt-2 "> <RiInformation2Line /></span>


            <h3 className=" font-poppins text-lg mt-2 ">£{price}</h3>

            <button className=" px-3 p-1 bg-orange-400 shadow-sm  text-white font-poppins rounded-md mt-1 hover:bg-orange-500 active:scale-95 transition-all " onClick={() => onAdd(id)}>Add</button>


        </li>


  )
};

export default Recommendation;
