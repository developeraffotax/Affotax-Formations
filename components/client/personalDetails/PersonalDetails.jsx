"use client"
import { createClient } from "@/lib/supabase/client";
import { Button, Divider, Grid, Grid2, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
 const PersonalDetails = () => {





    const [personal_details, set_personal_details] = useState({
      title: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      gender: '',
      
      dob: '',
    })




  const [primay_address, set_primary_address] = useState({
    name_or_number: '',
    street: '',
    locality: '',
    town: '',
    county: '',
    post_code: '',
    country: '',
  })


      const handleChange =  {
        

       
          primay_address: (e) => {
            const { name, value } = e.target;
            set_primary_address((prevData) => ({
              ...prevData,
              [name]: value,
            }))
          },

          personal_details: (e) => {
            const { name, value } = e.target;
            set_personal_details((prevData) => ({
              ...prevData,
              [name]: value,
            }))
          },
        }
        

    



        const fetchUserData = async () => {
          const supabase = createClient();

          const {data: {user: {user_metadata: {account_holder, primary_address}}}, error: userError} = await supabase.auth.getUser();

          if (!userError) {
            console.log(account_holder)
            set_personal_details((prev) => {
            return {
              ...prev,
              title: account_holder?.title || '',
              first_name: account_holder?.forename || '',
              middle_name: account_holder?.middle_name || '',
              last_name: account_holder?.surname || '',
              gender: account_holder?.gender || '',
              dob: account_holder?.dob || '',
            }

            })


            set_primary_address((prev) => {
              return {
                ...prev,
                name_or_number: primary_address?.house_name_or_number || '',
                street: primary_address?.street || '',
                locality: primary_address?.locality || '',
                town: primary_address?.town || '',
                county: primary_address?.county || '',
                post_code: primary_address?.post_code || '',
                country: primary_address?.country || '',
              }
  
              })
  



          }

        }



        useEffect(() => {

          fetchUserData()

        }, [])













        const handleSubmit = async (e) => {
          e.preventDefault();
          


            const supabase = createClient();


            const {data, error} = await supabase.auth.updateUser({
              data: {
                account_holder: {
                  ...personal_details,
                  dob: dayjs(personal_details.dob).toISOString()
                },

                primary_address: primay_address
              }
            })

            console.log(data)




        };
  


































  return (



    <section > 
         


        <form onSubmit={handleSubmit} >
      <Typography  variant="h5" color="#ffffff" sx={{backgroundColor: '#1565C0', paddingX: 2, paddingY: 1}} gutterBottom> Personal Details </Typography>

      <Grid2 container spacing={2}    maxWidth={600} minWidth={400} marginBottom={8} sx={{ paddingX: 2, paddingY: 2}}>
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Title*</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="title" value={personal_details.title} onChange={handleChange.personal_details} /> </Grid2>
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>First Name*</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="first_name" value={personal_details.first_name} onChange={handleChange.personal_details} /> </Grid2>
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Middle Name</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="middle_name" value={personal_details.middle_name} onChange={handleChange.personal_details} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Last Name*</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="last_name" value={personal_details.last_name} onChange={handleChange.personal_details} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Gender*</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="gender" value={personal_details.gender} onChange={handleChange.personal_details} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }} >Date of Birth*</InputLabel> <DatePicker   sx={{width: "300px", }} size="small" name="dob"  value={dayjs(personal_details.dob)} onChange={(newValue) => {
          set_personal_details((prev) => {
            return {
              ...prev,
              dob: newValue
            }
          })
        }} /> </Grid2>


      </Grid2>













      <Divider />

      <Typography  variant="h5" color="#ffffff" sx={{backgroundColor: '#1565C0', paddingX: 2, paddingY: 1 }} gutterBottom marginTop={4}> Postal Address </Typography>

      <Grid2 container spacing={2}  maxWidth={600} minWidth={400} sx={{ paddingX: 2, paddingY: 2}}>
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Building Name/Number</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="name_or_number" value={primay_address.name_or_number} onChange={handleChange.primay_address} /> </Grid2>
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Street</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="street" value={primay_address.street} onChange={handleChange.primay_address} /> </Grid2>
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Locality</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="locality" value={primay_address.locality} onChange={handleChange.primay_address} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Town</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="town" value={primay_address.town} onChange={handleChange.primay_address} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>County</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="county" value={primay_address.county} onChange={handleChange.primay_address} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Post Code</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="post_code" value={primay_address.post_code} onChange={handleChange.primay_address} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Country</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="country" value={primay_address.country} onChange={handleChange.primay_address} /> </Grid2>


      </Grid2>




      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button>
    </form>
    </section>












  )
};

export default PersonalDetails;
