"use client"


import { useState } from "react";
import axios from "axios";
import SuccessDiv from "./SuccessDiv";
import FailDiv from "./FailDiv";
import Form from "./Form";
import PackageHeader from "./PackageHeader";
 
import { Suspense } from 'react'
import CompanyName from "./CompanyName";
import { Bounce, Flip, toast, ToastContainer } from "react-toastify";


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
        })
      }

      const res =  await axios.post('/api/search-company-name', {companyName} );
      console.log(res)
      
      
      if (res?.status === 429) {
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
          });
      }
      if (res?.status === 200) {
        setIsCompanyNameAvailable(res.data?.isCompanyNameAvailable)
      }

    } catch (error) {
        console.log(error.code)
        toast.error(error?.message, {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            })
         
    } finally {
      setIsLoading(false);
      setIsTouched(true);
      setCompanyNameToShow(companyName)
    }




  }









  const searchAgainBtnHandler = () => {

    setIsTouched(false)
    setIsCompanyNameAvailable(false)
    setCompanyName("")






  }





  return (
    <section className="w-full     font-Inter relative max-xl:px-0 ">
      <ToastContainer />
      <div className="w-full overflow-hidden relative ">
        {/* <span className="w-[50%] max-xl:hidden   absolute -right-16 bottom-0"> {" "} <svg viewBox="0 0 827 498" fill="none" xmlns="http://www.w3.org/2000/svg" > {" "} <path d="M366.37 361.625C648.83 419.253 803.815 144.553 846 0V526H0C4.43117 447.197 83.9087 303.997 366.37 361.625Z" fill="#FC6600" />{" "} </svg>{" "} </span> */}
        <div className="container mx-auto w-full px-40 max-xl:px-8 pb-16  ">

          <PackageHeader />

          <div className="w-full flex flex-row max-xl:flex-col gap-8  justify-center items-center bg-gray-100 rounded-xl   ">
            {
              (isCompanyNameAvailable && isTouched) ?  <Suspense fallback={<p>Loading...</p>}><SuccessDiv  searchAgainBtnHandler={searchAgainBtnHandler} companyNameToShow={companyNameToShow}/></Suspense> : (!isCompanyNameAvailable && isTouched) ? <FailDiv companyName={companyName} onSubmitHandler={onSubmitHandler} setCompanyName={setCompanyName} isLoading={isLoading} isInputEmpty={isInputEmpty} companyNameToShow={companyNameToShow}/>  : 
              <div className="text-black pt-20 pb-20 max-xl:pb-12 w-[60%] max-w-2xl">
              <div className="flex flex-col items-start justify-start gap-8 mb-16 max-xl:mb-8  ">
                <h1 className="text-5xl font-semibold font-poppins">You have chosen the <Suspense><CompanyName /></Suspense>  </h1>

                {/* <h2 className="text-xl text-gray-100 "> {" "} You have chosen the Privacy Package.{" "} </h2> */}
                <h3 className="text-xl  text-black"> {" "} Now choose your company name.{" "} </h3>
              </div>

              <Form onSubmitHandler={onSubmitHandler} companyName={companyName} setCompanyName={setCompanyName} isLoading={isLoading} isInputEmpty={isInputEmpty} />

              <p> The simplest way to set up a UK company by using UK registered accountant. </p>
            </div>
            }

 


            {/* <div className="w-[30%] relative  overflow-hidden ">
              <Timeline />
            </div> */}
          </div>
        </div>
      </div>


      {/* <div className="absolute -bottom-24 left-[50%]  -translate-x-[50%] z-50 w-full max-xl:hidden">
        <UnderHero />
      </div> */}
    </section>
  );
};

export default Hero;
