"use client";

import Link from "next/link";
import React from "react";

const BuyNowBtn = ({ href, company,  pkg }) => {


  


  return (
    <>
      <Link href={!localStorage?.getItem('company_name') ? `/search-company-name?company=${company}&package=${pkg}` : href}>
        <button className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 active:scale-95 transition-all">
          BUY NOW
        </button>
      </Link>
       
    </>
  );
};

export default BuyNowBtn;
