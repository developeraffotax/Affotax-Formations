import Image from "next/image";
import React from "react";
import Logo2 from "@/public/logo2.png"

const Logo = () => {
  return (
    <div className="  flex justify-center items-center w-32   ">
        <Image src={Logo2}   />
    </div>
  )
};

export default Logo;












// <div className="font-Inter text-2xl flex justify-center items-center gap-1">
//         <span className="w-8 h-8 rounded-full bg-secondary text-white flex justify-center items-center">A</span>
//         <h4 className="text-secondary">Formations.</h4>
//     </div>