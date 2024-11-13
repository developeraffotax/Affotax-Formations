import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";


const LIST = [
  {step: 'Choose a company name', icon: <IoMdSearch />, id: uuidv4()},
  {step: 'Select your package', icon: <MdOutlineLocalOffer />, id: uuidv4()},
  {step: 'Checkout and pay', icon: <FaRegCircleCheck />, id: uuidv4()},
  {step: 'Complete your order', icon: <IoBagCheckOutline />, id: uuidv4()},
]

const Steps = () => {
  return (
    <section  className="w-full bg-[#F3EFEA] ">
      <div className="w-full mx-auto container">
      <div className="w-full px-4 py-16  ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"> <span className="relative inline-block"> {" "} <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block" > {" "} <defs> {" "} <pattern id="f51618fb-0edb-4bcb-b35a-ffc770941286" x="0" y="0" width=".135" height=".30" > {" "} <circle cx="1" cy="1" r=".7" />{" "} </pattern>{" "} </defs>{" "} <rect fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)" width="52" height="24" />{" "} </svg> </span>{" "} Company formation in 4 simple steps </h2>
        <p className="text-base text-gray-700 md:text-lg"> Our easy company registration whole process can be completed within 15mint. </p>
      </div>

      <div className="grid gap-8 row-gap-0 lg:grid-cols-4  ">
        {
          LIST.map((el, i) => {
            return (
              <div key={el.id} className="relative text-center">
            
                  <div className="flex shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.2)] items-center justify-center text-5xl text-primary mx-auto mb-4 rounded-full mesh3  sm:w-32 sm:h-32">
                      {el.icon}
                  </div>


                  <h6 className="mb-2 text-2xl font-bold">Step {i+1}</h6>

                  <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                  {el.step}
                  </p>

                  {
                    !(i === LIST.length - 1) && <div className="top-0 right-0 flex items-center justify-center h-36 lg:-mr-8 lg:absolute">
                    <svg className="w-8 text-gray-700 transform rotate-90 lg:rotate-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" > {" "} <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12" />{" "} <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 " />{" "} </svg>
                  </div>
                  }

          
        </div>
            )
          })
        }
      </div>
    </div>
      </div>
    </section>
  );
};



export default Steps;
















































// const Steps = () => {
//   return (
//     <section className="w-full py-20 ">
//         <div className="w-full container mx-auto font-Inter">

//             <h2 className="w-full text-5xl font-bold text-center  bg-gradient-to-br from-secondary via-orange-600 to-orange-800 bg-clip-text text-transparent py-4">Company formation in 4 simple steps</h2>
//             <p className="w-full text-base text-center mb-12">Our easy company registration whole process can be completed within 15mint.</p>

//             <ul className='w-full flex flex-row justify-center gap-8 items-center p-32'>

//                 {
//                     LIST.map((el, i) => {
//                         return (
//                             <li key={el} className="w-full flex flex-col gap-4  justify-start items-center  ">
//                                 <span className="w-36 h-36 rounded-full bg-orange-50 text-orange-700 backdrop-blur-sm p-4   font-semibold text-5xl flex justify-center items-center">{i+1}</span>
//                                 <h4>{el}</h4>
//                             </li>

//                         )
//                     })
//                 }

//             </ul>

//         </div>
//     </section>
//   )
// };