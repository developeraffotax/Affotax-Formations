"use client"

import  { useCallback, useContext, useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { createClient } from "@/lib/supabase/client";
import { UserContext } from "@/app/(user)/(visitor)/layout";
 
 
 

// const rows2: GridRowsProp = [
//   { id: 1, company_name: 'Hello', sic_codes: 'World', registered_in: 'England & Wales' },
//   { id: 2, company_name: 'DataGridPro', sic_codes: 'is Awesome', registered_in: 'England & Wales' },
//   { id: 3, company_name: 'MUI', sic_codes: 'is Amazing', registered_in: 'England & Wales' },
// ];


  
  // Define a Row type for the data displayed in the DataGrid
//   interface Row {
//     sr: number;  // Serial number for display
//     id: string;  // The id will not be displayed in the UI
//     company_name: string;
//     sic_codes: string;  // This will be a string after mapping from array
//     registered_in: string;
//     created_at: string;
//   }



const columns = [
  { field: 'sr', headerName: 'Sr.', width: 100 },
  { field: 'company_name', headerName: 'Company Name', width: 150 },
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
        const { data, error } = await supabase.from("company_info").select()

        
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
  <DataGrid className="w-full max-w-none " rows={rows} columns={columns} loading={isLoading}/>
</div>
};

export default Companies;
