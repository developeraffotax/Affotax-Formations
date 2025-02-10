import CompanyDetail from "@/components/client/companies/CompanyDetail";
import React from "react";

const page = async ({ params }) => {
    const slug = (await params).slug;
    console.log(slug)

    return <CompanyDetail id={slug} />
};

export default page;
