"use client"

import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
 
import { MdLogin } from "react-icons/md";
import { Autocomplete, AutocompleteItem, Button, Input, Select, SelectItem, Spinner } from "@heroui/react";
import { addressSchema } from "./addressSchema";
import { COUNTRIES } from "./countries";

const Address = ({ addresss, setAddress, continueBtnHandler, }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setIsErrorMsg] = useState("");


 
  const {  register , handleSubmit, formState: { errors,  }, clearErrors, setValue, watch, getValues, control } = useForm({ resolver: zodResolver(addressSchema), });

  // FORM SUBMIT HANDLER
  const onSubmit = (data) => {
    console.log(data);
    setAddress(data);
    continueBtnHandler()
  };


  const selectedOption = watch("pre_filled")


  useEffect(() => {

    const prefill = pre_filled_address_array.find((el) => el.country === selectedOption)

   // const {name_or_number, street, locality, town, county, postcode, country} = prefill;

   console.log(prefill)
    if (prefill) {
      for (const [key , value] of Object.entries(prefill)) {

        console.log(key, value)
        setValue(key, value)
  
      }
    }

    // setValue('name_or_number', selectedOption)



    // setValue('street', selectedOption)
    // setValue('locality', selectedOption)
    // setValue('town', selectedOption)
    // setValue('country', selectedOption)
    // setValue('country', selectedOption)
    
    // if(selectedOption === 'United Kingdom') {
    //   console.log("triggered", selectedOption)
    // }


  }, [selectedOption])

 
 
   




  const pre_filled_address_array = [{
    name_or_number: ' 9D ',
    street: '   Atherton Road ',
    locality: '',
    town: 'London',
    county: '',
    postcode: ' E7 9AJ',
    country: 'United Kingdom',
  },{
    name_or_number: ' Lexuuu ',
    street: '   Atherton Road ',
    locality: '',
    town: 'London',
    county: '',
    postcode: ' E7 9AJ',
    country: 'Canada',
  },]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-poppins w-full flex flex-col justify-start items-start gap-6 ">



<div className="w-full border p-5   ">
        <div className="w-full text-start px-5  bg-cyan-500   text-white py-2 my-2  shadow-md text-xl " >Prefill Address

          
        </div>
        

        <div className="w-full flex flex-row justify-between items-center gap-4 py-2">
          <label className="text-base pl-2">Prefill</label>
     
          
          <Controller
                  control={control}
                  
                  name="pre_filled"
                  render={({ field }) => (
                    <Select {...field}     >
                    {pre_filled_address_array.map((address) => (
                      <SelectItem  key={address.country}    >{`${address.name_or_number}, ${address.street}, ${address.town}, ${address.country}, ${address.postcode}`}</SelectItem>
                    ))}
                  </Select>
                  )}
                /> 
    </div>



      </div>


      <div className="w-full flex flex-col justify-start items-start gap-2 border p-5     ">
        <div className="w-full text-start px-5  bg-cyan-500   text-white py-2 my-2  shadow-md text-xl ">Registered Office Address</div>


        {/* <div className="w-full"> <Input errorMessage={errors?.name_or_number?.message} isInvalid={errors?.name_or_number ? true : false} {...register("name_or_number")} key="name_or_number" name="name_or_number" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Building Name/Number*	" labelPlacement="outside-left" type="text" /> </div> */}



        <div className="w-full"> <Controller control={control} name="name_or_number" render={({ field }) => ( <Input {...field} errorMessage={errors?.name_or_number?.message} isInvalid={errors?.name_or_number ? true : false}  key="name_or_number"  classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Building Name/Number*	" labelPlacement="outside-left" type="text"   /> )} /></div>
        <div className="w-full"> <Controller control={control} name="street" render={({ field }) => ( <Input {...field} errorMessage={errors?.street?.message} isInvalid={errors?.street ? true : false}  key="street"  classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Street*	" labelPlacement="outside-left" type="text"   /> )} /></div>
        <div className="w-full"> <Controller control={control} name="locality" render={({ field }) => ( <Input {...field} errorMessage={errors?.locality?.message} isInvalid={errors?.locality ? true : false}  key="locality"  classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Street*	" labelPlacement="outside-left" type="text"   /> )} /></div>
        <div className="w-full"> <Controller control={control} name="town" render={({ field }) => ( <Input {...field} errorMessage={errors?.town?.message} isInvalid={errors?.town ? true : false}  key="town"  classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Locality	" labelPlacement="outside-left" type="text"   /> )} /></div>
        <div className="w-full"> <Controller control={control} name="county" render={({ field }) => ( <Input {...field} errorMessage={errors?.county?.message} isInvalid={errors?.county ? true : false}  key="county"  classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Town*		" labelPlacement="outside-left" type="text"   /> )} /></div>
        <div className="w-full"> <Controller control={control} name="postcode" render={({ field }) => ( <Input {...field} errorMessage={errors?.postcode?.message} isInvalid={errors?.postcode ? true : false}  key="postcode"  classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Postcode*	" labelPlacement="outside-left" type="text"   /> )} /></div>













        {/* onSelectionChange={(key) =>  {key && clearErrors('country'); }} */}
        <div className=" w-full flex flex-row justify-between items-center gap-4 ">

          <label className={`text-base ${errors?.country ? 'text-rose-500' : ''}`}>Select Country*</label>




 
 <Controller
        control={control}
        
        name="country"
        render={({ field }) => (
          <Select   
          {...field}   
          variant="bordered"
          
          onChange={(e) => field.onChange(e)}
          

          selectedKeys={[field.value]}

        >
        {COUNTRIES.map((country, index) => (
          <SelectItem  key={country}>{country}</SelectItem>
        ))}
      </Select>
        )}
      /> 











 


















      
    </div>






      </div>

        
      <div className="w-full flex flex-col justify-center items-center gap-4  ">
        <Button  type="submit" className="text-white w-[100%] bg-cyan-500 " color="success" endContent={isLoading ? null : <MdLogin className="text-xl -ml-1" />} > {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Continue"}{" "} </Button>

        {errorMsg && ( <p className="w-full text-center   text-red-500 mt-2"> {errorMsg} </p> )}
      </div>
    </form>
  );
};

export default Address;
