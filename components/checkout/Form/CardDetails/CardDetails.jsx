"use client"

import { Input, Radio, RadioGroup, Select, SelectItem } from "@heroui/react";
import React, { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "../Icons";
import { CustomRadio } from "./CustomRadio";

import Img1 from "@/public/checkout/1.png"
import Img2 from "@/public/checkout/2.png"
import Img3 from "@/public/checkout/3.png"
import Img4 from "@/public/checkout/4.png"
import Img5 from "@/public/checkout/5.png"
import Img6 from "@/public/checkout/6.png"
import Img7 from "@/public/checkout/7.png"
import Img8 from "@/public/checkout/8.png"
import Img9 from "@/public/checkout/9.png"
import Cvv from "@/public/checkout/cvv.png"
import Image from "next/image";
import SquareForm from "./SquareFrom/SquareForm";
import SavedCards from "./SavedCards";



const LOGOS = [
  {
    name: 'VISA CREDIT',
    imgSrc: Img1
  },
  {
    name: 'VISA ELECTRON',
    imgSrc: Img2
  },
  {
    name: 'VISA DEBIT',
    imgSrc: Img3
  },
  {
    name: 'VISA PURCHASING',
    imgSrc: Img4
  },
  {
    name: 'VPAY',
    imgSrc: Img5
  },
  {
    name: 'MAESTRO',
    imgSrc: Img6
  },
  {
    name: 'MASTERCARD',
    imgSrc: Img7
  },

  {
    name: 'MASTERCARD DEBIT',
    imgSrc: Img8
  },
  {
    name: 'AMERICAN EXPRESS',
    imgSrc: Img9
  },
  
]


















const CardDetails = ({ register, errors, outerFormSubmitHandler, user}) => {
  //   const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => setIsVisible(!isVisible);

  const [paymentMethod, setPaymentMethod] = useState('new');

    




  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 p-4 border ">
      <div className="w-full bg-gray-100 px-4 py-3   ">
        <h2 className="w-full text-2xl font-poppins text-cyan-500  ">
          Card Details
        </h2>
      </div>

      <div className="w-full font-poppins">


      <RadioGroup  label="Select Card Type: "  orientation="horizontal" classNames={{
        base: "flex flex-col "
      }}>
        
        {
          LOGOS.map((el) => {
            return <CustomRadio key={el.name}   value={el.name}> <Image src={el.imgSrc} alt={el.name}  /> </CustomRadio>
          })
        }
      
    </RadioGroup>



        
      </div>

      {
        user && <RadioGroup label="Select Payment Method" value={paymentMethod} onValueChange={setPaymentMethod}>
        <Radio value="old">Use existing card</Radio>
        <Radio value="new">Use a new card</Radio>
        
      </RadioGroup>
      }



      {
        paymentMethod === 'old' && <div className="w-full ">
        <SavedCards outerFormSubmitHandler={outerFormSubmitHandler}/>
    </div>
      }


      {
        paymentMethod === 'new' && <div className="w-full ">
        <SquareForm errors={errors} outerFormSubmitHandler={outerFormSubmitHandler}/>
    </div>
      }


      
    </div>
  );
};

export default CardDetails;
