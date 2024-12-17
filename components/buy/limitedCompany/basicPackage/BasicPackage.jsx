"use client"

import React, { useEffect, useState } from "react";
import Recommendations from "./Recommendations";
import Basket from "./Basket";
import { data, SELECTED_PACKAGE_NAME, SELECTED_PACKAGE_PRICE } from "./data";

import { v4 as uuidv4 } from 'uuid';
import PackageHeader from "./PackageHeader";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiInformation2Line } from "react-icons/ri";








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


  const [storedValue, setStoredValue] = useState(null);

  // This effect will only run on the client side
  useEffect(() => {
    // Check if window is available (meaning we're in the browser)
    if (typeof window !== "undefined") {
      // Retrieve the value from localStorage
      const value = localStorage.getItem('company_name');
      if (value) {
        setStoredValue(value);
      }
    }
  }, []);









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















  return (
    <>
    
   <div className="w-full container mx-auto px-40 max-xl:px-8">
   <PackageHeader />
   </div>
    
    <section className="w-full container mx-auto px-40 max-xl:px-8 flex flex-row justify-between items-start gap-12 pt-2 pb-16 " >



      <div className="w-[60%] flex flex-col justify-start items-start gap-2 " >
        <h2 className="w-full text-2xl font-poppins border-b py-1  ">Customers also bought: </h2>
        <div className="p-4 bg-orange-100 text-orange-700 flex justify-start items-start gap-2 font-poppins">
          <span className="text-3xl  mt-1 "> <RiInformation2Line /></span>
          <h3 className="text-base ">After you checkout on this page, you will be able to enter your companydetails and select a business bank account (optional).</h3>
        </div>
            <Recommendations data={recommendations}  fromRecToBasketHandler={fromRecToBasketHandler}  />
      </div>





      <div className="w-[40%] flex flex-col justify-start items-start gap-2  ">

          {


storedValue &&

          <div className="w-full flex flex-row justify-start items-center gap-4 ">
          <h2 className="font-poppins text-xl py-1 ">Your Company Name:</h2>
          <h3 className="font-poppins text-xl flex gap-1 justify-start items-center text-cyan-500"><span className=" text-3xl  "><IoCheckmarkCircleOutline /></span>{storedValue}</h3>
          </div>
          }

          <Basket selectedPackages={selectedPackages} setSelectedPackages={setSelectedPackages}  fromBasketToRecHandler={fromBasketToRecHandler} selectedPkgName={SELECTED_PACKAGE_NAME} selectedPkgPrice={SELECTED_PACKAGE_PRICE}/>
      </div>




      
  </section></>
  )
};

export default BasicPackage;
