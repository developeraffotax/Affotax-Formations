"use client"

import React, { useEffect, useState } from "react";
import Recommendations from "./Recommendations";
import Basket from "./Basket";
import { data, SELECTED_PACKAGE_NAME, SELECTED_PACKAGE_PRICE } from "./data";

import { v4 as uuidv4 } from 'uuid';
import PackageHeader from "./PackageHeader";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiInformation2Line } from "react-icons/ri";

import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";




const AllInclusivePackage = () => {




    const [recommendations, setRecommendations] = useState(data);

    const [selectedPackages, setSelectedPackages] = useState([{
          name: `Pre-Submission Review (we check your company details to avoid mistakes) `,
          desc: `Registered Office Address London - Boost Your Privacy, Legitimacy and Brand Image Today`,
          id: uuidv4(),
          info: `coming soon`,
          price: `4.99`,
          category: 'address',
          listIndex: 100,
          isBorder: false,
          btnDisable: false
          
      },
      {
        name: `Companies House Fee`,
        desc: `Registered Office Address London - Boost Your Privacy, Legitimacy and Brand Image Today`,
        id: uuidv4(),
        info: `coming soon`,
        price: `50`,
        category: '',
        listIndex: 101,
        isBorder: false,
        btnDisable: true
        
    }]);


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






          <div className="border p-4 mt-4 ">

              <h3 className="text-lg font-poppins mb-2 ">Check your country is eligible</h3>

              <p className="text-base font-Inter ">
              We can register companies for customers who are resident in most countries in the world. Check if your country is eligible.
              </p>



          </div>



          <div className="border p-4 mt-4 ">

              <h3 className="text-lg font-poppins mb-2 ">Money Back Guarantee</h3>

              <p className="text-base font-Inter ">
              If you pay for your order and then decide you do not want to proceed, we will return your money in full, in accordance with our Terms and Conditions.
              </p>



          </div>




          <div className="border p-4 mt-4 w-full">

          <h3 className="text-xl font-poppins mb-2 ">Need Help?</h3>

          <div className="flex justify-start items-center gap-2 "><span className="text-xl text-orange-400"><MdOutlineWhatsapp /></span> <h4 className="font-poppins ">020 8144 6811</h4></div>
          <div className="flex justify-start items-center gap-2 "><span className="text-xl text-orange-400"><MdOutlineEmail /></span> <h4 className="font-poppins ">info@affotax.com</h4></div>


          </div>





          <div className="border p-4 mt-4 w-full ">

          <h3 className="text-lg font-poppins mb-2 ">What happens next? </h3>

          <ul className="text-sm font-Inter list-none pl-0">

            <li className="mb-2 flex justify-start items-start gap-1"><span className="text-xl text-gray-700 "><MdKeyboardDoubleArrowRight /></span>After checkout, you will be asked to enter your new company details and you can select a business bank account (optional). </li>
            <li className="mb-2 flex justify-start items-start gap-1"><span className="text-xl text-gray-700 "><MdKeyboardDoubleArrowRight /></span> Our staff will then send your new company application to Companies House for approval. </li>
            <li className="mb-2 flex justify-start items-start gap-1"><span className="text-xl text-gray-700 "><MdKeyboardDoubleArrowRight /></span> Most companies are registered within 24 hours. </li>






          </ul>



          </div>





      </div>




      
  </section></>
  )
};

export default AllInclusivePackage;
