"use client"

import  { useCallback, useContext, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
 
 
 
 



const columns = [
  { field: 'sr', headerName: 'Sr.', width: 50 },
  { field: 'company_name', headerName: 'Company Name', width: 200, renderCell: params => <Link className="text-blue-500 " href={`/client/companies/${params?.row?.id}`}>{params?.value}</Link>},
  { field: 'sic_codes', headerName: 'SIC Codes', width: 150 },
  { field: 'registered_in', headerName: 'Registered In', width: 150 },
  { field: 'created_at', headerName: 'Created At', width: 150,  },
];


    

const Companies = () => {

  


    const [rows, setRows] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    
    const getCompaniesData = useCallback(async() => {
        const supabase = createClient()
        setIsLoading(true)

        const {data: {user}, error: userError} = await supabase.auth.getUser();

        const { data, error } = await supabase.from("company_info").select().eq('user_id', user.id )
        //const { data, error } = await supabase.from("company_info").select().eq('user_id', user.id )

        
        console.log(error)
        if (data) {
            
            const mappedData = data.map((el, index) => {
                return {    
                    sr: index + 1,
                    id: el.id,
                    company_name: `${el.company_name} ${el.company_suffix}`,
                    sic_codes: el.sic_codes.join(", "),
                    registered_in: el.registered_in,
                    created_at: el.created_at.split("T")[0]
                }
            })
            setIsLoading(false)
            setRows(mappedData)
        }


    }, []);




    useEffect(() => {

        getCompaniesData()


    }, [getCompaniesData])








  return  <div className="  w-full ">
    
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
};

export default Companies;
