'use client'

import Header from "@/components/header/Header";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import Providers from "@/app/providers.js";


// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };






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


  return (
    <html lang="en">
      <body>
      <Providers>
        <Header />
        <div className="mt-[112px] max-xl:mt-20">
        {children}

        </div>
        <Footer />
        </Providers>
        </body>
    </html>
  );
}
