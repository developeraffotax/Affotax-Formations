"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companySchema } from "./companySchema";
import { MdLogin } from "react-icons/md";
import { Button, Input, Spinner } from "@nextui-org/react";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setIsErrorMsg] = useState("");

  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(companySchema), });

  // FORM SUBMIT HANDLER
  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="font-poppins">
        <div className="w-full text-center bg-cyan-500 text-white py-2 my-2  shadow-md  ">Company Details </div>


      <div className="w-full flex flex-col justify-start items-start gap-2   ">
        <div className="w-full text-center bg-cyan-500 text-white py-2 my-2  shadow-md  ">asas Details </div>
        <div className="w-full"> <Input errorMessage={errors?.surname?.message} isInvalid={errors?.surname ? true : false} {...register("surname")} key="surname" classNames={{ mainWrapper: "w-full ", label: "w-[40%]" }} label="Surname: *	" labelPlacement="outside-left" type="text" /> </div>
        <div className="w-full"> <Input errorMessage={errors?.surname2?.message} isInvalid={errors?.surname2 ? true : false} {...register("surname2")} key="surname2" classNames={{ mainWrapper: "w-full ", label: "w-[40%]" }} label="Surname: *	" labelPlacement="outside-left" type="text" /> </div>

      </div>

        
      <div className="w-full flex flex-col justify-center items-center gap-4  ">
        <Button type="submit" className="text-white w-[100%] bg-cyan-500 " color="success" endContent={isLoading ? null : <MdLogin className="text-xl -ml-1" />} > {" "} {isLoading ? <Spinner size="sm" color="white" /> : "Submit"}{" "} </Button>

        {errorMsg && ( <p className="w-full text-center   text-red-500 mt-2"> {errorMsg} </p> )}
      </div>
    </form>
  );
};

export default Form;
