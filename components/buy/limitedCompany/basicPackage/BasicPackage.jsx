"use client"

import React, { useState } from "react";
import Recommendations from "./Recommendations";
import Basket from "./Basket";
import { data } from "./data";

import { v4 as uuidv4 } from 'uuid';








const BasicPackage = () => {




    const [recommendations, setRecommendations] = useState(data);

    const [selectedPackages, setSelectedPackages] = useState([{
      name: `Pre-Submission Review (we check your company details to avoid mistakes) `,
      desc: `Registered Office Address London - Boost Your Privacy, Legitimacy and Brand Image Today`,
      id: uuidv4(),
      info: `coming soon`,
      price: `4.99`,
      category: 'address',
      listIndex: 100,
      isBorder: false
      
  },]);







const fromRecToBasketHandler = (id) => {

  

// Update the Basket

    setSelectedPackages((prev) => {
 const idPackage = recommendations.find(el => el.id === id)

    const newArr = [...prev]
    newArr.push(idPackage)
      

      return newArr
    })








// Update the Recommendations



    setRecommendations(prev => [...prev].filter(el => el.id !== id))


}







































const fromBasketToRecHandler = (id) => {

  

  // Update the Basket
  
  setSelectedPackages(prev => [...prev].filter(el => el.id !== id))
  
  
  
  
  
  
  
  
  // Update the Recommendations

  const packageFound = data.find(el => el.id === id);

  if(!packageFound) {
    return;
  }

  
  setRecommendations((prev) => {

    const newArr = [...prev];

    newArr.push(packageFound);


    newArr.sort((a,b) => {
      return a.listIndex - b.listIndex
    })

    return newArr








  })
  
  
  }















  return <section className="w-full container mx-auto px-40 max-xl:px-8 flex flex-row justify-between items-start gap-12 py-16 " >



      <div className="w-[60%] flex flex-col justify-start items-start gap-2 " >
        <h2 className="w-full text-xl font-poppins border-b py-1  ">Customers also bought: </h2>
            <Recommendations data={recommendations}  fromRecToBasketHandler={fromRecToBasketHandler}  />
      </div>





      <div className="w-[40%] ">
          <Basket selectedPackages={selectedPackages} setSelectedPackages={setSelectedPackages}  fromBasketToRecHandler={fromBasketToRecHandler} />
      </div>





  </section>
};

export default BasicPackage;
