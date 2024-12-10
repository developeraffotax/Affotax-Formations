// "use client"

// import React from "react";

// import Wise from '@/public/icon1.png'
// import Revolut from '@/public/icon2.png'
// import Tide from '@/public/icon3.png'
// import Image from "next/image";


// import Wisebg from '@/public/wisebg.jpg'
// import Revolutbg from '@/public/wisebg.jpg'
// import Tidebg from '@/public/wisebg.jpg'








// const LIST = [
//     {title: 'Experienced Staff',  bgUrl: "bg-[url('/staff.jpg')]", },
//     {title: 'Banking Introduction',  bgUrl: "bg-[url('/banking.jpg')]", },
//     {title: 'Price', bgUrl: "bg-[url('/pricing.jpg')]", },
//     {title: 'Accountant Free Consultation',  bgUrl: "bg-[url('/consultation.jpg')]", },
//     {title: 'Home Address Privacy',  bgUrl: "bg-[url('/address.jpg')]", },
//     {title: 'Tax Filing Support', bgUrl: "bg-[url('/tax.jpg')]", },
// ]



// const WhyUsSection = () => {
//   return (
//     <section className="w-full   ">

//         <div className="w-full container mx-auto  px-40 max-xl:px-8 py-16">



//         <div className="w-full font-Inter text-black max-w-5xl mx-auto ">
//         <h2 className="w-full max-xl:text-start text-center text-4xl font-semibold mb-8 ">Why Register your company with Affotax Formation?</h2>
        
//         </div>


//         <ul className="w-full grid grid-cols-3 gap-16 py-12  ">
//                 {
//                     LIST.map((el) => {
//                         return (
//                             <li key={el.title + 'why-us'} className={`p-8 max-w-[400px] mx-auto  w-full flex flex-col  justify-center items-center gap-5  shadow-md shadow-black/30 aspect-square   cursor-pointer group relative overflow-hidden `}>
//                                     <div className={`w-full h-full absolute    bg-gradient-to-r from-gray-100 to-gray-300 z-[30] group-hover:from-black/50 group-hover:to-black/40  transition-all duration-500`}></div>
//                                     <div className={`w-full h-full absolute   bg-center bg-cover  ${el.bgUrl} z-[10] scale-125 group-hover:scale-100  transition-all duration-1000`}></div>
//                                     <div className="w-full h-full absolute backdrop-blur-[0px] z-[20] "></div>
//                                     <div className="w-full flex flex-col justify-center items-center gap-1 z-[50]">
//                                     {/* <span className="w-[40px] fill-black group-hover:fill-white group-hover:scale-110 transition-all duration-500">{el.img}</span> */}
//                                     <h3 className="text-4xl font-semibold text-center font-poppins text-black group-hover:text-white group-hover:scale-110 transition-all duration-500 ">{el.title}</h3>
//                                     </div>

                                    
//                                     {/* <p className="   text-center  font-Inter text-black group-hover:text-white group-hover:scale-110 z-[50] transition-all duration-500">{el.info}</p> */}
//                             </li>
//                         )
//                     })
//                 }
//             </ul>















//         </div>


//     </section>
//   )
// };

// export default WhyUsSection;
