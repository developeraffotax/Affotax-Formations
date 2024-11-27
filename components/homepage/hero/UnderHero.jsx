import Image from "next/image";
import React from "react";

import Img from '@/public/tick3.png'







const LIST = [
    'HMRC Registered Tax Agent', 'Business bank accounts Opening for non-resident', '24/7 customer support Free tax consultation', 'Ltd London Address Registered Office'
]





const UnderHero = () => {
  return (
    <section className="w-full bg-transparent font-Inter">
        <div className="w-full mx-auto container  ">
            <ul className="w-full flex justify-center gap-4 items-center p-12  max-xl:h-56 h-48   ">
                {
                    LIST.map((el) => {
                        return (
                            <li key={el} className="w-full  h-full   px-4 py-4 bg-white/75 backdrop-blur-md shadow-black/50 shadow-md  rounded-md flex gap-2 justify-start items-start  ">
                                <div className="w-[20%]">
                                <Image src={Img} width={50} />
                                </div>
                                <h3 className="text-xl max-2xl:text-base w-[80%]">
                                    {el}
                                </h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
};

export default UnderHero;
