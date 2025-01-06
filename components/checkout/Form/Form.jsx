"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import AccountDetails from "./AccountDetails/AccountDetails";
import BillingDetails from "./BillingDetails/BillingDetails";
import CardDetails from "./CardDetails/CardDetails";
import { useForm } from "react-hook-form";
import SquareForm from "./CardDetails/SquareFrom/SquareForm";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { createClient } from "@/lib/supabase/client";
import { Tab, Tabs } from "@nextui-org/react";
import LoginForm from "./LoginForm/LoginForm";
import { UserContext } from "@/app/(user)/layout";



const Form = () => {


  const [selected, setSelected] = useState("signup");
 // const [user, setUser] = useState(null)

 const {user, setUser} = useContext(UserContext)


const formRef = useRef()
  const { register, handleSubmit, watch, formState: { errors,  },  clearErrors, setValue, trigger,   } = useForm();


  const formSubmitHandler = (data) => {

    console.log("FORM DATA: ",data)

  }



  const submitInputRef = useRef()

  const outerFormSubmitHandler = () => {
    submitInputRef.current.click()
    return;

  }

  

  // useEffect(() => {

  //   console.log(userContext)

  //   if (userContext?.user) {
  //     setUser(userContext?.user)
  //   }











  // })



  // useEffect(() => {

  //   const getUser = (async () => {
  //     const supabase = createClient();

  //      const {data, error} = await supabase.auth.getSession();

  //       console.log(data.session)

  //       if (!data.session) {
  //         return;

  //       }
  //       console.log(data.session)
  //       setUser(data.session.user)
         
  //   })()



  // }, [])











  return (
    <section className="w-full  ">
      <div className="w-full flex flex-col justify-start items-start   ">

      {
        !user && 
        <div className="w-full   ">

        <Tabs className="font-poppins mb-3 w-full " key={"customer"} aria-label="customer" onSelectionChange={setSelected} selectedKey={selected} color={"secondary"} radius="lg">
          <Tab key="signup" title="New Customer" />
          <Tab key="login" title="Returning Customer" />
          
        </Tabs>


        
          {selected === 'login' && <LoginForm  setSelected={setSelected} setUser={setUser}/>}

          

        </div>
      }

        <form  onSubmit={handleSubmit(formSubmitHandler)} className="w-full flex flex-col justify-start items-start gap-5  ">
          <div className="w-full   ">

         


            {selected === 'signup' && <AccountDetails register={register} errors={errors} user={user}/>}
           

            

          </div>

          {
            selected === 'signup' && 

            <>
            <div className="w-full   ">
            <BillingDetails register={register} errors={errors} clearErrors={clearErrors} setValue={setValue}/>
          </div>

          <div className="w-full   ">
            <CardDetails register={register} errors={errors} outerFormSubmitHandler={outerFormSubmitHandler}  />
          </div>

         <input ref={submitInputRef} type="submit" hidden />
         </>


          }


        </form>
      </div>
    </section>
  );
};

export default Form;
