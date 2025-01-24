"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { MdLogin } from "react-icons/md";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
} from "@heroui/react";
import { addressSchema } from "./addressSchema";
import { COUNTRIES } from "./countries";
import { v4 as uuidv4 } from "uuid";
import SelectCmp from "./SelectCmp";
import { TagsInput } from "react-tag-input-component";
import Link from "next/link";

const Address = ({ address, setAddress, continueBtnHandler, companyInfo, setCompanyInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setIsErrorMsg] = useState("");


  const [sicCodesSelected, setSicCodesSelected] = useState([]);



  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
    watch,
    getValues,
    control,
  } = useForm({ resolver: zodResolver(addressSchema) });

  // FORM SUBMIT HANDLER
  const onSubmit = (data) => {
    console.log(data);
    setCompanyInfo({
      ...companyInfo,
      company_suffix: data.company_suffix,
      sic_codes: sicCodesSelected,

    })
    setAddress({
      name_or_number: data.name_or_number,
      street: data.street,
      locality: data.locality,
      town: data.town,
      county: data.county,
      postcode: data.postcode,
      country: data.country,
    });


    continueBtnHandler();
  };

  const selectedOption = watch("pre_filled", );

  useEffect(() => {
    const prefill = pre_filled_address_array.find(
      (el) => el.id === selectedOption
    );

    console.log(prefill);
    if (prefill) {
      for (const [key, value] of Object.entries(prefill)) {
        console.log(key, value);
        setValue(key, value, {
          shouldValidate: true
        });
      }
    }
  }, [selectedOption]);





  useEffect(() => {


    if (address.name_or_number || address.street || address.town || address.postcode || address.country) {
      console.log('ran tghe usefefffcet')

      for (const [key, value] of Object.entries(address)) {
        console.log(key, value);
        setValue(key, value, {
          // shouldValidate: true
        });
      }
    }

    if(companyInfo?.sic_codes?.length > 0) {
      setSicCodesSelected(companyInfo?.sic_codes)
    }



  }, [])





















  const pre_filled_address_array = useMemo(
    () => [
      {
        id: uuidv4(),
        name_or_number: "9D",
        street: "Atherton Road ",
        locality: "",
        town: "London",
        county: "",
        postcode: "E7 9AJ",
        country: "United Kingdom",
      },
      // {
      //   id: uuidv4(),
      //   name_or_number: " Lexuuu ",
      //   street: "   Atherton Road ",
      //   locality: "",
      //   town: "London",
      //   county: "",
      //   postcode: " E7 9AJ",
      //   country: "Canada",
      // },
    ],
    []
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-poppins w-full flex flex-col justify-start items-start gap-6 " >


        <div className="w-full flex flex-col justify-start items-start gap-0 border  ">


            <div className="w-full   ">
              <div className="w-full text-start px-5  bg-cyan-500   text-white py-2  shadow-md text-xl p-5  "> Company Information </div>
            </div>




            <div className="w-full flex flex-col justify-start items-start gap-2       ">

                <table   className="w-full  table-auto border-collapse ">
                  <tbody>

                  <tr className="  " > 
                    <td className="border px-5 py-2   w-[40%]  " >Company Name</td>
                    <td className="border px-5 py-2 flex justify-start items-center gap-2 " >

                      <h3>AffotaxHouse</h3>

<div className=" w-full  ">
      {/* <label className={`text-base ${errors?.name ? "text-rose-500" : ""}`}>{label} </label> */}

      <Controller defaultValue={companyInfo?.company_suffix}  control={control} name={"company_suffix"} render={({ field }) => ( <Select isRequired variant="bordered"  {...field} classNames={{ base: "" }} size="sm" onChange={(e) => field.onChange(e)} selectedKeys={[field.value]} > {" "} {['LTD', 'LIMITED'].map((el, index) => ( <SelectItem   key={el} >{el}</SelectItem> ))}{" "} </Select> )} />
    </div>




                    </td>
                  </tr>
                  
                  
                  <tr>
                    <td  className="border px-5 py-2  w-[40%] ">

                      <h3>Business Activity/SIC Code</h3>
                      <h3 className="text-xs font-Montserrat">Select upto 4 sic codes</h3>

                    </td>
                    <td  className="border px-5 py-2   ">
                      

                    <div className="py-4 ">
       

      {/* <pre>{JSON.stringify(sicCodesSelected)}</pre> */}

      <TagsInput
        
        classNames={{input: "w-full  flex ",   }}
        value={sicCodesSelected}
        onChange={setSicCodesSelected}
        name="sic codes"
        placeHolder="Enter SIC codes "
        beforeAddValidate={(value, existingTags) => {
            
            if(existingTags.length >= 4 ) {
              return false;
            } 
            
            return !isNaN(Number(value))

        }}  
        
         

      />
      <em className="text-xs font-Montserrat"><Link target="_blank" className="text-blue-500" href={'http://resources.companieshouse.gov.uk/sic/'}  >Click here</Link> to search SIC codes for your business</em>
    </div>











                    </td>
                  </tr>



                  <tr>
                    <td  className="border px-5 py-2  w-[40%] ">Registered In</td>
                    <td  className="border px-5 py-2   ">England & Wales</td>
                  </tr>





                  </tbody>


                </table>
             

             
              
            </div>


        </div>





















      <div className="w-full flex flex-col justify-start items-start gap-2 border  ">


           <div className="w-full   ">
              <div className="w-full text-start px-5  bg-cyan-500   text-white py-2  shadow-md text-xl p-5  ">Registered Office Address </div>

              <div className="w-full flex flex-row justify-between items-center gap-4   p-5"> <label className="text-base ">Prefill Address</label> <Controller control={control} name="pre_filled" render={({ field }) => ( <Select {...field} classNames={{ base: "w-[60%]" }} size="sm"> {pre_filled_address_array.map((address) => ( <SelectItem key={address.id} >{`${address.name_or_number}, ${address.street}, ${address.town}, ${address.country}, ${address.postcode}`}</SelectItem> ))} </Select> )} /> </div>
              <Divider />
            </div>




            <div className="w-full flex flex-col justify-start items-start gap-2   p-5     ">


              {/* <div className="w-full text-start px-5  bg-cyan-500   text-white py-2 my-2  shadow-md text-xl "> Registered Office Address </div> */}

              <div className="w-full"> {" "} <Controller control={control} name="name_or_number" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.name_or_number?.message} isInvalid={errors?.name_or_number ? true : false} key="name_or_number" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Building Name/Number*	" labelPlacement="outside-left" type="text" /> )} /> </div>
              <div className="w-full"> {" "} <Controller control={control} name="street" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.street?.message} isInvalid={errors?.street ? true : false} key="street" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0 ", }} label="Street*	" labelPlacement="outside-left" type="text" /> )} /> </div>
              <div className="w-full"> {" "} <Controller control={control} name="locality" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.locality?.message} isInvalid={errors?.locality ? true : false} key="locality" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Locality	" labelPlacement="outside-left" type="text" /> )} /> </div>
              <div className="w-full"> {" "} <Controller control={control} name="town" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.town?.message} isInvalid={errors?.town ? true : false} key="town" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Town*		" labelPlacement="outside-left" type="text" /> )} /> </div>
              <div className="w-full"> {" "} <Controller control={control} name="county" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.county?.message} isInvalid={errors?.county ? true : false} key="county" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="County	" labelPlacement="outside-left" type="text" /> )} /> </div>
              <div className="w-full"> {" "} <Controller control={control} name="postcode" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.postcode?.message} isInvalid={errors?.postcode ? true : false} key="postcode" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Postcode*	" labelPlacement="outside-left" type="text" /> )} /> </div>

              <div className=" w-full flex flex-row justify-between items-center gap-4 ">
                <label className={`text-base ${errors?.country ? "text-rose-500" : ""}`} > Select Country* </label>

                <Controller control={control} name="country" render={({ field }) => ( <Select {...field} classNames={{ base: "w-[60%]" }} size="sm" onChange={(e) => field.onChange(e)} selectedKeys={[field.value]} errorMessage={errors?.country?.message} isInvalid={errors?.country ? true : false} > {COUNTRIES.map((country, index) => ( <SelectItem key={country}>{country}</SelectItem> ))} </Select> )} />
              </div>
            </div>


      </div>




      <div className="w-full flex flex-col justify-center items-center gap-4  ">
        <Button type="submit" className="text-white w-[100%] bg-cyan-500 " color="success" endContent={isLoading ? null : <MdLogin className="text-xl -ml-1" />} > {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Continue"}{" "} </Button>

        {errorMsg && ( <p className="w-full text-center   text-red-500 mt-2"> {errorMsg} </p> )}
      </div>
    </form>
  );
};

export default Address;
