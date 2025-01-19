"use client"

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
 
import { MdLogin } from "react-icons/md";
import { Autocomplete, AutocompleteItem, Button, Input, Select, SelectItem, Spinner } from "@heroui/react";
import { addressSchema } from "./addressSchema";
import { COUNTRIES } from "./countries";

const Address = ({ addresss, setAddress, continueBtnHandler, }) => {



  const [co, setCo] = useState(COUNTRIES)


   const [data, setData] = useState({
      name_or_number: '',
      street: '',
      locality: '',
      town: '',
      county: '',
      postcode: '',
      country: 'France',
    })



  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setIsErrorMsg] = useState("");

  const { control, handleSubmit, formState: { errors,  }, clearErrors, setValue } = useForm({ resolver: zodResolver(addressSchema), });

  // FORM SUBMIT HANDLER
  const onSubmit = (data) => {
    console.log(data);
    setAddress(data);
    continueBtnHandler()
  };



  const prefillAddressHandler = (pre_filled_address) => {



    setCo("France")



console.log(pre_filled_address)
    //setValue('country', pre_filled_address.country)
    // setValue('street', pre_filled_address.street)

    
     




  }









  const pre_filled_address_array = [{
    name_or_number: ' 9D ',
    street: '   Atherton Road ',
    locality: '',
    town: 'London',
    county: '',
    postcode: ' E7 9AJ',
    country: 'England',
  },


  {
    name_or_number: ' 9xxxxxD ',
    street: '   Atherton Road ',
    locality: '',
    town: 'London',
    county: '',
    postcode: ' E7 9AJ',
    country: 'England',
  }


]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-poppins w-full flex flex-col justify-start items-start gap-6 ">



<div className="w-full border p-5   ">
        <div className="w-full text-start px-5  bg-cyan-500   text-white py-2 my-2  shadow-md text-xl ">Prefill Address

          
        </div>
        

        <div className="w-full flex flex-row justify-between items-center gap-4 py-2">
          {/* <label className="text-base pl-2">Prefill</label>
      <Select classNames={{    base: "w-[60%]  ",  }}   size="sm"  label={" "} labelPlacement="inside " >
        {pre_filled_address_array.map((address) => (
          <SelectItem  key={address.name_or_number} onPress={(e) => prefillAddressHandler(address)} >{`${address.name_or_number}, ${address.street}, ${address.town}, ${address.country}, ${address.postcode}`}</SelectItem>
        ))}
      </Select>
       */}



      <Controller
        control={control}
        
        name="pre"
        render={({ field }) => (
          <Select classNames={{    base: "w-[60%]  ",  }}   size="sm"  label={" "} labelPlacement="inside " onChange={prefillAddressHandler}  >
          {pre_filled_address_array.map((address) => (
            <SelectItem  key={address.name_or_number}    >{`${address.name_or_number}, ${address.street}, ${address.town}, ${address.country}, ${address.postcode}`}</SelectItem>
          ))}
        </Select>
        )}
      /> 
    </div>



      </div>


      <div className="w-full flex flex-col justify-start items-start gap-2 border p-5     ">
        <div className="w-full text-start px-5  bg-cyan-500   text-white py-2 my-2  shadow-md text-xl ">Registered Office Address</div>
        {/* <div className="w-full"> <Input errorMessage={errors?.name_or_number?.message} isInvalid={errors?.name_or_number ? true : false} {...register("name_or_number")} key="name_or_number" name="name_or_number" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Building Name/Number*	" labelPlacement="outside-left" type="text" /> </div> */}
        <div className="w-full "><Controller
        control={control}
        key="name_or_number"
        name="name_or_number"
        render={({ field }) => (
          <Input  errorMessage={errors?.name_or_number?.message} isInvalid={errors?.name_or_number ? true : false} onChange={(e) => setData(p=> ({...p, name_or_number: e.target.value}))} value={data.name_or_number}  key="name_or_number" name="name_or_number" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Building Name/Number*	" labelPlacement="outside-left" type="text" />
        )}
      /> </div>









        {/* <div className="w-full"> <Input errorMessage={errors?.street?.message} isInvalid={errors?.street ? true : false} {...register("street")} key="street" name="street" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Street*	" labelPlacement="outside-left" type="text" /> </div>
        <div className="w-full"> <Input errorMessage={errors?.locality?.message} isInvalid={errors?.locality ? true : false} {...register("locality")} key="locality" name="locality" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Locality" labelPlacement="outside-left" type="text" /> </div>
        <div className="w-full"> <Input errorMessage={errors?.town?.message} isInvalid={errors?.town ? true : false} {...register("town")} key="town" name="town" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Town*	" labelPlacement="outside-left" type="text" /> </div>
        <div className="w-full"> <Input errorMessage={errors?.county?.message} isInvalid={errors?.county ? true : false} {...register("county")} key="county" name="county" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="County" labelPlacement="outside-left" type="text" /> </div>
        <div className="w-full"> <Input errorMessage={errors?.postcode?.message} isInvalid={errors?.postcode ? true : false} {...register("postcode")} key="postcode" name="postcode" classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base " }} label="Postcode*" labelPlacement="outside-left" type="text" /> </div>
        
        */}


        <div className=" w-full flex flex-row justify-between items-center gap-4 ">
        <label className={`text-base ${errors?.country ? 'text-rose-500' : ''}`}>Select Country*</label>
       <Controller
        control={control}
        
        name="country"
        render={({ field }) => (
          <Select     classNames={{    base: "w-[60%]  ",  }}    errorMessage={errors?.country?.message} isInvalid={errors?.country ? true : false}   selectedKeys={[co]}
          variant="bordered"
          onChange={(e) => setCo(e.target.value)}>
        {COUNTRIES.map((country, index) => (
          <SelectItem  key={country}>{country}</SelectItem>
        ))}
      </Select>
        )}
      /> 


{/* 
          <label className={`text-base ${errors?.country ? 'text-rose-500' : ''}`}>Select Country*</label>
      <Select     classNames={{    base: "w-[60%]  ",  }}   label=" " labelPlacement="inside" key={"country"} name="country" errorMessage={errors?.country?.message} isInvalid={errors?.country ? true : false}   >
        {COUNTRIES.map((country) => (
          <SelectItem  key={country}>{country}</SelectItem>
        ))}
      </Select> */}
      
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
