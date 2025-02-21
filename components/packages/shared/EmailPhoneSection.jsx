import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


import Call2 from'@/public/call3.png';


const EmailPhoneSection = () => {
  return (
    <div className="w-full bg-transparent    ">
    <div className="w-full mx-auto container py-24 px-40 max-lg:px-0 max-lg:py-0   ">
        <div className="w-full relative isolate overflow-hidden bg-slate-900 px-6 pt-16 max-lg:pb-16 shadow-lg shadow-black/40  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex-row flex-col gap-8  flex items-center justify-between  lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" > <circle r={512} cx={512} cy={512} fill="url(#purple-blue-gradient)" fillOpacity="0.7" /> <defs> <radialGradient id="purple-blue-gradient"> <stop stopColor="#6A5ACD" /> <stop offset={1} stopColor="#00BFFF" /> </radialGradient> </defs> </svg>

            <div className="mx-auto max-w-lg text-center max-xl:text-start  lg:mx-0 lg:flex-auto lg:py-12 lg:text-left  lg:w-[50%]" >
                <h2 className="text-balance text-3xl font-semibold tracking-normal text-white  font-poppins  leading-tight "> Have a question? Get in touch today
                </h2>
                <p className="mt-6 text-pretty text-lg/8 text-gray-200 font-poppins leading-normal ">
                    Have questions or need personalized support? Our
                    team is here to help you every step of the way—don't
                    hesitate to reach out!
                </p>
                <div className="mt-10 flex flex-col items-start gap-4 justify-center gap-x-6 lg:justify-start">


                    <div className="flex justify-center items-start gap-2 ">
                        <span className="text-white text-base bg-slate-600 rounded-full h-8 w-8 flex justify-center items-center "><FiPhoneCall /></span>
                        <div className="flex flex-col justify-start items-start text-white  font-Inter">
                            <h3 className="text-lg ">Call us at</h3>
                            <Link href="tel:02081294481"><h4 className="text-white text-xl ">020-8129-4481</h4></Link>
                        </div>
                    </div>


                    <div className="flex justify-center items-start gap-2 ">
                        <span className="text-white text-base bg-slate-600 rounded-full h-8 w-8 flex justify-center items-center "><MdOutlineEmail /></span>
                        <div className="flex flex-col justify-start items-start text-white font-Inter">
                            <h3 className="text-lg ">Email us at</h3>
                            <Link href="mailto:info@affotax.com"><h4 className="text-white  text-xl">info@affotax.com</h4></Link>
                        </div>
                    </div>


                    {/* <button href="#" className=" bg-gradient-to-br from-orange-400 via-orange-500 via-50% to-orange-600 text-white rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" > Get a Quote </button>
                    <Link href="/contact-us" className="text-sm/6 font-semibold text-white" > Chat with Us <span aria-hidden="true">→</span> </Link> */}

                </div>
            </div>

            <div className="relative  lg:w-[50%]   w-full max-w-[380px] ">
                

                <div>
                <Image
                    alt="quote contact us "
                    src={Call2}
                    width={500}
                    height={500}
                    className="max-w-none   w-full    "
                />





                </div>
            </div>
        </div>
    </div>
</div>
  )
};

export default EmailPhoneSection;
