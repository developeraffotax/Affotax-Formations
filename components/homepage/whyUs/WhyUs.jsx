import React from "react";
import { v4 as uuidv4 } from 'uuid';

import Why1 from '@/public/why1.png';
import Why2 from '@/public/why2.png';
import Why3 from '@/public/why3.png';
import Why4 from '@/public/why4.png';
import Why5 from '@/public/why5.png';
import Why6 from '@/public/why6.png';
import Image from "next/image";

const WHY_US_LIST = [
    {text: 'Experienced  Staff', image: Why1},
    {text: 'Banking introductions',image: Why2},
    {text: 'Pricing', image: Why3},
    {text: 'Accountant Free Consultation',image: Why4},
    {text: 'Home address privacy',image: Why5},
    {text: 'Tax filing support',image: Why6},
    

]













const WhyUs = () => {



  return (
    <section className="w-full  bg-gradient-to-bl from-gray-100 to-orange-50  pt-0 pb-20 font-Inter">
      <div className="w-full container mx-auto px-40 max-xl:px-8">



            <h2 className="w-full text-4xl max-xl:text-3xl  font-semibold font-poppins text-center max-xl:text-start mb-12 max-w-2xl mx-auto">Why Register Your Company with <span className="bg-gradient-to-l from-rose-500 via-orange-500 to-orange-500 text-transparent bg-clip-text  ">Affotax Formation?</span></h2>




            <ul className="w-full grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 gap-8  ">
                {
                    WHY_US_LIST.map((el) => {
                        return (
                            <li key={uuidv4()}  className="w-full  flex flex-col  justify-start items-center gap-1   cursor-pointer transition-all duration-300  hover:-translate-y-1 hover:translate-x-1 hover:scale-105    border-2 border-transparent outline-none ">
                                <div className="w-full hover:drop-shadow-lg  ">
                                  <Image src={el.image} alt={el.text} width={500} height={500} />
                                </div>
                                <h4 className="text-xl font-Montserrat      ">{el.text}</h4>
                            </li>
                        )
                    })
                }
            </ul>


























      </div>
    </section>
  );
};

export default WhyUs;






























// import React from "react";
// import { v4 as uuidv4 } from 'uuid';


// const WHY_US_LIST = [
//     {text: 'Experienced  Staff', svg: <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" className="w-full"  viewBox="0 0 39.66 39.66"  stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="_x31__143_"> <g> <path d="M4.619,15.479c0.888,3.39,3.752,6.513,7.382,6.513c3.684,0,6.594-3.109,7.504-6.49c0.346-0.039,0.632-0.303,0.663-0.663 l0.115-1.336c0.029-0.348-0.189-0.646-0.506-0.756c-0.006-0.08-0.008-0.161-0.017-0.24c-0.068-3.062-0.6-5.534-3.01-6.556 c-2.544-1.078-4.786-1.093-6.432-0.453C10.21,5.541,9.931,5.912,9.822,5.979C9.713,6.046,9.136,5.856,8.917,5.907 c-3.61,0.516-4.801,3.917-4.538,6.569C4.371,12.55,4.366,12.625,4.36,12.7c-0.349,0.087-0.599,0.404-0.567,0.774l0.114,1.336 C3.94,15.188,4.25,15.462,4.619,15.479z M5.388,12.833c1.581-0.579,4.622-1.79,4.952-2.426c1.383,1.437,6.267,2.244,8.411,2.513 c0.009,0.139,0.021,0.274,0.021,0.414c0,3.525-2.958,7.623-6.771,7.623c-3.799,0-6.638-4.024-6.638-7.623 C5.362,13.165,5.375,13,5.388,12.833z"></path> <path d="M17.818,20.777c-0.19-0.029-0.376,0.014-0.498,0.063l-3.041,4.113l-2.307-1.84l-0.014,0.012v0.013l-0.003-0.003 l-2.307,1.84l-3.041-4.113c-0.121-0.05-0.308-0.093-0.498-0.064C0.364,21.608,0,34.584,0,34.584l11.969,0.008v-0.021 l11.958-0.008C23.928,34.563,23.562,21.587,17.818,20.777z"></path> <path d="M23.997,15.302c0.72,2.75,3.044,5.281,5.987,5.281c2.988,0,5.349-2.521,6.087-5.264c0.28-0.032,0.513-0.245,0.538-0.537 l0.093-1.083c0.024-0.283-0.154-0.525-0.411-0.614c-0.004-0.063-0.007-0.13-0.014-0.193c-0.055-2.483-0.486-4.49-2.44-5.318 c-2.063-0.874-3.882-0.887-5.217-0.368c-0.087,0.035-0.313,0.336-0.401,0.392c-0.09,0.055-0.557-0.101-0.734-0.059 c-2.928,0.418-3.895,3.177-3.682,5.328c-0.007,0.061-0.01,0.121-0.015,0.182c-0.283,0.071-0.485,0.328-0.459,0.627l0.092,1.083 C23.446,15.065,23.698,15.288,23.997,15.302z M24.62,13.155c1.282-0.47,3.75-1.452,4.017-1.968 c1.123,1.164,5.084,1.818,6.822,2.039c0.008,0.11,0.018,0.222,0.018,0.335c0,2.858-2.398,6.183-5.492,6.183 c-3.082,0-5.385-3.264-5.385-6.183C24.6,13.425,24.609,13.29,24.62,13.155z"></path> <path d="M34.703,19.6c-0.154-0.024-0.305,0.011-0.402,0.05l-2.468,3.337l-1.871-1.492l-0.011,0.009v0.011l-0.003-0.002 l-1.871,1.492l-2.468-3.337c-0.098-0.04-0.25-0.073-0.402-0.05c-1.521,0.214-2.574,1.482-3.307,3.089 c0.433,0.669,1.043,1.736,1.56,3.14c0.515,1.395,0.856,3.295,1.078,4.958l5.422,0.003v-0.018l9.7-0.006 C39.659,30.781,39.363,20.254,34.703,19.6z"></path> </g> </g> </g> </g></svg>},
//     {text: 'Home address privacy', svg: <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="#000000"></path> </g></svg>},
//     {text: 'Pricing', svg: <svg fill="#000000" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m13.842 11.52-4.389 4.388a1.112 1.112 0 0 1-1.567 0l-6.28-6.28a3.027 3.027 0 0 1-.771-1.892l.043-3.681A1.141 1.141 0 0 1 2 2.935L5.67 2.9a3.04 3.04 0 0 1 1.892.773l6.28 6.28a1.112 1.112 0 0 1 0 1.567zM3.826 5.133a.792.792 0 1 0-.792.792.792.792 0 0 0 .792-.792zm6.594 7.348a.554.554 0 0 0 0-.784l-.401-.401a2.53 2.53 0 0 0 .35-.83 1.565 1.565 0 0 0-.397-1.503 1.59 1.59 0 0 0-1.017-.46 2.14 2.14 0 0 0-.75.085h-.002a2.444 2.444 0 0 0-.59.277H7.61a2.677 2.677 0 0 0-.438.357 2.043 2.043 0 0 1-.259.22 1.29 1.29 0 0 1-.329.17h-.002a.835.835 0 0 1-.338.038h-.002a.53.53 0 0 1-.314-.136.539.539 0 0 1-.106-.534 1.54 1.54 0 0 1 .41-.71 1.632 1.632 0 0 1 .23-.165l.03-.019a1.783 1.783 0 0 1 .322-.155.942.942 0 0 1 .325-.06.554.554 0 0 0 0-1.108h-.001a2.058 2.058 0 0 0-.717.132 2.846 2.846 0 0 0-.529.26l-.01.006-.398-.4a.554.554 0 1 0-.784.785l.388.387a2.513 2.513 0 0 0-.347.803 1.644 1.644 0 0 0 .404 1.561 1.622 1.622 0 0 0 .983.456 1.922 1.922 0 0 0 .805-.089 2.372 2.372 0 0 0 .624-.319 3.142 3.142 0 0 0 .398-.339 1.569 1.569 0 0 1 .256-.208 1.381 1.381 0 0 1 .32-.151 1.023 1.023 0 0 1 .348-.038.485.485 0 0 1 .308.139c.05.049.165.165.097.488a1.558 1.558 0 0 1-.413.729 2.476 2.476 0 0 1-.28.219 1.727 1.727 0 0 1-.306.157.687.687 0 0 1-.32.042.554.554 0 1 0-.08 1.106c.052.004.103.005.152.005a1.723 1.723 0 0 0 .685-.134 2.678 2.678 0 0 0 .507-.27l.01-.007.397.398a.555.555 0 0 0 .783 0z"></path></g></svg>},
//     {text: 'Tax filing support',},
//     {text: 'Banking introductions',},
//     {text: 'Accountant Free Consultation',},
    

