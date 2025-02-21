"use client"

import React, { useState } from "react";
import ListIcon from "./ListIcon";

const MobilePackage = ({title, price, description  , whatsIncludedArr=[],  children}) => {



    const [showIncludes, setShowIncludes] = useState(false)



  return (

        <div className="w-full border-1 flex flex-col justify-start items-start gap-4 p-4 shadow-md relative">

            <h2 className="text-3xl font-bold">{title}</h2>

            <span>
            <span  className="text-3xl font-bold text-orange-500    ">£{price}</span>  <span className="text-sm text-gray-700 ">+£50 Govt. Fee</span>
            </span>


            <p>{description}</p>

            
            {children}


            <button onClick={() => setShowIncludes(prev => !prev)} className="self-center text-orange-600 underline" >What's Included?</button>

            
              {
                showIncludes && 

                <ul className="w-full ">
                  {
                    whatsIncludedArr?.map((el) => {

                      return <li className="w-full flex flex-row justify-start items-center gap-0 border-b py-1 " key={el}><ListIcon />{el} </li>
                    })
                  }




                </ul>
              }








        </div>




  )
};

export default MobilePackage;
