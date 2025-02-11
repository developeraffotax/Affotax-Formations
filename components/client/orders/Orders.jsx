"use client";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { createClient } from "@/lib/supabase/client";
import { UserContext } from "@/app/(user)/layout";
import Link from "next/link";





const Orders = () => {

   

  const [rows, setRows] = useState([]);

  // const [userData, setUserData] = useState(null)

  const [isLoading, setIsLoading] = useState(false);

  const columns = useMemo(() => {
    return   [
      { field: "sr", headerName: "Sr.", width: 50 },
      { field: "order_ref", headerName: "Order Ref", width: 150, renderCell: params => <Link className="text-blue-500 " href={`/client/orders/${params?.value}`}>#{params?.value}</Link> },
      { field: "status", headerName: "Status", width: 100 },
      { field: "total", headerName: "Total Price", width: 100 },
      { field: "shipping_address", headerName: "Shipping Address", width: 200 },
      { field: "ordered_at", headerName: "Ordered At", width: 150 },
    ];
  }, [])

  const getOrdersData = useCallback(async () => {

    const supabase = createClient();

    setIsLoading(true);

    const {data: {user}, error: userError} = await supabase.auth.getUser();
 
    // if(userError) {
    //   return; 
    // } else {
    //   setUserData(user)
    // }

    const { data, error } = await supabase
      .from("orders")
      .select()
      .eq("user_id", user?.id);

     
    if (data) {
      const mappedData = data.map((el, index) => {
        return {
          sr: index + 1,
          id: el.id,
          total: el.total,
          status: el.status,
          order_ref: el.order_ref,
          shipping_address: el.shipping_address,
          ordered_at: el.created_at.split("T")[0],
        };
      });
      setIsLoading(false);
      setRows(mappedData);
    }
  }, [])



  useEffect(() => {
    
    getOrdersData();
  }, [getOrdersData]);



  return (
    <div className="  w-full ">
      <DataGrid
        className="w-full max-w-none "
        
        rows={rows}
        columns={columns}
        loading={isLoading}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        density="compact"
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default Orders;
