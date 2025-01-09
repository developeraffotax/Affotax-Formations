"use client"

import React, { useEffect, useState } from "react";
import PackageHeader from "./PackageHeader";
import Basket from "./Basket";
import Form from "./Form/Form";

const Checkout = () => {

  const [orderRef, setOrderRef] = useState("")

    const [selectedPackages, setSelectedPackages] = useState([])
    const [mainPkg, setMainPkg] = useState("")
    const [mainPkgPrice, setMainPkgPrice] = useState("")
    
    const [tPriceWithoutTax, setTPriceWithoutTaxPrice] = useState('');

    const [addressObj, setAddressObj] = useState({
      "name_or_number": '',
      "street": '',
      "locality": '',
      "town": '',
      "county": '',
      "postcode": '',
      "country": ''
    })

    useEffect(() => {

        if (typeof window !== "undefined") {
            // Retrieve the value from localStorage
            const selected_packages = localStorage.getItem('selected_packages');
            const selected_pkg_name = localStorage.getItem('selected_pkg_name');
            const selected_pkg_price = localStorage.getItem('selected_pkg_price');
           
            setSelectedPackages(JSON.parse(selected_packages))
            setMainPkg(JSON.parse(selected_pkg_name))
            setMainPkgPrice(JSON.parse(selected_pkg_price))


          }


    }, [])


    useEffect(() => {

      function generateRandomNumber() {
        // Get current time in milliseconds
        const timestamp = new Date().getTime();
        
        // Use modulus to ensure the number is 6 digits
        const randomNum = timestamp % 10000000;
        
        // If the result is less than 6 digits, pad with leading zeros
        const sevenDigitNumber = randomNum.toString().padStart(7, '0');


        
        return sevenDigitNumber;
    }



    if(localStorage.getItem("order_ref")) {
      setOrderRef(localStorage.getItem("order_ref"));
    } else {
      const sevenDigitNumber = generateRandomNumber();

      localStorage.setItem("order_ref", sevenDigitNumber)
      setOrderRef(sevenDigitNumber);
    }



   



    }, [])









  return (
    <>
    <div className="w-full container mx-auto px-40 max-xl:px-8">
   <PackageHeader />
   </div>
   
   
   <section className="w-full container mx-auto px-40 max-xl:px-8 flex flex-row justify-between items-start gap-12 pt-2 pb-16 " >


   <div className="w-[60%] flex flex-col justify-start items-start gap-2 " >
        <Form selectedPackages={selectedPackages} mainPkg={mainPkg} mainPkgPrice={mainPkgPrice} tPriceWithoutTax={tPriceWithoutTax} addressObj={addressObj} setAddressObj={setAddressObj} orderRef={orderRef}/>
      </div>




      <div className="w-[40%] flex flex-col justify-start items-start gap-2 " >
      <Basket selectedPackages={selectedPackages}   selectedPkgName={mainPkg} selectedPkgPrice={mainPkgPrice} tPriceWithoutTax={tPriceWithoutTax} setTPriceWithoutTaxPrice={setTPriceWithoutTaxPrice} orderRef={orderRef} />
      </div>









    </section>



   </>
    
  )
}

export default Checkout;
