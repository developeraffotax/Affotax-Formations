"use client"
import { Button, Grid, Grid2, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useState } from "react";
 const PersonalDetails = () => {


    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //   });
      const [title, set_title] = useState('')
      const [first_name, set_first_name] = useState('')
      const [middle_name, set_middle_name] = useState('')
      const [last_name, set_last_name] = useState('')
      const [gender, set_gender] = useState('')

    //   const [dob, setDob] = useState(dayjs('2022-04-17'))
      const [date_of_birth, set_date_of_birth] = useState((prev) => {


        const today = new Date().toISOString().split('T')[0];
        return dayjs(today)

      })


    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission (e.g., send data to API)
      };



  return (



    <section>
         


        <form onSubmit={handleSubmit} >
      <Typography variant="h5" gutterBottom> Personal Details </Typography>

      <Grid2 container spacing={2}  maxWidth={500} >
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Title*</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="name" value={title} onChange={set_title} /> </Grid2>
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>First Name*</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="name" value={first_name} onChange={set_first_name} /> </Grid2>
        <Grid2 container spacing={2} size={12}   direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Middle Name</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="name" value={middle_name} onChange={set_middle_name} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Last Name*</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="name" value={last_name} onChange={set_last_name} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Gender*</InputLabel> <TextField sx={{width: "300px"}} variant="outlined" size="small" name="name" value={gender} onChange={set_gender} /> </Grid2>
        <Grid2 container spacing={2} size={12}  direction={"row"} alignItems={"center"} justifyContent={"space-between"} > <InputLabel    id="demo-select-small-label" sx={{fontFamily: 'poppins',  }}>Date of Birth*</InputLabel> <DatePicker   sx={{width: "300px", }} size="small"   value={date_of_birth} onChange={(newValue) => set_date_of_birth(newValue)} /> </Grid2>


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
