"use client"

import React, { useEffect, useState } from "react";
import Form from "./cmps/Address/Address";
import { useForm } from 'react-hook-form';

import CompanyAddress from "./cmps/Address/Address";
import RowSteps from "./RowSteps";
import Directors from "./cmps/Directors/Directors";

const CompanyForm = () => {

  const [currentStep, setCurrentStep] = useState(0)
  const [activePage, setActivePage] = useState('address')

  const [companyInfo, setCompanyInfo] = useState({
    company_name: '',
    company_suffix: 'LTD',

    sic_codes: [],
    registered_in: 'England & Wales',
     
  })



  const [address, setAddress] = useState({
    name_or_number: '',
    street: '',
    locality: '',
    town: '',
    county: '',
    postcode: '',
    country: '',
  })




console.log(address, )
console.log(companyInfo, )




  const [directors, setDirectors] = useState({


    person_title: '',
    person_first_name: '',
    person_middle_name: '',
    person_last_name: '',
    person_dob: '',
    person_nationality: '',
    person_occupation: '',
    person_country_of_residence: '',



    service_address_name_or_number: '',
    service_address_street: '',
    service_address_locality: '',
    service_address_town: '',
    service_address_county: '',
    service_address_postcode: '',
    service_address_country: '',
     



    residential_address_isSameAsService: false,
    residential_address_name_or_number: '',
    residential_address_street: '',
    residential_address_locality: '',
    residential_address_town: '',
    residential_address_county: '',
    residential_address_postcode: '',
    residential_address_country: '',







  })




  // const [companyAddress, setCompanyAddress] = useState({
    
  // })


  const gotoBtnHandler = (step, active) => {

    return () => {
      setCurrentStep(step)
      setActivePage(active)
    }

  }

  
  






  






  return <>
   <div className="w-full container mx-auto px-40 max-xl:px-20 max-lg:px-8 ">
   <section>
   <RowSteps
      currentStep={currentStep}  
      defaultStep={0}
      steps={[
        {
          title: "Registered Office",

        },
        {
          title: "Directors",
        },
        {
          title: "Share Holders",
        },

        {
          title: "Secretaries",
        },

        {
          title: "Summary",
        },
      ]}
    />
    </section>
  
  
    <section className="    w-[60%] py-20  ">


        


       {(activePage === 'address') &&  <CompanyAddress companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} address={address} setAddress={setAddress} continueBtnHandler={gotoBtnHandler(1,'directors') }   />}
       {(activePage === 'directors') &&  <Directors directors={directors} setDirectors={setDirectors} continueBtnHandler={gotoBtnHandler(2,'directors') }  goBackBtnHandler={gotoBtnHandler(1,'address')} />}








       



       
    </section>
   </div>
  
  
  
  
  </>
};

export default CompanyForm;
