"use client";

import LayoutHOC from "@/components/packages/LayoutHOC";
import { useEffect, useState } from "react";

export default function PackagesLayout({ children }) {
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    const company_name = localStorage.getItem("company_name");

    if (company_name) {
      setCompanyName(company_name);
    } else {
      return;
    }
    console.log(companyName);
  }, []);




  return (
    <>
      <LayoutHOC companyName={companyName}>{children}</LayoutHOC>
    </>
  );
}
