import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GrContact } from "react-icons/gr";

const Footer = () => {
  return (
    <section className="w-full bg-[#62899A80] p-16 max-xl:p-8 font-Inter  ">
        <div className="w-full mx-auto container px-40 max-xl:px-8 ">








                <div className="w-full grid grid-cols-4 max-2xl:grid-cols-2 max-lg:grid-cols-1   gap-0 max-xl:gap-8     ">




                    <ul className="w-full flex flex-col justify-start items-start text-sm gap-2   ">
                        
                    <li className="w-full  text-lg font-semibold border-b py-2 mb-3 ">Company Formation</li>

                        <Link className="hover:text-orange-500"  href='/search-company-name?company=limited-company&package=basic-package'>Basic Package</Link>
                        <Link className="hover:text-orange-500"  href='/search-company-name?company=limited-company&package=standard-package'>Standard Package</Link>
                        <Link className="hover:text-orange-500"  href='/search-company-name?company=limited-company&package=premium-package'>Premium Package</Link>
                        <Link className="hover:text-orange-500"  href='/search-company-name?company=limited-company&package=all-inclusive-package'>All-Inclusive Package</Link>

                        <Link className="hover:text-orange-500"  href='/packages/limited-company'>Limited Company Package
                        </Link>
                        <Link className="hover:text-orange-500"  href='/packages/non-residents'>Non-Residents Package</Link>
                        <Link className="hover:text-orange-500"  href='/packages/llp'>LLP Package</Link>
                        
                    </ul>


                    <ul className="w-full flex flex-col justify-start items-start text-sm gap-2 ">
                    <li className="w-full  text-lg font-semibold border-b py-2 mb-3 ">Address Services</li>
                        
                        <Link className="hover:text-orange-500" href='/service/registered-office-address'>London Registered address </Link>
                        <Link className="hover:text-orange-500" href='/service/director-service-address'> London Service address </Link>
                        <Link className="hover:text-orange-500" href='/service/non-uk-resident-business-address'> London Business address</Link>
                        <Link className="hover:text-orange-500" href='/service/annual-renewals'>Address Renewals </Link>
                       
                        
                    </ul>


                    <ul className="w-full flex flex-col justify-start items-start text-sm gap-2  ">

                    <li className="w-full  text-lg font-semibold border-b py-2 mb-3 ">Accounting Services</li>
                        
                        <Link className="hover:text-orange-500"  href='/service/vat-registration'>VAT Registration </Link>
                        <Link className="hover:text-orange-500"  href='/service/dormant-company-accounts'>Dormant Accounts </Link>
                        <Link className="hover:text-orange-500"  href='/service/company-name-change'>Company Name Change </Link>
                        <Link className="hover:text-orange-500"  href='/service/issue-and-transfer-of-shares'>Shares Transfer </Link>
                        <Link className="hover:text-orange-500"  href='/service/confirmation-statement-filing'>Confirmation Statement </Link>
                        <Link className="hover:text-orange-500"  href='/service/company-secretary-service'>Company Secreterial </Link>
                        <Link className="hover:text-orange-500"  href='/service/company-dissolution'>Company Dissolution </Link>
                        
                    </ul>



                    {/* <ul className="w-full flex flex-col justify-start items-start text-sm gap-2 ">

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
                    </ul> */}








                    <ul className="w-full flex flex-col justify-start items-start text-sm gap-2 ">

                    <li className="w-full  text-lg font-semibold border-b py-2 mb-3  ">Support</li>                            
                        
                        <li className="flex justify-start items-center gap-2">   <span className="flex justify-start items-center gap-1"><span className="text-gray-800 text-xl"><AiOutlineMail /></span>Email: </span> <Link className="hover:text-orange-500 hover:scale-105 active:scale-95 transition-all" href='mailto:info@affotax.com'>info@affotax.com</Link></li>
                        <li className="flex justify-start items-center gap-2"><span  className="flex justify-start items-center gap-1"><span className="text-gray-800 text-xl"><FiPhone /></span>Phone: </span><Link className="hover:text-orange-500 hover:scale-105 active:scale-95 transition-all" href='tel:02081294481'  >020 8129 4481</Link></li>
                        <li className="flex justify-start items-center gap-2"><span  className="flex justify-start items-center gap-1"><span className="text-green-600 text-xl"><FaWhatsapp /></span>Whatsapp: </span><Link className="hover:text-orange-500 hover:scale-105 active:scale-95 transition-all" href='https://wa.me/447723143223' target="_blank">+44 7723 143223</Link></li>
                        <li className="flex justify-start items-center gap-2"><span  className="flex justify-start items-center gap-1"><span className="text-gray-800 text-xl"><GrContact /></span>Contact Us: </span><Link className="hover:text-orange-500 hover:scale-105 active:scale-95 transition-all" href='/contact-us'>Leave a Message</Link></li>
                        
                    </ul>



                </div>




        </div>

    </section>
  )
};

export default Footer;
