"use client";

import { Suspense, useEffect, useState } from "react";
import UserAndOrder from "./UserAndOrder";
import PackageHeader from "./PackageHeader";

export default function SuccessPage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [orderRef, setOrderRef] = useState("");
 

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("selected_packages");
      localStorage.removeItem("selected_pkg_name");
      localStorage.removeItem("selected_pkg_price");

      localStorage.removeItem("order_ref");
      // localStorage.removeItem("token");
      localStorage.removeItem("company_name");
    }
  }, []);

  return (
    <>

      



      {(isLoading && !error) ? (
        <p className="w-full py-24 text-center text-orange-500 font-poppins">
          Loading....
        </p>
      ) : (!isLoading && !error) ? (
        <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 ">
         <div className="  max-lg:hidden w-full  container mx-auto    px-40 max-xl:px-8   "><PackageHeader /> </div>
        <Suspense fallback={<p>Loading....!! Please wait</p>}>
          <UserAndOrder
            user={user}
            setUser={setUser}
            error={error}
            setError={setError}
            orderRef={orderRef}
            setOrderRef={setOrderRef}
            setIsLoading={setIsLoading}
          />
        </Suspense>
        </div>
      ) : null } 

      {error && (
        <p className="w-full py-24 text-center text-red-500 font-poppins">
          {" "}
          Access Denied😥😥{" "}
        </p>
      )}
    </>
  );
}
