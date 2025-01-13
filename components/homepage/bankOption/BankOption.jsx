import Image from "next/image";
import React from "react";

import Wise from '@/public/wise.png'
import Revolut from '@/public/revolut.png'
import Tide from '@/public/tide.png'


const LIST = [
    {name: 'WISE', info: 'Open a Wise Ac online in 5 minutes', img: Wise},
    {name: 'REVOLUT', info: 'Open a Revolut Ac online in 10 minutes', img: Revolut},
    {name: 'TIDE', info: 'Open a Tide Ac online in 10 minutes', img: Tide},
]




const BankOption = () => {





  return (
    <section className="w-full bg-gradient-to-bl from-gray-100 to-orange-50 pt-16 pb-16  font-Inter relative ">

       

        <div className="w-full mx-auto container px-40 max-xl:px-8">


            <h2 className="w-full max-xl:text-start text-center text-4xl font-semibold mb-8 text-black">Open a business bank account Online with one of our Partners</h2>
            <div className="w-full flex justify-center ">
            <p className="w-full  max-xl:text-start text-center  mb-4 max-w-3xl text-black ">Benefit from a free business bank account when you use our services. There are great options to choose from and you’ll also get your application fast-tracked. No more long wait times for appointments so you can get  back to the important stuff - running your new business.</p>
            </div>


            <ul className="w-full p-8 flex flex-row max-xl:flex-col  justify-end items-center gap-8 ">
                {
                    LIST.map((el) => {
                        return (
                            <li key={el.name} className="p-4 w-full flex flex-col justify-center items-center gap-4 bg-white/40 shadow-md   rounded-2xl backdrop-blur-md">
                                    <div className="w-full flex  justify-center items-center gap-2 ">
                                    <span className=" "><Image src={el.img} className="w-[40px] rounded-full overflow-hidden" alt={el.name}  /></span>
                                    <h3 className="text-2xl font-semibold font-poppins  ">{el.name}</h3>
                                    </div>
                                    <p className="text-lg text-gray-700  max-xl:text-center max-xl:text-sm  ">{el.info}</p>
                            </li>
                        )
                    })
                }
            </ul>


        </div>
    </section>
  )
};

export default BankOption;
