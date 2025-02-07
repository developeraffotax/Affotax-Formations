"use client";

import Header from "@/components/header/Header";
 

import Footer from "@/components/footer/Footer";
import Providers from "@/app/(user)/(visitor)/providers.js";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
 



export default function RootLayout({ children }) {








  return (
    
      <div>
        
        <Providers>
          
          <Header />
          <div className="mt-[112px] max-xl:mt-20">{children}</div>
          <Footer />
          
        </Providers>
      </div>
   
  );
}
