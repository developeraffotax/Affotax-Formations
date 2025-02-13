'use client'

import React from "react";
import OnePrice from "./OnePrice";
import { v4 as uuidv4 } from 'uuid';


 



const PRICING_ARRAY = [
  // {
  //   name: 'Digital',
  //   description: 'Perfect for individuals and small teams.',
  //   badge: '',
  //   price: '£59',
  //   List: ['LTD Company', 'Digital Company Documents', '£50 Companies House Fee Included'],
    
  // },

  {
    name: 'Basic',
    description: 'Perfect for individuals and small teams.',
    badge: '',
    price: '£49',
    href: '/buy/packages/limited-company/basic-package',
    pkg: 'basic-package',
    company: 'limited-company',
    List: ['Limited Company', 'Digital Company Documents', 'Tax Consultation (30min)',],
    
  },

  {
    name: 'Standard',
    description: 'Perfect for individuals and small teams.',
    badge: 'Most-popular',
    price: '£99',
    href: '/buy/packages/limited-company/standard-package',
    pkg: 'standard-package',
    company: 'limited-company',
    List: ['Limited Company', 'Digital Company Documents', 'Tax Consultation (30min)', 'London Registered Address', 'London Service Address'],    
  },

  {
    name: 'Premium',
    description: 'Perfect for individuals and small teams.',
    badge: '',
    price: '£199',
    href: '/buy/packages/limited-company/premium-package',
    pkg: 'premium-package',
    company: 'limited-company',
    List: ['Limited Company', 'Digital Company Documents', 'Tax Consultation (30min)', 'London Registered Address', 'London Service Address', 'London Trading Address', 'Confirmation Statement Service', 'PAYE Registration'],       
  },

  {
    name: 'All-Inclusive',
    description: 'Perfect for individuals and small teams.',
    badge: 'Best-Selling',
    price: '£399',
    href: '/buy/packages/limited-company/all-inclusive-package',
    pkg: 'all-inclusive-package',
    company: 'limited-company',
    List: ['Limited Company', 'Digital Company Documents', 'Tax Consultation (30min)', 'London Registered Address', 'London Service Address', 'London Trading Address', 'Confirmation Statement Service', 'PAYE Registration', 'Full Company Secreterial Service (Worth £149)', 'Company Accounts (Worth £99)', 'Company Tax Return (Worth £249)'],       
    
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






        <div className="grid grid-cols-4 max-xl:grid-cols-1 gap-8 max-xl:px-12 ">

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
