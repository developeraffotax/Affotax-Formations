"use client"

import { Alert, Button, Checkbox } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import TrustPaymentsImg from "@/public/trustPayments.png"

const TableRow = ({ pkgName, pkgPrice,  id,  }) => {
  return (
    <tr>
      <td className="py-2  ">{pkgName}</td>

      <td className="py-2 px-8 max-2xl:px-4   ">
        {/* <button
          onClick={() => fromBasketToRecHandler(id)}
          className="text-xl bg-gray-300 rounded-md text-white p-1 hover:bg-gray-400 active:scale-95 transition-all "
        >
          <RxCross2 />
        </button> */}
      </td>

      <td className="py-2 text-end ">£{pkgPrice}</td>
    </tr>
  );
};





const Basket = ({ selectedPackages, selectedPkgName, selectedPkgPrice, tPriceWithoutTax, setTPriceWithoutTaxPrice, orderRef}) => {


 // const [netPrice, setNetPrice] = useState('')



  const [isSelected, setIsSelected] = useState(false)
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const router = useRouter();






    useEffect(() => {

        // if(selectedPackages?.length === 0) {
        //   return notFound();
          
        // }

      

      setTPriceWithoutTaxPrice((prev) => {
          return selectedPackages?.reduce((accumulator, currentValue) => {


            const sum = +accumulator + +currentValue.price;
            return sum.toFixed(2)
  
  
        }, selectedPkgPrice).toString()

        })










    }, [selectedPackages])










  return (
    <div className="w-full  font-poppins border-4  border-orange-400  ">

      <div className="w-full p-4">
      <h3 className="text-xl ">Your Basket</h3>

      <table className="w-full ">
        <thead>
          <tr className="   border-b ">
            <td className="py-2">Item</td>

            <td className="py-2 text-end "> </td>

            <td className="py-2 px-3 ">Price</td>
          </tr>
        </thead>

        <tbody className="">
          <tr>
            <td className="py-2">{selectedPkgName}</td>

            <td className="py-2  px-4"> </td>

            <td className="py-2 text-end ">£{selectedPkgPrice}</td>
          </tr>

          {selectedPackages?.map((el) => {
            return (
              <TableRow key={el.id} pkgName={el.name} pkgPrice={el.price} id={el.id} />
            );
          })}







          <tr className="border-t">
            <td className="pt-2 pb-1  "></td>

            <td className="pt-2 pb-1  px-4 text-end ">Net: </td>

            <td className="pt-2 pb-1 text-end ">£{tPriceWithoutTax}</td>
          </tr>

          {/* <tr>
            <td className="pt-1 pb-2  "></td>

            <td className="pt-1 pb-2  px-4 text-end ">VAT: </td>

            <td className="pt-1 pb-2 text-end ">£{((20/100) * +tPriceWithoutTax).toFixed(2).toString()}</td>
          </tr> */}




          <tr className="border-t">
            <td className="pb-2 pt-4  "></td>

            <td className="pb-2 pt-4  px-2 text-nowrap text-end font-semibold text-xl text-orange-500 " >Order Total: </td>

            <td className="pb-2 pt-4 text-end font-semibold  text-xl text-orange-500 ">£{(+tPriceWithoutTax).toFixed(2).toString() }</td>
            {/* <td className="pb-2 pt-4 text-end font-semibold  text-xl text-orange-500 ">£{(((20/100) * +tPriceWithoutTax) + +tPriceWithoutTax).toFixed(2).toString() }</td> */}
          </tr>


        </tbody>
      </table>


      </div>


      <div className="w-full flex flex-col justify-center items-center gap-2    bg-gray-200 border-t    p-4">
      


      <div className="w-full flex flex-col justify-center items-center gap-1 text-sm">
            <h5>Order reference: #{orderRef}</h5>
            <h5>Merchant name: Affotax Formations </h5>
            </div>



            <div className="w-full flex flex-col justify-center items-center gap-1 ">
                <span>Powered by:</span>
              <Image src={TrustPaymentsImg} alt="Trust Payments Icon" width={200}/>
            </div>













      </div>



     



     

    </div>
  );
};

export default Basket;
