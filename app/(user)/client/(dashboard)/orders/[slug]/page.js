 
import OrderDetail from "@/components/client/orders/OrderDetail/OrderDetail";
import React from "react";

const page = async ({ params }) => {
    const slug = (await params).slug;
     console.log(slug)

     

        

    return <OrderDetail slug={slug} />
};

export default page;
