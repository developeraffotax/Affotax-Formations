"use client"

import { Alert, Button, Checkbox } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import TotalPriceRow from "../../TotalPriceRow";

const TableRow = ({ pkgName, pkgPrice, fromBasketToRecHandler, id, btnDisable }) => {
  return (
    <tr>
      <td className="py-2  ">{pkgName}</td>

      <td className="py-2 px-8 max-2xl:px-4   ">
         {!btnDisable && <button
                  disabled={btnDisable}
                  onClick={() => fromBasketToRecHandler(id)}
                  className="text-xl bg-gray-300 rounded-md text-white p-1 hover:bg-gray-400 active:scale-95 transition-all "
                >
                 {<RxCross2 />}
                </button>}
      </td>

      <td className="py-2 text-end ">£{pkgPrice}</td>
    </tr>
  );
};





const Basket = ({ selectedPackages, fromBasketToRecHandler, selectedPkgName, selectedPkgPrice}) => {


  const [netPrice, setNetPrice] = useState('')



  const [isSelected, setIsSelected] = useState(false)
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const router = useRouter();






    useEffect(() => {

      

      

        setNetPrice((prev) => {
          return selectedPackages.reduce((accumulator, currentValue) => {


            const sum = +accumulator + +currentValue.price;
            return sum.toFixed(2)
  
  
        }, selectedPkgPrice).toString()

        })










    }, [selectedPackages.length])








    const checkoutBtnHandler  = (e) => {
       
          if (!isSelected) {
            setIsAlertVisible(true);
           
            return;

          } else {



            localStorage.setItem('selected_packages', JSON.stringify(selectedPackages))
            localStorage.setItem('selected_pkg_name', JSON.stringify(selectedPkgName))
            localStorage.setItem('selected_pkg_price', JSON.stringify(selectedPkgPrice))

            

















            router.push('/checkout');




          }




    }





    const checkBoxHandler = () => {


      setIsSelected(prev => !prev);
      setIsAlertVisible(false)
      





    }







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
              <TableRow key={el.id} pkgName={el.name} pkgPrice={el.price} id={el.id} fromBasketToRecHandler={fromBasketToRecHandler} btnDisable={el?.btnDisable}/>
            );
          })}







          <tr className="border-t">
            <td className="pt-2 pb-1  "></td>

            <td className="pt-2 pb-1  px-4 text-end ">Net: </td>

            <td className="pt-2 pb-1 text-end ">£{netPrice}</td>
          </tr>

          {/* <tr>
            <td className="pt-1 pb-2  "></td>

            <td className="pt-1 pb-2  px-4 text-end ">VAT: </td>

            <td className="pt-1 pb-2 text-end ">£{((20/100) * +netPrice).toFixed(2).toString()}</td>
          </tr> */}




          <tr className="border-t">
            <td className="py-2  "></td>

            <td className="py-2  px-2 text-nowrap text-end font-semibold text-xl text-orange-500 " >Order Total: </td>

            <TotalPriceRow netPrice={netPrice}/>
          </tr>


        </tbody>
      </table>


      <div className="w-full flex flex-row justify-start items-start gap-0 cursor-pointer my-3">
      <Checkbox isSelected={isSelected} onValueChange={checkBoxHandler} className=" ">
     
     </Checkbox>

     <span className="text-sm " onClick={checkBoxHandler}>
     I agree to the Terms and Conditions & Privacy Policy
     </span>

      </div>



     <div className="w-full flex justify-end items-center mb-4">
     
    

     <Button color="secondary" className="px-6  " onPress={checkoutBtnHandler}>Checkout</Button>
     
     
   
     </div>



     {
      isAlertVisible && ( <Alert className="" color="warning"   isVisible={isAlertVisible} title={"You must agree to the terms and conditions."} variant="faded" onClose={() => setIsAlertVisible(false)} />)
     }

    </div>
  );
};

export default Basket;
