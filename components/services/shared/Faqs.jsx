'use client'

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import React from "react";
import chev from '@/public/chev.png'





const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          <img
            className={`w-4 h-4 ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
            src={chev.src}
            alt="Chevron"
          />
        </>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left hover:bg-slate-100 ${
            isEnter && "bg-slate-200"
          }`
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out"
      }}
      panelProps={{ className: "p-4" }}
    />
  );


const Faqs = ({items}) => {









  return (
    <section className="w-full py-16">


        {/* <Header /> */}

        <div className="w-full container mx-auto  px-40 max-xl:px-8" >


        <div className="w-full flex justify-center  ">
        <h2 className=" text-black   rounded-3xl border  text-2xl max-lg:text-lg font-poppins font-semibold    py-1 pr-4 shadow-md  ">
          <span className="bg-[#002B5B]  text-white px-4 rounded-3xl py-1 shadow-md ">
        Frequently
        </span>
         {" "}
         <span className="     ">
          Asked Questions
         </span>
         
         </h2>
        </div>




        <Accordion className="py-0 mt-5 rounded-xl shadow-md border-t border-l border-r   overflow-hidden    font-Inter    ">
      {items.map(({ header, content }, i) => (
        <AccordionItem header={header} key={i} className=' border-b  w-full    ' buttonProps={{
            className: ({ isEnter }) =>
              `flex w-full p-4 text-left hover:bg-slate-100 ${
                isEnter && "bg-slate-200"
              }`
          }}
          contentProps={{
            className: "transition-height duration-200 ease-out text-sm"
          }}>
          <div dangerouslySetInnerHTML={{__html: content}} className="custom-list text-sm ">

          </div>
        </AccordionItem>
      ))}
    </Accordion>

















        </div>
    </section>
  )
};

export default Faqs;
