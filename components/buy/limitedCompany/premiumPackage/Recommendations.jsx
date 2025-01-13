"use client"

import React, { useEffect } from "react";

import Recommendation from "./Recommendation";


const Recommendations = ({data, fromRecToBasketHandler, }) => {




    const shouldBeBordered = (item, index) => {

      if (index < data.length - 1 && item.category !== data[index + 1].category) {
        return true; 
      }
      return false;
    





    }









  return (
    <section className="w-full ">



<ul  className="w-full flex flex-col justify-start items-start gap-4  py-2 ">
      {



              data.map((el, index, array) => {
              
                return <Recommendation key={el.id} id={el.id} name={el.name} desc={el.desc} price={el.price} info={el.info} onAdd={fromRecToBasketHandler} isBorder={shouldBeBordered(el,index)}/>







            })
      }






  </ul>


















    </section>
  )
};

export default Recommendations;