// ]


// const WhyUs = () => {



//   return (
//     <section className="w-full  bg-gradient-to-bl from-gray-100 to-orange-50  pt-0 pb-20 font-Inter">
//       <div className="w-full container mx-auto px-40 max-xl:px-8">



//             <h2 className="w-full text-4xl max-xl:text-3xl  font-semibold font-poppins text-center max-xl:text-start mb-12 max-w-2xl mx-auto">Why Choose Your Company with Affotax Formation</h2>




//             <ul className="w-full grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 gap-6  ">
//                 {
//                     WHY_US_LIST.map((el) => {
//                         return (
//                             <li key={uuidv4()}  className=" flex flex-row  justify-start items-center gap-1 bg-teal-50/30 backdrop-blur-md rounded-lg shadow-md px-3 py-3 cursor-pointer transition-all duration-300  hover:-translate-y-1 hover:translate-x-1 hover:scale-105 hover:shadow-orange-300/25 hover:border-orange-300 border-2 border-transparent outline-none ">
//                                 <span className="w-12   "><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM14.4743 8.419C14.7952 8.68094 14.8429 9.15341 14.581 9.47428L8.86671 16.4743C8.72427 16.6488 8.51096 16.75 8.28571 16.75C8.06047 16.75 7.84716 16.6488 7.70472 16.4743L5.419 13.6743C5.15707 13.3534 5.20484 12.8809 5.52572 12.619C5.84659 12.3571 6.31906 12.4048 6.581 12.7257L8.28571 14.814L13.419 8.52572C13.6809 8.20484 14.1534 8.15707 14.4743 8.419ZM18.4743 8.41901C18.7952 8.68095 18.8429 9.15342 18.581 9.47429L12.8665 16.4743C12.7152 16.6596 12.4846 16.7617 12.2457 16.7489C12.0068 16.7362 11.7883 16.6103 11.6575 16.4099L11.3719 15.9724C11.1455 15.6256 11.2432 15.1608 11.5901 14.9344C11.7939 14.8014 12.0384 14.7803 12.2514 14.8558L17.419 8.52571C17.681 8.20484 18.1534 8.15707 18.4743 8.41901Z" fill="#FC6600"></path> </g></svg></span>
//                                 <h4 className="text-2xl font-Inter    ">{el.text}</h4>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>


//       </div>
//     </section>
//   );
// };

// export default WhyUs;