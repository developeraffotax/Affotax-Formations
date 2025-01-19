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

  const [address, setAddress] = useState({
    name_or_number: '',
    street: '',
    locality: '',
    town: '',
    county: '',
    postcode: '',
    country: '',
  })









  const [directors, setDirectors] = useState({
    person: {

        title: '',
        first_Name: '',
        middle_name: '',
        last_Name: '',
        date_of_birth: '',
        nationality: '',
        occupation: '',
        country_of_residence: '',




    },

    serviceAddress: {
      name_or_number: '',
      street: '',
      locality: '',
      town: '',
      county: '',
      postcode: '',
      country: '',


    }
  })




  // const [companyAddress, setCompanyAddress] = useState({
    
  // })


  const continueBtnHandler = (nextStep, nextActive) => {

    return () => {
      setCurrentStep(nextStep)
      setActivePage(nextActive)
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


        


       {(activePage === 'address') &&  <CompanyAddress address={address} setAddress={setAddress} continueBtnHandler={continueBtnHandler(1,'directors') } />}
       {(activePage === 'directors') &&  <Directors directors={directors} setDirectors={setDirectors} continueBtnHandler={continueBtnHandler(2,'directors') }/>}








       



       
    </section>
   </div>
  
  
  
  
  </>
};

export default CompanyForm;
