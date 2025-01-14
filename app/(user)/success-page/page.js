"use client";

import { Suspense, useEffect, useState } from "react";
import UserAndOrder from "./UserAndOrder";

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
      localStorage.removeItem("token");
      localStorage.removeItem("company_name");
    }
  }, []);

  return (
    <>
      {isLoading && !error ? (
        <p className="w-full py-24 text-center text-orange-500 font-poppins">
          Loading....
        </p>
      ) : (
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
      )}

      {error && (
        <p className="w-full py-24 text-center text-red-500 font-poppins">
          {" "}
          Access Denied😥😥{" "}
        </p>
      )}
    </>
  );
}
