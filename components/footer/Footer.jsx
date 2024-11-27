import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-[#62899A80] p-16 max-xl:p-8 font-Inter  ">
        <div className="w-full mx-auto container px-40 max-xl:px-8 ">








                <div className="w-full grid grid-cols-4 max-2xl:grid-cols-2 max-lg:grid-cols-1   gap-0 max-xl:gap-8     ">




                    <ul className="w-full flex flex-col justify-start items-start text-sm gap-2   ">
                        
                    <li className="w-full  text-lg font-semibold border-b py-2 mb-3 ">Company Formation</li>

                        <Link  href='/'>Compare Packages</Link>
                        <Link  href='/'>Basic Package</Link>
                        <Link  href='/'>Privacy Package</Link>
                        <Link  href='/'>Privacy Plus Package</Link>
                        <Link  href='/'>All Inclusive Package</Link>
                        <Link  href='/'>Non-Residents Packages</Link>
                        <Link  href='/'>Scottish Package</Link>
                        <Link  href='/'>Guarantee Package</Link>
                        <Link  href='/'>LLP Package</Link>
                    </ul>


                    <ul className="w-full flex flex-col justify-start items-start text-sm gap-2 ">
                    <li className="w-full  text-lg font-semibold border-b py-2 mb-3 ">Address Services</li>
                        
                        <Link href='/'>Compare Packages</Link>
                        <Link href='/'>Basic Package</Link>
                        <Link href='/'>Privacy Package</Link>
                        <Link href='/'>Privacy Pus Package</Link>
                        <Link href='/'>All Inclusive Package</Link>
                        <Link href='/'>Non-Residents Packages</Link>
                        
                    </ul>


                    <ul className="w-full flex flex-col justify-start items-start text-sm gap-2  ">

                    <li className="w-full  text-lg font-semibold border-b py-2 mb-3 ">Corporate Services</li>
                        
                        <Link  href='/'>Compare Packages</Link>
                        <Link  href='/'>Basic Package</Link>
                        <Link  href='/'>Privacy Package</Link>
                        <Link  href='/'>Privacy Pxus Package</Link>
                        <Link  href='/'>All Inclusive Package</Link>
                        <Link  href='/'>Non-Residents Packages</Link>
                        <Link  href='/'>Scottish Package</Link>
                        <Link  href='/'>Guarantee Package</Link>
                        <Link  href='/'>LLP Package</Link>
                    </ul>



                    <ul className="w-full flex flex-col justify-start items-start text-sm gap-2 ">

                    <li className="w-full  text-lg font-semibold border-b py-2 mb-3  ">Support</li>                            
                        
                        <Link href='/'>Compare Packages</Link>
                        <Link href='/'>Basic Package</Link>
                        <Link href='/'>Privacy Package</Link>
                        <Link href='/'>Privacy Plus Package</Link>
                        <Link href='/'>All Inclusive Package</Link>
                        <Link href='/'>Non-Residents Packages</Link>
                        <Link href='/'>Scottish Package</Link>
                        <Link href='/'>Guarantee Package</Link>
                        <Link href='/'>LLP Package</Link>
                    </ul>



                </div>




        </div>

    </section>
  )
};

export default Footer;
