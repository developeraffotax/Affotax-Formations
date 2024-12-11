'use client'

import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ServicesMenu = ({className, onClick}) => {
  return (
    <section className={className}>


<div className="w-full py-16 px-8 grid grid-cols-3  container mx-auto font-Inter ">



<ul className="flex flex-col justify-start items-start gap-2"> 
    <h3 className="text-2xl font-poppins font-semibold text-orange-500 mb-3 border-b-2 border-orange-500 py-1 w-full ">Accounting Services</h3>
    {/* <Link onClick={onClick} href="/service/companies-house-registration" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Companies House Registration - from £4.99</Link> */}
   <Link onClick={onClick} href="/service/confirmation-statement-filing" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Confirmation Statement Filing - £59</Link>
   <Link onClick={onClick} href="/service/director-appointment-and-resignation" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Director Appointment & Resignation - £19</Link>
   <Link onClick={onClick} href="/service/company-name-change" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Company Name Change - £69</Link>
   <Link onClick={onClick} href="/service/company-dissolution" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Company Dissolution - £75</Link>
   <Link onClick={onClick} href="/service/issue-and-transfer-of-shares" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Issue & Transfer of Shares - £79</Link>
   <Link onClick={onClick} href="/service/dormant-company-accounts" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Dormant Company Accounts - £69.99</Link>
   <Link onClick={onClick} href="/service/company-secretary-service" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Company Secretary Service - £149</Link>
</ul>

<ul className="flex flex-col justify-start items-start gap-2"> 
    <h3 className="text-2xl font-poppins font-semibold text-orange-500 mb-3 border-b-2 border-orange-500 py-1 w-full ">Address Services</h3>
    <Link onClick={onClick} href="/service/registered-office-address" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Registered Office Address - £35/yr</Link>
    <Link onClick={onClick} href="/service/director-service-address" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Director Service Address - £24/yr</Link>
    {/* <Link onClick={onClick} href="/service/london-virtual-office-address" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> London Virtual Office Address - £99/yr</Link> */}
    <Link onClick={onClick} href="/service/non-uk-resident-business-address" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Non-UK Resident Business Address - £99/yr</Link>
    <Link onClick={onClick} href="/service/annual-renewals" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl "/> Annual Renewals</Link>
    
</ul>

<ul className="flex flex-col justify-start items-start gap-2"> 
    <h3 className="text-2xl font-poppins font-semibold text-orange-500 mb-3 border-b-2 border-orange-500 py-1 w-full ">Legal Services</h3>
    <Link onClick={onClick} href="/service/vat-registration" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> VAT Registration - £29</Link>
    <Link onClick={onClick} href="/service/paye-registration" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> PAYE Registration - £29</Link>
    {/* <Link onClick={onClick} href="/service/business-phone-number" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Business Phone Number - £99/yr</Link>
    <Link onClick={onClick} href="/service/accountancy-service" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Accountancy Service - £83.25/mo</Link>
    <Link onClick={onClick} href="/service/data-protection-registration" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Data Protection Registration - £69</Link> */}
    <Link onClick={onClick} href="/service/apostilled-documents" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Apostilled Documents - from £99</Link>
    <Link onClick={onClick} href="/service/certificate-of-good-standing" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> Certificate of Good Standing - £69</Link>
    {/* <Link onClick={onClick} href="/service/gdpr-and-legal-compliance-package" className="flex justify-start items-center hover:text-orange-500 "><MdKeyboardArrowRight className="text-xl"/> GDPR and Legal Compliance Package - £39</Link> */}
</ul>





</div>


    </section>
  )
};

export default ServicesMenu;
