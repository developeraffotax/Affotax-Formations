"use client"

import React, { Suspense, useContext, useEffect, useState } from "react";
import Form from "./cmps/Address/Address";
import { useForm } from 'react-hook-form';

import CompanyAddress from "./cmps/Address/Address";
import RowSteps from "./RowSteps";
import Directors from "./cmps/Directors/Directors";
import Shareholders from "./cmps/Shareholders/Shareholders";
import Summary from "./cmps/Summary/Summary";
import { parseDate } from "@internationalized/date";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { UserContext } from "@/app/(user)/layout";

const CompanyForm = () => {

  
  const [accessDenied, setAccessDenied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

 

  const [currentStep, setCurrentStep] = useState(1)
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
    // person_dob: parseDate((new Date()).toISOString().split('T')[0]),
    person_dob: (new Date()).toISOString().split('T')[0],
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






  const SHAREHOLDER_SCHEMA = {
    shareholder_title: "",
    shareholder_first_name: "",
    shareholder_middle_name: "",
    shareholder_last_name: "",
    shareholder_person_dob:  (new Date()).toISOString().split('T')[0],
    shareholder_nationality: "",
    shareholder_country_of_residence: "",
    shareholder_num_of_shares: 1,

    shareholder_address_name_or_number: '',
    shareholder_address_street: '',
    shareholder_address_locality: '',
    shareholder_address_town: '',
    shareholder_address_county: '',
    shareholder_address_postcode: '',
    shareholder_address_country: '',
  }






  

  const [shareholders, setShareholders] = useState({


    shareholders: [SHAREHOLDER_SCHEMA],

    share_currency: 'GBP',

    num_of_share_holders: 1,
    
    num_of_shares: 1,
    value_per_share: 1,
    total_shares: 1,
     

 
  })





const { user, setUser } = useContext(UserContext);







  // const [companyAddress, setCompanyAddress] = useState({
    
  // })


  const gotoBtnHandler = (step, active) => {

    return () => {
      setCurrentStep(step)
      setActivePage(active)
    }

  }

  
  

















  // ------------------------------------------------------------------------------Submit Handler--------------------------------------------------------------------
  const submitHandler = async () => {

    console.log(address)
    console.log(companyInfo)
    console.log(directors)
    console.log(shareholders)





    const supabase = createClient();
    setIsLoading(true)

    try {
      






      // ---------------------------------------------------------------------company_info & office address------------------------------------------------------------------------


      const { data, error } = await supabase
      .from('company_info')
      .insert({
        ...companyInfo,
        user_id: user.id,
      })
      .select('company_name')

      console.log(data[0])

      const company_name = data[0].company_name;

      const {   error: error2 } = await supabase
          .from('office_address')
          .insert({ ...address, for_company: company_name, user_id: user.id, })
           



          // ---------------------------------------------------------------------directors------------------------------------------------------------------------
          const director = {
            person_title: directors.person_title,
            person_first_name: directors.person_first_name,
            person_middle_name: directors.person_middle_name,
            person_last_name: directors.person_last_name,
           
            person_dob:directors.person_dob ,
            person_nationality: directors.person_nationality,
            person_occupation: directors.person_occupation,
            person_country_of_residence: directors.person_country_of_residence,

            for_company: company_name,
            user_id: user.id,
        
          }

          const { data: data3, error: error3 } = await supabase
          .from('directors')
          .insert(director)
          .select("id")






          const service_address = {
            service_address_name_or_number: directors.service_address_name_or_number ,
            service_address_street: directors.service_address_street ,
            service_address_locality: directors.service_address_locality ,
            service_address_town: directors.service_address_town ,
            service_address_county: directors.service_address_county ,
            service_address_postcode: directors.service_address_postcode ,
            service_address_country: directors.service_address_country ,

            for_director: data3[0].id,
            for_company: company_name,
            user_id: user.id,
          }
          const { data: data4, error: error4 } = await supabase
          .from('service_address')
          .insert(service_address)
           




          const residential_address = {
            residential_address_name_or_number: directors.residential_address_name_or_number ,
            residential_address_street: directors.residential_address_street ,
            residential_address_locality: directors.residential_address_locality ,
            residential_address_town: directors.residential_address_town ,
            residential_address_county: directors.residential_address_county ,
            residential_address_postcode: directors.residential_address_postcode ,
            residential_address_country: directors.residential_address_country ,

            for_director: data3[0].id,
            for_company: company_name,
            user_id: user.id,
          }
          const { data: data5, error: error5 } = await supabase
          .from('residential_address')
          .insert(residential_address)
           









        // ---------------------------------------------------------------------shareholders------------------------------------------------------------------------

          const shareholders_stats = {
            share_currency: shareholders.share_currency,

            num_of_share_holders: shareholders.num_of_share_holders,
            
            num_of_shares: shareholders.num_of_shares,
            value_per_share: shareholders.value_per_share,
            total_shares: shareholders.total_shares,

            for_company: company_name,
            user_id: user.id,
          }
        const { data: data6, error: error6 } = await supabase
        .from('shareholders_stats')
        .insert(shareholders_stats)
        .select("id")


        



          const mappedShareholdersArr = shareholders.shareholders.map((el) => {

            return {
              ...el,

              for_shareholders_stats: data6[0].id,
              for_company: company_name,
              user_id: user.id,
            }

          })


          const { error7 } = await supabase
            .from('shareholders')
            .insert(mappedShareholdersArr)













    } catch (error) {

      console.log(error)

    } finally {
      setIsLoading(false)
    }




























  }















  



























  return <>
   <div className="w-full container mx-auto px-40 max-xl:px-20 max-lg:px-8 ">
      {
        accessDenied ? <p className="w-full mx-auto py-16 text-red-500  text-center text-2xl font-poppins ">Access Denied😥</p> : 
        <>
         <section className="    w-[60%]   ">
      <RowSteps color="secondary" currentStep={(currentStep - 1)} steps={[ { title: "Registered Office", }, { title: "Directors", }, { title: "Share Holders", }, { title: "Summary", }, ]} />
    </section>
  
  
    <section className="    w-[60%] py-20  ">

       {(activePage === 'address') &&  <Suspense fallback={<p>Loading</p>}><CompanyAddress setAccessDenied={setAccessDenied} companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} address={address} setAddress={setAddress} continueBtnHandler={gotoBtnHandler(2,'directors') }   /></Suspense>} 
       {(activePage === 'directors') &&  <Directors directors={directors} setDirectors={setDirectors} continueBtnHandler={gotoBtnHandler(3,'shareholders') }  goBackBtnHandler={gotoBtnHandler(1,'address')} />}
       {(activePage === 'shareholders') &&  <Shareholders shareholders={shareholders} setShareholders={setShareholders} directors={directors}  continueBtnHandler={gotoBtnHandler(4,'summary') }  goBackBtnHandler={gotoBtnHandler(2,'directors')}   />}
       {(activePage === 'summary') &&  <Summary companyInfo={companyInfo} address={address} directors={directors} shareholders={shareholders}  goBackBtnHandler={gotoBtnHandler(3,'shareholders')} submitHandler={submitHandler} isLoading={isLoading}  />}



    </section></>
      }
   </div>
  
  
  
  
  </>
};

export default CompanyForm;
