"use client"

import React from "react";

import Wise from '@/public/icon1.png'
import Revolut from '@/public/icon2.png'
import Tide from '@/public/icon3.png'
import Image from "next/image";


import Wisebg from '@/public/wisebg.jpg'
import Revolutbg from '@/public/wisebg.jpg'
import Tidebg from '@/public/wisebg.jpg'








const LIST = [
    {name: 'WISE', info: 'Open a Wise Ac online in 5 minutes', bgUrl: "bg-[url('/wisebg.jpg')]", img: <svg  viewBox="0 0 60 60"   xmlns="http://www.w3.org/2000/svg"> <path d="M16.203 18.0274L0 38.0264H29.001L32.289 28.642H19.842L27.474 19.3838V19.1378L22.548 10.2487H44.739L27.477 60H39.216L60 0H6.342L16.203 18.0274Z"  /> </svg>},
    {name: 'REVOLUT', info: 'Open a Revolut Ac online in 10 minutes', bgUrl: "bg-[url('/revolutbg.jpg')]", img: <svg  viewBox="0 0 60 60"  xmlns="http://www.w3.org/2000/svg"> <path d="M57.9229 17.3925C57.9229 7.8 48.1391 0 36.109 0H0V9.65H34.3922C39.8371 9.65 44.3452 13.065 44.4455 17.26C44.4738 18.2914 44.2422 19.3168 43.7643 20.2753C43.2864 21.2339 42.572 22.106 41.6635 22.84C40.7614 23.5784 39.6826 24.1648 38.4911 24.5642C37.2997 24.9635 36.0198 25.1679 34.7274 25.165H21.3283C21.1001 25.1657 20.8814 25.2383 20.72 25.3671C20.5587 25.4959 20.4676 25.6704 20.4668 25.8525V34.43C20.4668 34.58 20.5211 34.715 20.6297 34.835L43.3615 60H60L37.2149 34.765C48.6905 34.305 57.9229 26.615 57.9229 17.3925ZM14.0038 14.8075H0V60H14.0038V14.8075Z"  /> </svg>},
    {name: 'TIDE', info: 'Open a Tide Ac online in 10 minutes',bgUrl: "bg-[url('/tidebg.jpg')]", img: <svg  viewBox="0 0 60 60"  xmlns="http://www.w3.org/2000/svg"> <path d="M6 36C10.17 36 14.34 34.59 18 32.01C25.32 37.14 34.68 37.14 42 32.01C45.66 34.59 49.83 36 54 36H60V42H54C49.89 42 45.78 40.95 42 39C34.5 42.9 25.5 42.9 18 39C14.22 40.95 10.14 42 6 42H0V36H6ZM18 50.01C25.32 55.14 34.68 55.14 42 50.01C45.66 52.59 49.83 54 54 54H60V60H54C49.89 60 45.78 58.95 42 57C34.5 60.9 25.5 60.9 18 57C14.22 58.95 10.14 60 6 60H0V54H6C10.17 54 14.34 52.59 18 50.01ZM12 24V15H27V9H12V0L0 12" /> </svg>},
]



const BankingSection = () => {
  return (
    <section className="w-full bg-[#183823] ">

        <div className="w-full container mx-auto  px-40 max-xl:px-8 py-16">



        <div className="w-full font-Inter text-white max-w-5xl mx-auto ">
        <h2 className="w-full max-xl:text-start text-center text-4xl font-semibold mb-8 ">Open a business bank account Online with one of our Partners</h2>
        <p className="w-full  max-xl:text-start text-center  mb-12   ">Benefit from a free business bank account when you use our services. There are great options  to  
        choose from and you’ll also get your application fast-tracked. No more long wait times for appointments so you can get  back to the important stuff - running your new business.</p>
        </div>


        <ul className="w-full grid grid-cols-3 gap-8   ">
                {
                    LIST.map((el) => {
                        return (
                            <li key={el.name} className={`p-8 max-w-[250px] mx-auto  w-full flex flex-col  justify-center items-center gap-5  shadow-md  aspect-square rounded-[30px]  cursor-pointer group relative overflow-hidden `}>
                                    <div className={`w-full h-full absolute    bg-[#A6FFB6]  z-[30] group-hover:bg-black/30  transition-all duration-500`}></div>
                                    <div className={`w-full h-full absolute   bg-center bg-cover  ${el.bgUrl} z-[10] scale-125 group-hover:scale-100  transition-all duration-1000`}></div>
                                    <div className="w-full h-full absolute backdrop-blur-[2px] z-[20] "></div>
                                    <div className="w-full flex flex-col justify-center items-center gap-1 z-[50]">
                                    <span className="w-[40px] fill-black group-hover:fill-white group-hover:scale-110 transition-all duration-500">{el.img}</span>
                                    <h3 className="text-2xl font-semibold font-poppins text-black group-hover:text-white group-hover:scale-110 transition-all duration-500">{el.name}</h3>
                                    </div>

                                    
                                    <p className="   text-center  font-Inter text-black group-hover:text-white group-hover:scale-110 z-[50] transition-all duration-500">{el.info}</p>
                            </li>
                        )
                    })
                }
            </ul>















        </div>


    </section>
  )
};

export default BankingSection;
