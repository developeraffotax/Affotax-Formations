"use client"



import Timeline from "./Timeline";
import UnderHero from "./UnderHero";
import { useState } from "react";
import axios from "axios";
import SuccessDiv from "./SuccessDiv";
import FailDiv from "./FailDiv";
import Form from "./Form";
import {  Flip, toast, ToastContainer } from "react-toastify";


const Hero = () => {

    const [companyName, setCompanyName] = useState('');
    const [isCompanyNameAvailable, setIsCompanyNameAvailable] = useState(false);

    const [companyNameToShow, setCompanyNameToShow] = useState('')

    const [isTouched, setIsTouched] = useState(false);
    
    const [isLoading, setIsLoading] = useState(false);

    const [isInputEmpty, setIsInputEmpty] = useState(false)


  const onSubmitHandler =  async (e) => {

    e.preventDefault();

    if (companyName.length === 0) {
      setIsInputEmpty(true);
      return;
    }

    setIsLoading(true);
    

    try {
      if(!navigator.onLine) {
        console.log('network error');
        return toast.error("Network Errorssssss", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          containerId: "homepage_toast"
        })
      }
      
      const res =  await axios.post('/api/search-company-name', {companyName} );
      
      
      
      if (res?.status === 200) {
        setIsCompanyNameAvailable(res.data?.isCompanyNameAvailable)
      }

    } catch (error) {
        console.log(error)

        if (error?.response?.status === 429) {
          return toast.warn("Too many Requests! Please try again later", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            containerId: "homepage_toast"
            });
        }
    } finally {
      setIsLoading(false);
      setIsTouched(true);
      setCompanyNameToShow(companyName.toUpperCase())
    }




  }









  const searchAgainBtnHandler = () => {

    setIsTouched(false)
    setIsCompanyNameAvailable(false)
    setCompanyName("")






  }





  return (
    <section className="w-full  mesh  font-Inter relative max-xl:px-0 ">
      <ToastContainer containerId="homepage_toast"/>
      <div className="w-full overflow-hidden relative ">
        {/* <span className="w-[50%] max-xl:hidden   absolute -right-16 bottom-0"> {" "} <svg viewBox="0 0 827 498" fill="none" xmlns="http://www.w3.org/2000/svg" > {" "} <path d="M366.37 361.625C648.83 419.253 803.815 144.553 846 0V526H0C4.43117 447.197 83.9087 303.997 366.37 361.625Z" fill="#FC6600" />{" "} </svg>{" "} </span> */}
        <div className="container mx-auto w-full px-40 max-xl:px-8  ">
          <div className="w-full flex flex-row max-xl:flex-col gap-8  justify-between items-start">
            {
              (isCompanyNameAvailable && isTouched) ? <SuccessDiv   searchAgainBtnHandler={searchAgainBtnHandler} companyNameToShow={companyNameToShow}/> : (!isCompanyNameAvailable && isTouched) ? <FailDiv companyName={companyName} onSubmitHandler={onSubmitHandler} setCompanyName={setCompanyName} isLoading={isLoading} isInputEmpty={isInputEmpty} companyNameToShow={companyNameToShow}/> : 
              <div className="text-white pt-20 pb-20 max-xl:pb-12 w-[60%] max-lg:w-full max-w-2xl">
              <div className="flex flex-col items-start justify-start gap-8 mb-16 max-xl:mb-8  ">
                <h1 className="text-5xl font-semibold font-poppins"> UK Company Formation </h1>

                <h2 className="text-xl text-gray-100 "> {" "} Register your new UK limited company, Open a business bank account, and stay tax compliant - all in one place - quick, easy and secure.{" "} </h2>
                <h3 className="text-base  text-gray-200"> {" "} Free accountant consultation- answer your all tax questions after company registration!!{" "} </h3>
              </div>

              <Form onSubmitHandler={onSubmitHandler} companyName={companyName} setCompanyName={setCompanyName} isLoading={isLoading} isInputEmpty={isInputEmpty}/>

              <p> The simplest way to set up a UK company by using UK registered accountant. </p>
            </div>
            }

 


            <div className="w-[30%] relative  overflow-hidden ">
              <Timeline />
            </div>
          </div>
        </div>
      </div>


      <div className="  container mx-auto  px-40 max-xl:px-8  absolute -bottom-24 left-[50%]  -translate-x-[50%] z-50 w-full max-xl:hidden">
        <UnderHero />
      </div>
    </section>
  );
};

export default Hero;
