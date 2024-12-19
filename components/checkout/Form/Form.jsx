"use client";

import React from "react";
import AccountDetails from "./AccountDetails/AccountDetails";
import BillingDetails from "./BillingDetails/BillingDetails";
import CardDetails from "./CardDetails/CardDetails";
import { useForm } from "react-hook-form";

const Form = () => {


  const { register, handleSubmit, formState: { errors },  clearErrors, setValue } = useForm();


  const formSubmitHandler = (data) => {

    console.log("FORM DATA: ",data)


  }

  

  return (
    <section className="w-full  ">
      <div className="w-full flex flex-col justify-start items-start   ">

        {
        
        }

        <form onSubmit={handleSubmit(formSubmitHandler)} className="w-full flex flex-col justify-start items-start gap-5  ">
          <div className="w-full   ">
            <AccountDetails register={register} errors={errors} />
          </div>

          <div className="w-full   ">
            <BillingDetails register={register} errors={errors} clearErrors={clearErrors} setValue={setValue}/>
          </div>

          <div className="w-full   ">
            <CardDetails register={register} errors={errors}  />
          </div>


          <button>SUBMT</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
