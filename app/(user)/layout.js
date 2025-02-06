"use client";

import Header from "@/components/header/Header";
 

import Footer from "@/components/footer/Footer";
import Providers from "@/app/(user)/providers.js";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
 

export const UserContext = createContext();

export default function RootLayout({ children }) {


  // useEffect(() => {
  //   const navbar = document.getElementById("main-header");
  //   const navbarMobile = document.getElementById("main-header-mobile");
  //   window.onscroll = function (e) {

  //     if (
  //       document.body.scrollTop >= 100 ||
  //       document.documentElement.scrollTop >= 100
  //     ) {
  //       navbar.classList.add("bg-slate-100/50",);
  //       navbar.classList.remove("bg-slate-100", );

  //       navbarMobile.classList.add("bg-slate-100/50",);
  //       navbarMobile.classList.remove("bg-slate-100", );
  //     } else {

  //       navbar.classList.add("bg-slate-100",);
  //       navbar.classList.remove("bg-slate-100/50",);

  //       navbarMobile.classList.add("bg-slate-100",);
  //       navbarMobile.classList.remove("bg-slate-100/50",);

  //     }
  //   };
  // }, [])





  const [user, setUser] = useState(null);

  useEffect(() => {



    if (typeof window !== "undefined") {
      window.addEventListener('offline', () => {
        console.log('Network is now offline');
        toast.error('Network Error! ', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
      });
      
      window.addEventListener('online', () => {
        console.log('Network is online');
        toast.success("You're online!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
      });
    }


















    const supabase = createClient();

    const { data } = supabase.auth.onAuthStateChange( (event, session) => {
      


      // if (event === 'SIGNED_OUT'  ) {
       
      //   Cookies.remove('my-access-token');
      //   Cookies.remove('my-refresh-token' );
      // } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {


      //   Cookies.set('my-access-token', session.access_token, { expires: 7, path: '' });
      //   Cookies.set('my-refresh-token', session.refresh_token, { expires: 7, path: '' });


         
      // }






      // console.log(event)

      // if (event == "PASSWORD_RECOVERY") {
      //   const newPassword = prompt("What would you like your new password to be?");
      //   // const { data, error } = await supabase.auth
      //   //   .updateUser({ password: newPassword })
 
      //   // if (data) alert("Password updated successfully!")
      //   // if (error) alert("There was an error updating your password.")

      //   }

      // If there is a session (user is logged in)
      if (session) {
        
       
        // console.log(event)
        // console.log(session)


        setUser(session.user);
      } else {
        // If no session (user is logged out)
        setUser(null);
      }
    });

    // Cleanup listener when the component unmounts
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);



  return (
    
      <div>
         <ToastContainer />
        <Providers>
          <UserContext.Provider value={{user, setUser}}>
          <Header />
          <div className="mt-[112px] max-xl:mt-20">{children}</div>
          <Footer />
          </UserContext.Provider>
        </Providers>
      </div>
   
  );
}
