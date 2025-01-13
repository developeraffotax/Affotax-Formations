"use client";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

export default function SuccessPage( ) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [orderRef, setOrderRef] = useState('');

  const searchParams = useSearchParams()
 
  const orderId = +searchParams.get('orderId');


   

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("selected_packages");
      localStorage.removeItem("selected_pkg_name");
      localStorage.removeItem("selected_pkg_price");

      localStorage.removeItem("order_ref");
      localStorage.removeItem("token");
    }

    const supabase = createClient();
    (async function () {
     
      const { data:  {user}, error: userError } = await supabase.auth.getUser();
      if (userError) {
        return setError(userError)
      }
       
      setUser(user);

      const { data, error: orderError } = await supabase
          .from('orders')
          .select("order_ref")
          .eq('id', orderId)


          if(!data[0]) {
            
            return setError("Failed to fetch")
          }
          setOrderRef(data[0]?.order_ref)
      
      
    })();
  }, []);


  if (error) {
    return (
      <p className="w-full py-24 text-center text-red-500 font-poppins">
        Access Denied😥😥
      </p>
    );
  }



  if(user && orderRef) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-cyan-100 rounded-full">
              <svg
                className="w-12 h-12 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
  
            <h1 className="mb-6 py-2 font-poppins text-4xl font-bold text-cyan-600">
              Payment Successful!
            </h1>
  
            <p className="mb-8 text-lg text-gray-700">
              Your transaction has been completed successfully, <span className=" text-cyan-500">{`${user?.user_metadata?.account_holder?.forename} ${user?.user_metadata?.account_holder?.surname}`  }.</span>Thank you for your
              purchase! We are processing your order and will send you a
              confirmation email shortly.
            </p>
  
            <div className="p-6 mb-8 rounded-lg bg-cyan-50 font-poppins">
              <p className="text-lg font-medium text-cyan-700">
                Order Reference Number: #{orderRef}
              </p>
            </div>
  
            <div className="flex flex-col justify-start items-center gap-2 pt-5 mt-8 border-t border-gray-100 font-poppins ">
              <p className="text-xl text-gray-700">
                Have questions? Contact us at:
              </p>
              <Link
                href="mailto:support@affotaxformations.com"
                className="inline-block  text-base font-medium text-cyan-600 transition-colors duration-200 hover:text-cyan-700"
              >
                Email: support@affotaxformations.com
              </Link>
              <Link
                href="tel:02081294481"
                className="inline-block  text-base font-medium text-cyan-600 transition-colors duration-200 hover:text-cyan-700"
              >
                Phone: 020 8129 4481
              </Link>
            </div>
  
            <div className="mt-8">
              <Link
                href="/"
                className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-cyan-600 rounded-lg hover:bg-cyan-700"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }









  return (
    <p className="w-full py-24 text-center text-orange-500 font-poppins">
     Loading....
    </p>
  );
 





  

}