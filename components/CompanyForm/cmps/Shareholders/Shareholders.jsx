"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { MdLogin } from "react-icons/md";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  DatePicker,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
} from "@heroui/react";
import { shareholderSchema } from "./shareholderSchema";
import { COUNTRIES } from "./countries";
import { v4 as uuidv4 } from "uuid";
import SelectCmp from "./SelectCmp";
import { TagsInput } from "react-tag-input-component";
import Link from "next/link";
import { parseDate } from "@internationalized/date";



const SHAREHOLDER_SCHEMA = {
  shareholder_title: "",
  shareholder_first_name: "",
  shareholder_middle_name: "",
  shareholder_last_name: "",
  shareholder_person_dob: (new Date()).toISOString().split('T')[0],
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



const Shareholders = ({ shareholders, setShareholders, directors, continueBtnHandler, goBackBtnHandler, }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setIsErrorMsg] = useState("");

  const { register, handleSubmit, formState: { errors }, clearErrors, setValue, watch, getValues, control, } = useForm({ resolver: zodResolver(shareholderSchema), defaultValues: { ...shareholders }, });

  
  const num_of_share_holders = watch("num_of_share_holders", 1);

  const num = watch("num_of_shares", 1);
  const val = watch("value_per_share", 1);

  const selectedOption = watch("pre_filled");


  //-------------------------------------------CRAETE ARRAY ACCORDING TO THE NUM OF SHARE HOLDERS--------------------------------------------------




  // const memoizedArr = useMemo(() => {
    


  //   //  temp = [...getValues('shareholders')]





  //   return temp


  // }, [num_of_share_holders])










  useEffect(() => {
     

    console.log(num_of_share_holders, "THE LENGTH OPF ARR")
    const temp = new Array(num_of_share_holders).fill({
      ...SHAREHOLDER_SCHEMA,
    })

  

    const shareholdersArr = [...getValues('shareholders')];

    const slicedArr = shareholdersArr.slice(0, num_of_share_holders)

    for (let i=0; i<slicedArr.length; i++) {
      temp[i] = slicedArr[i];
    }

    console.log(temp, "THE TEMP ARR")
    
    setValue("shareholders", temp, {
      //shouldValidate: true
    });


  }, [num_of_share_holders]);









  

  

  //-------------------------------------------PREFILL SHAREHOLDER 1 FROM THE DIRECTORS DATA--------------------------------------------------
  useEffect(() => {

    const prefill_person_object = {
      shareholder_title :directors.person_title,
      shareholder_first_name :directors.person_first_name,
      shareholder_middle_name :directors.person_middle_name,
      shareholder_last_name :directors.person_last_name,
      shareholder_nationality :directors.person_nationality,
      shareholder_country_of_residence :directors.person_country_of_residence,
      shareholder_person_dob :directors.person_dob,
      //  shareholder_num_of_shares : 1,


      shareholder_address_name_or_number: directors.residential_address_name_or_number,
      shareholder_address_street: directors.residential_address_street,
      shareholder_address_locality: directors.residential_address_locality,
      shareholder_address_town: directors.residential_address_town,
      shareholder_address_county: directors.residential_address_county,
      shareholder_address_postcode: directors.residential_address_postcode,
      shareholder_address_country: directors.residential_address_country,

    }


     console.log("SLECTED OPTION WAALA USEEFFECT RAN")

    if (selectedOption) {

      setValue('shareholders.0', {
        ...getValues('shareholders.0'),
        ...prefill_person_object
      }, {
        shouldValidate: true
      });

    } 
    
  

    
  }, [selectedOption])











  //-------------------------------------------------------FILL ALL DATA ON MOUNTING-------------------------------------------------------------
  useEffect(() => {

      console.log('OUR MAIN USEEFFECT MOUNT RAN')
    if (shareholders) {
      // for (const [key, value] of Object.entries(shareholders)) {
      //   setValue(key, value, {
      //     // shouldValidate: true
      //   });
      // }  
      console.log(shareholders)
      setValue('shareholders', shareholders.shareholders)



      // setValue('shareholders.0.shareholder_title', shareholders.shareholders[0].shareholder_title, )
      // setValue('shareholders.0.shareholder_first_name', shareholders.shareholders[0].shareholder_first_name, )
      // setValue('shareholders.0.shareholder_middle_name', shareholders.shareholders[0].shareholder_middle_name, )
      // setValue('shareholders.0.shareholder_last_name', shareholders.shareholders[0].shareholder_last_name, )
      // setValue('shareholders.0.shareholder_nationality', shareholders.shareholders[0].shareholder_nationality, )
      // setValue('shareholders.0.shareholder_country_of_residence', shareholders.shareholders[0].shareholder_country_of_residence, )
      // setValue('shareholders.0.shareholder_num_of_shares', shareholders.shareholders[0].shareholder_num_of_shares, )

      // setValue('shareholders.0.shareholder_address_name_or_number', shareholders.shareholders[0].shareholder_address_name_or_number, )
      // setValue('shareholders.0.shareholder_address_street', shareholders.shareholders[0].shareholder_address_street, )
      // setValue('shareholders.0.shareholder_address_locality', shareholders.shareholders[0].shareholder_address_locality, )
      // setValue('shareholders.0.shareholder_address_town', shareholders.shareholders[0].shareholder_address_town, )
      // setValue('shareholders.0.shareholder_address_county', shareholders.shareholders[0].shareholder_address_county, )
      // setValue('shareholders.0.shareholder_address_postcode', shareholders.shareholders[0].shareholder_address_postcode, )
      // setValue('shareholders.0.shareholder_address_country', shareholders.shareholders[0].shareholder_address_country, )


      

      setValue('share_currency', shareholders.share_currency, )

      setValue('num_of_share_holders', shareholders.num_of_share_holders, )
      setValue('num_of_shares', shareholders.num_of_shares, )
      setValue('value_per_share', shareholders.value_per_share, )

      // setValue('pre_filled', directors.person_first_name)

    }

  }, [])















  //-----------------------------------------------------------FORM SUBMIT HANDLER------------------------------------------------------------------
  const onSubmit = (data) => {
    console.log(data);

    setShareholders({
      ...data,
      total_shares: num * val,
    });

    continueBtnHandler();
  };


    // -----------------------------------------------------------GO-BACK HANDLER----------------------------------------------------------------------
  const onBack = () => {
    const data = getValues();
    console.log(data);
    setShareholders({
      ...data,
      total_shares: num * val,
    });
    goBackBtnHandler();
  };









  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-poppins w-full flex flex-col justify-start items-start gap-6 "
    >
      <div className="w-full flex flex-col justify-start items-start gap-0 border  ">
        <div className="w-full   ">
          <div className="w-full text-start px-5  bg-cyan-500   text-white py-2  shadow-md text-xl p-5  ">
            Allotment Of Shares
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-2       ">

          <table className="w-full  table-auto border-collapse ">

            <tbody>
              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  ">Share Currency</td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 "> <div className=" w-full  "> <Controller defaultValue={shareholders?.share_currency} control={control} name={"share_currency"} render={({ field }) => ( <Select isRequired variant="bordered" {...field} classNames={{ base: "" }} size="sm" onChange={(e) => field.onChange(e)} selectedKeys={[field.value]} > {" "} {["GBP", "USD", "EUR"].map((el, index) => ( <SelectItem key={el}>{el}</SelectItem> ))}{" "} </Select> )} /> </div> </td>
              </tr>

              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  ">Share Class</td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 "> Ordinary </td>
              </tr>

              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  "> Number of Share Holders </td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 "> <div className="w-full"> {" "} <Controller control={control} name="num_of_share_holders" render={({ field }) => ( <Input {...field} onChange={(e) => {
                  const num = +e.target.value;
                  if (num <1 || num > 10) {
                    return;
                  }
                  return field.onChange(+e.target.value)
                }} size="sm" variant="bordered" errorMessage={errors?.num_of_share_holders?.message} isInvalid={ errors?.num_of_share_holders ? true : false } key="num_of_share_holders" type="number" /> )} />{" "} </div> </td>
              </tr>

              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  "> Number of shares </td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 "> <div className="w-full"> {" "} <Controller control={control} name="num_of_shares" render={({ field }) => ( <Input {...field} onChange={(e) => field.onChange(+e.target.value)} size="sm" variant="bordered" errorMessage={errors?.num_of_shares?.message} isInvalid={errors?.num_of_shares ? true : false} key="num_of_shares" type="number" /> )} />{" "} </div> </td>
              </tr>

              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  "> Value per share </td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 "> <div className="w-full"> {" "} <Controller control={control} name="value_per_share" render={({ field }) => ( <Input {...field} onChange={(e) => field.onChange(+e.target.value)} size="sm" variant="bordered" errorMessage={errors?.value_per_share?.message} isInvalid={errors?.value_per_share ? true : false} key="value_per_share" type="number" /> )} />{" "} </div> </td>
              </tr>

              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  "> Total Shares Value </td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 "> {num * val} </td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>

      <div className="w-full">
        <Controller
          control={control}
          name="shareholders"
          render={({ field, fieldState, formState }) => {
            console.log(field);

            return (
              <>
                {field.value.map((_, index) => {
                  return (
                    <div key={'shareholder_'+index} className="w-full flex flex-col justify-start items-start gap-2 border " >
                      <div className="w-full   ">
                        <div className="w-full text-start px-5  bg-cyan-500   text-white py-2  shadow-md text-xl p-5  "> {" "} Shareholder {index + 1} </div>

                        {index === 0 && ( <div className="w-full flex flex-row justify-between items-center gap-4   p-5"> {" "} <label className="text-base "> Prefill Address </label>{" "} <Controller control={control} name="pre_filled" render={({ field }) => ( <Select {...field} onChange={(e) => field.onChange(e)} selectedKeys={[field.value]} classNames={{ base: "w-[60%]" }} size="sm" > {" "} <SelectItem key={directors.person_first_name} >{`${directors.person_first_name} ${directors.person_middle_name}  ${directors.person_last_name} `}</SelectItem>{" "} </Select> )} />{" "} </div> )}
                        <Divider />
                      </div>

                      <div className="w-full flex flex-col justify-start items-start gap-2   p-5     ">
                        <div className="w-full"> <Controller  name={`shareholders.${index}.shareholder_title`} control={control} render={({ field }) => ( <Input {...field}    size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_title ?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_title ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} key={"shareholders.${index}.shareholder_title"} label="Title*	" labelPlacement="outside-left" type="text" /> )} /> </div>

                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_first_name`} control={control} render={({ field }) => ( <Input {...field} size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_first_name?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_first_name ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0 ", }} label="First Name*	" labelPlacement="outside-left" type="text" /> )} /> </div>

                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_middle_name`} control={control} render={({ field }) => ( <Input {...field} size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_middle_name?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_middle_name ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Middle Name	" labelPlacement="outside-left" type="text" /> )} /> </div>

                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_last_name`} control={control} render={({ field }) => ( <Input {...field} size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_last_name?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_last_name ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Last Name*	" labelPlacement="outside-left" type="text" /> )} /> </div>

                        <div className="w-full flex justify-between items-center "> {" "} <label className={` ${errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_person_dob && 'text-red-500'}`}>Date of Birth*</label> <div className="w-[60%]"><Controller control={control} name={`shareholders.${index}.shareholder_person_dob`} render={({ field }) => ( <DatePicker   showMonthAndYearPickers     {...field} onChange={e => field.onChange(e?.toString())} value={parseDate(field.value)}    size="sm" errorMessage={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_person_dob?.message} isInvalid={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_person_dob ? true : false}  classNames={{    base:"   " }}    /> )} />{" "}</div> </div>


                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_nationality`} control={control} render={({ field }) => ( <Input {...field} size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_nationality?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_nationality ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Nationality*		" labelPlacement="outside-left" type="text" /> )} /> </div>

                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_country_of_residence`} control={control} render={({ field }) => ( <Input {...field} size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_country_of_residence?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_country_of_residence ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Country of residence*	" labelPlacement="outside-left" type="text" /> )} /> </div>

                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_num_of_shares`} control={control} render={({ field }) => ( <Input {...field} onChange={(e) => field.onChange(+e.target.value)} size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_num_of_shares?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_num_of_shares ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Num of shares*	" labelPlacement="outside-left" type="number" /> )} /> </div>


                        
                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_address_name_or_number`} control={control} render={({ field }) => ( <Input {...field}  size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_name_or_number?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_name_or_number ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Building Name/Number*	" labelPlacement="outside-left" type="text" /> )} /> </div>
                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_address_street`} control={control} render={({ field }) => ( <Input {...field}  size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_street?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_street ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Street*	" labelPlacement="outside-left" type="text" /> )} /> </div>
                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_address_locality`} control={control} render={({ field }) => ( <Input {...field}  size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_locality?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_locality ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Locality	" labelPlacement="outside-left" type="text" /> )} /> </div>
                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_address_town`} control={control} render={({ field }) => ( <Input {...field}  size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_town?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_town ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Town*	" labelPlacement="outside-left" type="text" /> )} /> </div>
                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_address_county`} control={control} render={({ field }) => ( <Input {...field}  size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_county?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_county ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="County" labelPlacement="outside-left" type="text" /> )} /> </div>
                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_address_postcode`} control={control} render={({ field }) => ( <Input {...field}  size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_postcode?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_postcode ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Postcode*	" labelPlacement="outside-left" type="text" /> )} /> </div>
                        <div className="w-full"> <Controller name={`shareholders.${index}.shareholder_address_country`} control={control} render={({ field }) => ( <Input {...field}  size="sm" errorMessage={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_country?.message } isInvalid={ errors?.shareholders?.length > 0 && errors?.shareholders[index] ?.shareholder_address_country ? true : false } classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Country*	" labelPlacement="outside-left" type="text" /> )} /> </div>
                      </div>
                    </div>
                  );
                })}
              </>
            );
          }}
        />
      </div>




      <div className="w-full flex flex-col justify-center items-center gap-4  ">
        <div className="w-full flex flex-row justify-center items-center gap-4 ">
          <Button onPress={onBack} className="text-white w-[50%] bg-gray-500  "> {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Go Back"}{" "} </Button>
          <Button type="submit" className="text-white w-[50%] bg-teal-500 " color="success" endContent={ isLoading ? null : <MdLogin className="text-xl -ml-1" /> } > {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Continue"}{" "} </Button>
        </div>

        {errorMsg && ( <p className="w-full text-center   text-red-500 mt-2"> {errorMsg} </p> )}
      </div>
    </form>
  );
};

export default Shareholders;
