'use client'

import React from "react";
import OnePrice from "./OnePrice";
import { v4 as uuidv4 } from 'uuid';


const PRICING_ARRAY = [
  {
    name: 'Digital',
    description: 'Perfect for individuals and small teams.',
    badge: '',
    price: '£59',
    List: ['LTD Company', 'Digital Company Documents', '£50 Companies House Fee Included'],
    
  },

  {
    name: 'Basic',
    description: 'Perfect for individuals and small teams.',
    badge: 'Best-Selling',
    price: '£69',
    List: ['LTD Company', 'Digital Company Documents', '£50 Companies House Fee Included', 'Confirmation Statement Service' ,'London Service Address','Confirmation Statement Service'],
    
  },

  {
    name: 'Standard',
    description: 'Perfect for individuals and small teams.',
    badge: 'Most-popular',
    price: '£79',
    List: ['LTD Company', 'Digital Company Documents', '£50 Companies House Fee Included', 'Confirmation Statement Service' ,'London Service Address','Confirmation Statement Service', 'UK Accountant Consultation- (30min)'],
    
  },

  {
    name: 'Premium',
    description: 'Perfect for individuals and small teams.',
    badge: '',
    price: '£89',
    List: ['LTD Company', 'Digital Company Documents', '£50 Companies House Fee Included', 'Confirmation Statement Service' ,'London Service Address','Confirmation Statement Service', 'UK Accountant Consultation- (30min)', 'London Business Address'],
    
  },

  {
    name: 'All-Inclusive',
    description: 'Perfect for individuals and small teams.',
    badge: '',
    price: '£149',
    List: ['LTD Company', 'Digital Company Documents', '£50 Companies House Fee Included', 'Confirmation Statement Service' ,'London Service Address','Confirmation Statement Service', 'UK Accountant Consultation- (30min)', 'London Business Address', ' Annual Tax filing Worth (£249)'],
    
  },
]


const Pricing = () => {








  return (
    <section className="w-full pt-20 pb-20 max-xl:pt-12 max-xl:pb-20 mesh7 font-Inter  ">
      <div className="w-full container mx-auto ">

        <div className=" w-full flex flex-col items-center  justify-center pt-12 pb-12 max-xl:pt-0 max-xl:pb-0 ">
        <h2 className="w-full text-center text-5xl text-white font-semibold mb-6 font-poppins max-xl:text-2xl  max-xl:text-center max-xl:px-12 ">Choose a UK Company Formation Package </h2>
        <p className="w-full text-center text-base text-white max-w-xl mb-4 max-xl:text-center max-xl:px-12 max-xl:hidden">Choose a company registration package that suits your needs and start your new business today.We have a range of packages which includes the company annual tax filings.</p>
        </div>






        <div className="grid grid-cols-5 max-xl:grid-cols-1 gap-8 max-xl:px-12 ">

          {
              PRICING_ARRAY.map((price) => {
                return <OnePrice key={uuidv4()} {...price} />
              })
          }














        </div>



























      </div>
    </section>
  )
};

export default Pricing;
