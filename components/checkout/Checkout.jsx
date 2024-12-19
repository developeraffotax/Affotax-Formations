"use client"

import React, { useEffect, useState } from "react";
import PackageHeader from "./PackageHeader";
import Basket from "./Basket";
import Form from "./Form/Form";

const Checkout = () => {

    const [selectedPackages, setSelectedPackages] = useState([])
    const [mainPkg, setMainPkg] = useState("")
    const [mainPkgPrice, setMainPkgPrice] = useState("")
    


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













  return (
    <>
    <div className="w-full container mx-auto px-40 max-xl:px-8">
   <PackageHeader />
   </div>
   
   
   <section className="w-full container mx-auto px-40 max-xl:px-8 flex flex-row justify-between items-start gap-12 pt-2 pb-16 " >


   <div className="w-[60%] flex flex-col justify-start items-start gap-2 " >
        <Form />
      </div>




      <div className="w-[40%] flex flex-col justify-start items-start gap-2 " >
      <Basket selectedPackages={selectedPackages}   selectedPkgName={mainPkg} selectedPkgPrice={mainPkgPrice}/>
      </div>









    </section>



   </>
    
  )
}

export default Checkout;
