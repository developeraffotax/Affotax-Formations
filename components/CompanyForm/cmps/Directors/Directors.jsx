"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import {parseDate, getLocalTimeZone} from "@internationalized/date";


import { MdLogin } from "react-icons/md";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Calendar,
  Checkbox,
  DateInput,
  DatePicker,
  Input,
  Select,
  SelectItem,
  Spinner,
} from "@heroui/react";
import { addressSchema, directorsSchema } from "./directorsSchema";
import { COUNTRIES } from "./countries";

const Directors = ({ directors, setDirectors, continueBtnHandler, goBackBtnHandler }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setIsErrorMsg] = useState("");

  const [isResidentialDivDisable, setIsResidentialDivDisable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
    watch,
    getValues,
    control,
  } = useForm({ resolver: zodResolver(directorsSchema), defaultValues: {...directors} });

  const residential_address_isSameAsService = watch( "residential_address_isSameAsService" );
  const watchAll = watch();

  useEffect(() => {
    console.log(residential_address_isSameAsService);

    if (residential_address_isSameAsService) {
      setValue( "residential_address_name_or_number", getValues("service_address_name_or_number"), {shouldValidate: true} );
      setValue( "residential_address_street", getValues("service_address_street"), {shouldValidate: true}  );
      setValue( "residential_address_locality", getValues("service_address_locality") , {shouldValidate: true} );
      setValue("residential_address_town", getValues("service_address_town"), {shouldValidate: true} );
      setValue( "residential_address_county", getValues("service_address_county"), {shouldValidate: true}  );
      setValue( "residential_address_postcode", getValues("service_address_postcode"), {shouldValidate: true}  ); setValue( "residential_address_country", getValues("service_address_country"), {shouldValidate: true}  );

      setIsResidentialDivDisable(true);
    } else {
      setValue("residential_address_name_or_number", "");
      setValue("residential_address_street", "");
      setValue("residential_address_locality", "");
      setValue("residential_address_town", "");
      setValue("residential_address_county", "");
      setValue("residential_address_postcode", "");
      setValue("residential_address_country", "");

      setIsResidentialDivDisable(false);
    }
  }, [residential_address_isSameAsService]);

  // FORM SUBMIT HANDLER
  const onSubmit = (data) => {
    console.log(data);
    setDirectors(data);
    continueBtnHandler();
  };


  const onBack = () => {
    const data = getValues() 
    console.log(data);
    setDirectors(data);
    goBackBtnHandler();
  };

  const selectedOption = watch("pre_filled");

  useEffect(() => {
    console.log(selectedOption);

    const prefill = memoized_pre_filled_address_array.find(
      (el) => el.id === selectedOption
    );

    console.log(prefill);
    // const {name_or_number, street, locality, town, county, postcode, country} = prefill;

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
  
  
      if (directors) {
        console.log('ran tghe usefefffcet')
  
        for (const [key, value] of Object.entries(directors)) {
          console.log(key, value);
          setValue(key, value, {
            // shouldValidate: true
          });
        }
        console.log(directors)
        setIsResidentialDivDisable(directors.residential_address_isSameAsService);
      }
  
     
  
  
  
    }, [])



    console.log("XXXXXXXXXXXXXXXXXXXXXX", isResidentialDivDisable)






























  const memoized_pre_filled_address_array = useMemo(() => {
    return [
      {
        id: uuidv4(),
        service_address_name_or_number: "9D ",
        service_address_street: "Atherton Road",
        service_address_locality: "",
        service_address_town: "London",
        service_address_county: "",
        service_address_postcode: " E7 9AJ",
        service_address_country: "United Kingdom",
      },
      // {
      //   id: uuidv4(),
      //   service_address_name_or_number: " Lexuuu ",
      //   service_address_street: "   Atherton Road ",
      //   service_address_locality: "",
      //   service_address_town: "London",
      //   service_address_county: "",
      //   service_address_postcode: " E7 9AJ",
      //   service_address_country: "Canada",
      // },
    ];
  }, []);


  console.log(getValues('person_dob'))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-poppins w-full flex flex-col justify-start items-start gap-6 " >


      <div className="w-full flex flex-col justify-start items-start gap-2 border     ">

        <div className="w-full  ">
          <div className="w-full text-start  bg-cyan-500   text-white py-2 px-8   shadow-md text-xl  "> {" "} Director Details{" "} </div>{" "}
        </div>

        <div className="w-full  flex flex-col justify-start items-start gap-2  px-8 py-4">
          {/* <div className="w-full"> {" "} <Controller control={control} name="person_title" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.person_title?.message} isInvalid={errors?.person_title ? true : false} key="person_title" classNames={{  mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Title*" labelPlacement="outside-left"  type="text" /> )} />{" "} </div> */}
          <div className="w-full flex flex-row justify-between items-center gap-4"> {" "}<label className={`text-base max-lg:text-sm ${errors?.person_title ? "text-rose-500" : ""} ml-2`} > {" "} Title*{" "} </label>  <Controller control={control} name="person_title" render={({ field }) => ( <Select {...field} size="sm" errorMessage={errors?.person_title?.message} isInvalid={errors?.person_title ? true : false} key="person_title"classNames={{ base: "w-[60%]" }}    onChange={(e) => field.onChange(e)} selectedKeys={[field.value]} > 


                   <SelectItem key={"Mr"}>Mr</SelectItem>
                  <SelectItem key={"Ms"}>Ms</SelectItem>
                  <SelectItem key={"Miss"}>Miss</SelectItem>
                  <SelectItem key={"Mrs"}>Mrs</SelectItem>
                  <SelectItem key={"Dr"}>Dr</SelectItem>
                  <SelectItem key={"Prof"}>Prof</SelectItem>
                  <SelectItem key={"Master"}>Master</SelectItem>
                  <SelectItem key={"Rev"}>Rev</SelectItem>
                  <SelectItem key={"Sir"}>Sir</SelectItem>
                  <SelectItem key={"Lord"}>Lord</SelectItem>
                  <SelectItem key={"Lady"}>Lady</SelectItem>
                  <SelectItem key={"Mx"}>Mx</SelectItem>





          </Select> )} />{" "} </div>




          <div className="w-full"> {" "} <Controller control={control} name="person_first_name" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.person_first_name?.message} isInvalid={errors?.person_first_name ? true : false} key="person_first_name" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="First Name*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="person_middle_name" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.person_middle_name?.message} isInvalid={errors?.person_middle_name ? true : false} key="person_middle_name" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Middle Name" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="person_last_name" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.person_last_name?.message} isInvalid={errors?.person_last_name ? true : false} key="person_last_name" classNames={{  mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Last Name*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>


          {/* onChange={e => setValue('person_dob', parseDate(e.toString()))} value={parseDate(getValues('person_dob'))} */}
          <div className="w-full flex justify-between items-center "> {" "} <label className={`ml-2   max-lg:text-sm ${errors.person_dob && 'text-red-500'}`}>Date of Birth*</label> <div className="w-[60%]"><Controller control={control} name="person_dob" render={({ field }) => ( <DatePicker   showMonthAndYearPickers     {...field} onChange={e => field.onChange(e?.toString())} value={parseDate(field.value)}  size="sm" errorMessage={errors?.person_dob?.message} isInvalid={errors?.person_dob ? true : false} key="person_dob" classNames={{    base:"   " }}    /> )} />{" "}</div> </div>
          
          
          
          <div className="w-full"> {" "} <Controller control={control} name="person_nationality" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.person_nationality?.message} isInvalid={errors?.person_nationality ? true : false} key="person_nationality" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Nationality*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="person_occupation" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.person_occupation?.message} isInvalid={errors?.person_occupation ? true : false} key="person_occupation" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Occupation*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>

          <div className=" w-full flex flex-row justify-between items-center gap-4 "> <label className={`text-base max-lg:text-sm ${errors?.country ? "text-rose-500" : ""} ml-2`} > {" "} Select Country*{" "} </label> <Controller  control={control} name="person_country_of_residence" render={({ field }) => ( <Select  {...field} classNames={{ base: "w-[60%]" }} size="sm" variant="flat" onChange={(e) => field.onChange(e)} selectedKeys={[field.value]}  errorMessage={errors?.person_country_of_residence?.message} isInvalid={errors?.person_country_of_residence ? true : false}> {" "} {COUNTRIES.map((country, index) => ( <SelectItem key={country}>{country}</SelectItem> ))}{" "} </Select> )} /> </div>
        </div>


      </div>



      <div className="w-full flex flex-col justify-start items-start gap-2 border     ">
        <div className="w-full  ">
          <div className="w-full text-start    bg-cyan-500   text-white py-2 px-8  shadow-md text-xl ">
            Service Address
          </div>

          <div className="w-full border p-5 flex flex-row justify-start items-center gap-8  px-8 ">
            <div className="w-full flex flex-row justify-between items-center gap-4 py-2"> {" "} <label className="text-base pl-2"> Prefill Service Address </label>{" "} <Controller control={control} name="pre_filled" render={({ field }) => ( <Select {...field} classNames={{ base: "w-[60%]" }} size="sm"> {" "} {memoized_pre_filled_address_array.map((address) => ( <SelectItem key={address.id} value={address.id} >{`${address.service_address_name_or_number}, ${address.service_address_street}, ${address.service_address_town}, ${address.service_address_country}, ${address.service_address_postcode}`}</SelectItem> ))}{" "} </Select> )} />{" "} </div>
          </div>
        </div>

        <div className="w-full  flex flex-col justify-start items-start gap-2  px-8 py-4 ">
          <div className="w-full"> {" "} <Controller control={control} name="service_address_name_or_number" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.service_address_name_or_number?.message} isInvalid={ errors?.service_address_name_or_number ? true : false } key="service_address_name_or_number" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Building Name/Number*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="service_address_street" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.service_address_street?.message} isInvalid={errors?.service_address_street ? true : false} key="service_address_street" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Street*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="service_address_locality" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.service_address_locality?.message} isInvalid={errors?.service_address_locality ? true : false} key="service_address_locality" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Locality	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="service_address_town" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.service_address_town?.message} isInvalid={errors?.service_address_town ? true : false} key="service_address_town" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Town*		" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="service_address_county" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.service_address_county?.message} isInvalid={errors?.service_address_county ? true : false} key="service_address_county" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="County		" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="service_address_postcode" render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.service_address_postcode?.message} isInvalid={errors?.service_address_postcode ? true : false} key="service_address_postcode" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Postcode*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>

          <div className=" w-full flex flex-row justify-between items-center gap-4  "> <label className={`text-base max-lg:text-sm ${errors?.service_address_country ? "text-rose-500" : ""}   ml-2`} > {" "} Select Country*{" "} </label> <Controller control={control} name="service_address_country" render={({ field }) => ( <Select {...field} classNames={{ base: "w-[60%]" }} size="sm" variant="flat" onChange={(e) => field.onChange(e)} selectedKeys={[field.value]} errorMessage={errors?.service_address_country?.message} isInvalid={errors?.service_address_country ? true : false}> {" "} {COUNTRIES.map((country, index) => ( <SelectItem key={country}>{country}</SelectItem> ))}{" "} </Select> )} /> </div>
        </div>
      </div>




      <div className="w-full flex flex-col justify-start items-start gap-2 border      ">
        <div className="w-full  ">
          <div className="w-full text-start  bg-cyan-500   text-white py-2 px-8  shadow-md text-xl ">
            Residential Address
          </div>

          <div className="w-full border p-5 flex flex-row justify-start items-center gap-8  px-8 ">
            <div className="w-full pl-2"> {" "} <Controller defaultValue={isResidentialDivDisable}   control={control} name="residential_address_isSameAsService" render={({ field }) => ( <Checkbox     isSelected={field.value}  onChange={(e) => field.onChange(e)}   {...field} size="md" color="success" errorMessage={ errors?.residential_address_isSameAsService?.message } isInvalid={ errors?.residential_address_isSameAsService ? true : false } key="residential_address_isSameAsService" classNames={{ base: "w-full flex flex-row-reverse gap-5   ", label: " text-lg", }} > {" "} Same as service address{" "} </Checkbox> )} />{" "} </div>
          </div>
        </div>

        <div className="w-full  flex flex-col justify-start items-start gap-2  px-8 py-4">
          <div className="w-full"> {" "} <Controller control={control} name="residential_address_name_or_number" render={({ field }) => ( <Input isDisabled={isResidentialDivDisable} {...field} size="sm" errorMessage={ errors?.residential_address_name_or_number?.message } isInvalid={ errors?.residential_address_name_or_number ? true : false } key="residential_address_name_or_number" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Building Name/Number*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="residential_address_street" render={({ field }) => ( <Input isDisabled={isResidentialDivDisable} {...field} size="sm" errorMessage={errors?.residential_address_street?.message} isInvalid={errors?.residential_address_street ? true : false} key="residential_address_street" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Street*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="residential_address_locality" render={({ field }) => ( <Input isDisabled={isResidentialDivDisable} {...field} size="sm" errorMessage={errors?.residential_address_locality?.message} isInvalid={ errors?.residential_address_locality ? true : false } key="residential_address_locality" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Locality	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="residential_address_town" render={({ field }) => ( <Input isDisabled={isResidentialDivDisable} {...field} size="sm" errorMessage={errors?.residential_address_town?.message} isInvalid={errors?.residential_address_town ? true : false} key="residential_address_town" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Town*		" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="residential_address_county" render={({ field }) => ( <Input isDisabled={isResidentialDivDisable} {...field} size="sm" errorMessage={errors?.residential_address_county?.message} isInvalid={errors?.residential_address_county ? true : false} key="residential_address_county" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="County		" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
          <div className="w-full"> {" "} <Controller control={control} name="residential_address_postcode" render={({ field }) => ( <Input isDisabled={isResidentialDivDisable} {...field} size="sm" errorMessage={errors?.residential_address_postcode?.message} isInvalid={ errors?.residential_address_postcode ? true : false } key="residential_address_postcode" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base max-lg:text-sm ", }} label="Postcode*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>

          <div className=" w-full flex flex-row justify-between items-center gap-4 "> <label className={`text-base max-lg:text-sm ${errors?.residential_address_country ? "text-rose-500" : ""} ml-2`} > {" "} Select Country*{" "} </label> <Controller control={control} name="residential_address_country" render={({ field }) => ( <Select isDisabled={isResidentialDivDisable} {...field} classNames={{ base: "w-[60%]" }} size="sm" variant="flat" onChange={(e) => field.onChange(e)} selectedKeys={[field.value]} errorMessage={errors?.residential_address_country?.message} isInvalid={errors?.residential_address_country ? true : false}> {" "} {COUNTRIES.map((country, index) => ( <SelectItem key={country}>{country}</SelectItem> ))}{" "} </Select> )} /> </div>
        </div>
      </div>



      <div className="w-full flex flex-col justify-center items-center gap-4  ">


        <div className="w-full flex flex-row justify-center items-center gap-4  ">
          <Button onPress={onBack} className="text-white w-[50%] bg-gray-500  "  > {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Go Back"}{" "} </Button>
          <Button type="submit" className="text-white w-[50%] bg-cyan-500 "   endContent={isLoading ? null : <MdLogin className="text-xl -ml-1" />} > {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Continue"}{" "} </Button>
        </div>


        {errorMsg && ( <p className="w-full text-center   text-red-500 mt-2"> {errorMsg} </p> )}
      </div>
    </form>
  );
};

export default Directors;

{
  /* onSelectionChange={(key) =>  {key && clearErrors('country'); }} */
}
