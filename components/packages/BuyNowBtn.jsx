"use client";

import Link from "next/link";
import React from "react";

const BuyNowBtn = ({ href, company,  pkg }) => {


  


  return (
    <>
      <Link href={!localStorage?.getItem('company_name') ? `/search-company-name?company=${company}&package=${pkg}` : href}>
        <button className="bg-orange-500 shadow-sm shadow-black/30 text-white px-4 py-2 rounded-lg hover:bg-cyan-500 hover:scale-105 active:scale-95 transition-all  ">
          BUY NOW
        </button>
      </Link>
      <Link href="/" className="text-sm text-orange-500 underline  ">
        Read More
      </Link>
    </>
  );
};

export default BuyNowBtn;
