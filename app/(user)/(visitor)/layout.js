"use client";

import Header from "@/components/header/Header";
 

import Footer from "@/components/footer/Footer";
import Providers from "@/app/(user)/(visitor)/providers.js";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
 



export default function RootLayout({ children }) {








  return (
    
      <div>
        
        <Providers>
          
          <Header />
          <Link href={"https://wa.me/447723143223"} target="_blank"> <IoLogoWhatsapp className="fixed size-16 right-5 bottom-12 hover:cursor-pointer hover:scale-110 text-green-500 z-50 " /> </Link>

          <div className="mt-[112px] max-xl:mt-20">{children}</div>
          <Footer />
          
        </Providers>
      </div>
   
  );
}
