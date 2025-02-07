import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Left from "@/public/successLeft.png"
import Right from "@/public/successRight.png"
export default function SuccessPage() {
  return (
    <>
       
        <div className="w-full flex flex-col justify-center items-center gap-2 relative py-36 font-poppins">


                <span className="text-[150px]  "><IoCheckmarkCircleOutline className="text-orange-500 " /></span>
                <h2 className=" text-6xl font-semibold  p-4   bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text" >Thank You!</h2>

                <h3 className="mb-8 text-xl ">We have received your company submission form.</h3>

                <h4 className="text-orange-500 ">For any query Contact us on:</h4>

               <Link href="tel:02081446811" target="_blank" className="flex justify-center items-center gap-2 hover:scale-105 hover:text-orange-500 active:scale-95 transition-all cursor-pointer"> <span><FaPhone /> </span> <h5>Phone: 020 8129 4481</h5></Link >
               <Link href="mailto:info@affotax.com" target="_blank" className="flex justify-center items-center gap-2 hover:scale-105 hover:text-orange-500 active:scale-95 transition-all cursor-pointer"> <span><MdEmail /> </span> <h5>Email: info@affotax.com</h5></Link >
                 

        <div className="absolute right-0 top-[10%]"> <Image src={Right} width={400} height={400} alt="success-left" className="w-[150px]"/> </div>
        <div className="absolute left-0 bottom-[10%]"> <Image src={Left} width={400} height={400} alt="success-left" className="w-[150px]"/> </div>



        </div>



       







    </>
  );
}
