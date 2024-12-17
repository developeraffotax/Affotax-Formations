"use client"

import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const TableRow = ({ pkgName, pkgPrice, fromBasketToRecHandler, id }) => {
  return (
    <tr>
      <td className="py-2  ">{pkgName}</td>

      <td className="py-2 px-8 max-2xl:px-5 ">
        <button
          onClick={() => fromBasketToRecHandler(id)}
          className="text-xl bg-gray-300 rounded-md text-white p-1 hover:bg-gray-400 active:scale-95 transition-all "
        >
          <RxCross2 />
        </button>
      </td>

      <td className="py-2 text-end ">£{pkgPrice}</td>
    </tr>
  );
};





const Basket = ({ selectedPackages, fromBasketToRecHandler, selectedPkgName, selectedPkgPrice}) => {


  const [netPrice, setNetPrice] = useState('')








    useEffect(() => {

      

      

        setNetPrice((prev) => {
          return selectedPackages.reduce((accumulator, currentValue) => {


            const sum = +accumulator + +currentValue.price;
            return sum.toFixed(2)
  
  
        }, selectedPkgPrice).toString()

        })










    }, [selectedPackages.length])















  return (
    <div className="w-full p-4 font-poppins border-4  border-orange-400  ">
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
              <TableRow key={el.id} pkgName={el.name} pkgPrice={el.price} id={el.id} fromBasketToRecHandler={fromBasketToRecHandler} />
            );
          })}







          <tr className="border-t">
            <td className="pt-2 pb-1  "></td>

            <td className="pt-2 pb-1  px-4 text-end ">Net: </td>

            <td className="pt-2 pb-1 text-end ">£{netPrice}</td>
          </tr>

          <tr>
            <td className="pt-1 pb-2  "></td>

            <td className="pt-1 pb-2  px-4 text-end ">VAT: </td>

            <td className="pt-1 pb-2 text-end ">£{((20/100) * +netPrice).toFixed(2).toString()}</td>
          </tr>




          <tr className="border-t">
            <td className="py-2  "></td>

            <td className="py-2  px-2 text-nowrap text-end font-semibold text-xl text-orange-500 " >Order Total: </td>

            <td className="py-2 text-end font-semibold  text-xl text-orange-500 ">£{(((20/100) * +netPrice) + +netPrice).toFixed(2).toString() }</td>
          </tr>


        </tbody>
      </table>
    </div>
  );
};

export default Basket;
