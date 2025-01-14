"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const CompanyName = () => {
  const searchParams = useSearchParams();

  return (
    <span className="text-orange-500 ">
      {searchParams
        .get("package")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}
    </span>
  );
};

export default CompanyName;
