'use client'

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import React from "react";
import chev from '@/public/chev.png'
import Header from "./Header";
import { items } from "./data";




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


const Faqs = () => {









  return (
    <section className="w-full ">


        <Header />

        <div className="w-full container mx-auto">







        <Accordion className="py-8 px-52 max-2xl:px-36 max-xl:px-4 font-Inter    ">
      {items.map(({ header, content }, i) => (
        <AccordionItem header={header} key={i} className=' border-b  w-full    ' buttonProps={{
            className: ({ isEnter }) =>
              `flex w-full p-4 text-left hover:bg-slate-100 ${
                isEnter && "bg-slate-200"
              }`
          }}
          contentProps={{
            className: "transition-height duration-200 ease-out"
          }}>
          {content}
        </AccordionItem>
      ))}
    </Accordion>

















        </div>
    </section>
  )
};

export default Faqs;
