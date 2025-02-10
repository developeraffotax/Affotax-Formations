"use client"

import { createClient } from "@/lib/supabase/client";
import React, { useCallback, useEffect, useState } from "react";
import Summary from "./Summary/Summary";
import { CircularProgress } from "@mui/material";

const CompanyDetail = ({id}) => {
  
     
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


  
      const [isLoading, setIsLoading] = useState(false)
  
      
      const getCompanyData = useCallback(async() => {
          const supabase = createClient()
          setIsLoading(true)
  
          const {data: {user}, error: userError} = await supabase.auth.getUser();
  
          const { data: CompanyData, error: CompanyDataError } = await supabase.from("company_info").select().eq('id', id );


          const { data: OfficeAddressData, error: OfficeAddressDataError } = await supabase.from("office_address").select().eq('for_company', CompanyData[0].company_name );
          const { data: DirectorsData, error: DirectorsDataError } = await supabase.from("directors").select().eq('for_company', CompanyData[0].company_name );

          const { data: ResidentialAddressData, error: ResidentialAddressDataError } = await supabase.from("residential_address").select().eq('for_company', CompanyData[0].company_name );
          const { data: ServiceAddressData, error: ServiceAddressDataError } = await supabase.from("service_address").select().eq('for_company', CompanyData[0].company_name );

        console.log(OfficeAddressData)


          const { data: ShareholdersStatsData, error: ShareholdersStatsDataError } = await supabase.from("shareholders_stats").select().eq('for_company', CompanyData[0].company_name );
          const { data: ShareholdersData, error: ShareholdersDataError } = await supabase.from("shareholders").select().eq('for_company', CompanyData[0].company_name );
         


          setCompanyInfo(CompanyData[0]);
          setAddress(OfficeAddressData[0]);
          setDirectors({
            ...DirectorsData[0],
            ...ResidentialAddressData[0],
            ...ServiceAddressData[0]
          });

          setShareholders({
            shareholders: ShareholdersData,

            ...ShareholdersStatsData[0]

          })

            
         
  
  
      }, []);
  
  
  
  
      useEffect(() => {
  
        getCompanyData()
  
  
      }, [getCompanyData])
  
  
  
  return (
<div className="w-full flex justify-center items-center mt-12">
{isLoading && <CircularProgress  color="primary" className="" />}
    {
        !isLoading && <Summary companyInfo={companyInfo} address={address} directors={directors} shareholders={shareholders} />
    }







</div>
    
  )
};

export default CompanyDetail;
