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
import {   shareholderSchema } from "./shareholderSchema";
import { COUNTRIES } from "./countries";
import { v4 as uuidv4 } from "uuid";
import SelectCmp from "./SelectCmp";
import { TagsInput } from "react-tag-input-component";
import Link from "next/link";
 

const Shareholders = ({
  shareholders,
  setShareholders,
  directors,
  continueBtnHandler,
  goBackBtnHandler,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setIsErrorMsg] = useState("");

 

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
    watch,
    getValues,
    control,
  } = useForm({ resolver: zodResolver(shareholderSchema),
    
   });


   const [shareholdersArr, setShareholdersArr ] = useState([])

  const num_of_share_holders = watch('num_of_share_holders');

   useEffect(() => {

      console.log(num_of_share_holders, 'USSSSSSSSSSSSSSSSSSSSSSS')

      setShareholdersArr((prev) => {

        const arr = [];

        for (let i=0; i<num_of_share_holders; i++) {
          arr.push(`shareholder ${i}`)
        }

        setValue('shareholders', arr, {
          shouldValidate: true
        })
        
        return arr;
      })




   }, [num_of_share_holders])




  const num = watch('num_of_shares')
  const val = watch('value_per_share')

  const selectedOption = watch("pre_filled");
  



    useEffect(() => {
  
      const prefill_person_object = {
        shareholder_title :directors.person_title,
        shareholder_first_name :directors.person_first_name,
        shareholder_middle_name :directors.person_middle_name,
        shareholder_last_name :directors.person_last_name,
        shareholder_nationality :directors.person_nationality,
        shareholder_country_of_residence :directors.person_occupation,
        shareholder_num_of_shares :directors.person_country_of_residence,


      }


      if (selectedOption) {
        setValue('shareholders[0]', prefill_person_object, {
          shouldValidate: true
        });
        }



     
  
  
  
    }, [selectedOption])



































    
      
        useEffect(() => {
      
      
          if (shareholders) {
            console.log('ran tghe usefefffcet', shareholders)
      
            for (const [key, value] of Object.entries(shareholders)) {
              console.log(key, value);
              setValue(key, value, {
                // shouldValidate: true
              });
            }

           
          }
      
         
      
      
      
        }, [])
    






  // FORM SUBMIT HANDLER
  const onSubmit = (data) => {
    console.log(data);
     
    setShareholders({
      ...data,
      total_shares: num * val
    })


     continueBtnHandler();
  };



  const onBack = () => {
    const data = getValues() 
    console.log(data);
    setShareholders({
      ...data,
      total_shares: num * val
    })
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
                <td className="border px-5 py-2 flex justify-start items-center gap-2 ">
                 

                  <div className=" w-full  ">

                    <Controller
                      defaultValue={shareholders?.share_currency}
                      control={control}
                      name={"share_currency"}
                      render={({ field }) => (
                        <Select
                          isRequired
                          variant="bordered"
                          {...field}
                          classNames={{ base: "" }}
                          size="sm"
                          onChange={(e) => field.onChange(e)}
                          selectedKeys={[field.value]}
                        >
                          {" "}
                          {["GBP", "USD", "EUR"].map((el, index) => (
                            <SelectItem key={el}>{el}</SelectItem>
                          ))}{" "}
                        </Select>
                      )}
                    />
                  </div>
                </td>
              </tr>




              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  ">Share Class</td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 ">
                Ordinary

                 
                </td>
              </tr>



              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  ">Number of Share Holders</td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 ">


                <div className="w-full"> {" "} <Controller   control={control}  name="num_of_share_holders" render={({ field }) => ( <Input {...field} onChange={(e) => field.onChange(+(e.target.value))}   size="sm" variant="bordered" errorMessage={errors?.num_of_share_holders?.message} isInvalid={errors?.num_of_share_holders ? true : false} key="num_of_share_holders"   type="number"  /> )} />{" "} </div>

                 
                </td>
              </tr>





              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  ">Number of shares</td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 ">


                <div className="w-full"> {" "} <Controller   control={control}  name="num_of_shares" render={({ field }) => ( <Input {...field} onChange={(e) => field.onChange(+(e.target.value))}   size="sm" variant="bordered" errorMessage={errors?.num_of_shares?.message} isInvalid={errors?.num_of_shares ? true : false} key="num_of_shares"   type="number"  /> )} />{" "} </div>

                 
                </td>
              </tr>



              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  ">Value per share</td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 ">
                <div className="w-full"> {" "} <Controller   control={control}  name="value_per_share" render={({ field }) => ( <Input {...field}    onChange={(e) => field.onChange(+(e.target.value))}   size="sm" variant="bordered" errorMessage={errors?.value_per_share?.message} isInvalid={errors?.value_per_share ? true : false} key="value_per_share"   type="number"  /> )} />{" "} </div>


                 
                </td>
              </tr>



              <tr className="  ">
                <td className="border px-5 py-2   w-[40%]  ">Total Shares Value</td>
                <td className="border px-5 py-2 flex justify-start items-center gap-2 ">
                {num * val}

                 
                </td>
              </tr>







               

              
            </tbody>
          </table>
        </div>
      </div>












          {
            
              
              (shareholdersArr.length > 0) && (shareholdersArr.map((el, index) => {

                console.log(shareholdersArr)


                  return(
                      <div className="w-full flex flex-col justify-start items-start gap-2 border  ">
                                  <div className="w-full   ">
                                    <div className="w-full text-start px-5  bg-cyan-500   text-white py-2  shadow-md text-xl p-5  "> Person</div>


                                      {index === 0 && <div className="w-full flex flex-row justify-between items-center gap-4   p-5"> {" "} <label className="text-base ">Prefill Address</label>{" "} <Controller control={control} name="pre_filled" render={({ field }) => ( <Select {...field} classNames={{ base: "w-[60%]" }} size="sm">  <SelectItem key={directors.person_first_name} >{`${directors.person_first_name} ${directors.person_middle_name}  ${directors.person_last_name} `}</SelectItem>  </Select> )} />{" "} </div> }
                                    <Divider />
                                  </div>

                                  <div className="w-full flex flex-col justify-start items-start gap-2   p-5     ">
                                    <div className="w-full"> {" "} <Controller control={control} name={`shareholders[${index}].shareholder_title`} render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_title?.message} isInvalid={errors?.shareholders?.length > 0 &&  errors?.shareholders[index]?.shareholder_title ? true : false}   classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Title	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
                                    <div className="w-full"> {" "} <Controller control={control} name={`shareholders[${index}].shareholder_first_name`} render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_first_name?.message} isInvalid={errors?.shareholders?.length > 0 &&  errors?.shareholders[index]?.shareholder_first_name ? true : false} classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0 ", }} label="First Name*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
                                    <div className="w-full"> {" "} <Controller control={control} name={`shareholders[${index}].shareholder_middle_name`} render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_middle_name?.message} isInvalid={errors?.shareholders?.length > 0 &&  errors?.shareholders[index]?.shareholder_middle_name ? true : false} classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Middle Name	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
                                    <div className="w-full"> {" "} <Controller control={control} name={`shareholders[${index}].shareholder_last_name`} render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_last_name?.message} isInvalid={errors?.shareholders?.length > 0 &&  errors?.shareholders[index]?.shareholder_last_name ? true : false} classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Last Name*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
                                    <div className="w-full"> {" "} <Controller control={control} name={`shareholders[${index}].shareholder_nationality`} render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_nationality?.message} isInvalid={errors?.shareholders?.length > 0 &&  errors?.shareholders[index]?.shareholder_nationality ? true : false} classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Nationality*		" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
                                    <div className="w-full"> {" "} <Controller control={control} name={`shareholders[${index}].shareholder_country_of_residence`} render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_country_of_residence?.message} isInvalid={errors?.shareholders?.length > 0 &&  errors?.shareholders[index]?.shareholder_country_of_residence ? true : false} classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Country of residence*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>
                                    <div className="w-full"> {" "} <Controller control={control} name={`shareholders[${index}].shareholder_num_of_shares`} render={({ field }) => ( <Input {...field} size="sm" errorMessage={errors?.shareholders?.length > 0 && errors?.shareholders[index]?.shareholder_num_of_shares?.message} isInvalid={errors?.shareholders?.length > 0 &&  errors?.shareholders[index]?.shareholder_num_of_shares ? true : false} classNames={{ mainWrapper: "w-full ", label: "w-[40%] text-base p-0", }} label="Num of shares*	" labelPlacement="outside-left" type="text" /> )} />{" "} </div>

                                  </div>



                      </div> 
                  )



              }))






          }
















      <div className="w-full flex flex-col justify-center items-center gap-4  ">

        <div className="w-full flex flex-row justify-center items-center gap-4 ">


                  <Button onPress={onBack} className="text-white w-[50%] bg-gray-500  "  > {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Go Back"}{" "} </Button>
        <Button type="submit" className="text-white w-[50%] bg-teal-500 " color="success" endContent={isLoading ? null : <MdLogin className="text-xl -ml-1" />} > {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Continue"}{" "} </Button>

        </div>
        

        {errorMsg && ( <p className="w-full text-center   text-red-500 mt-2"> {errorMsg} </p> )}
      </div>
    </form>
  );
};

export default Shareholders;
