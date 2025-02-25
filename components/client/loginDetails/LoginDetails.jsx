"use client";
import { COUNTRIES } from "@/components/clientSignup/CountrySelect";
import { createClient } from "@/lib/supabase/client";
import {
  Button,
  Divider,
  Grid,
  Grid2,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Bounce, toast, ToastContainer } from "react-toastify";


const LoginDetails = () => {

  const { register, handleSubmit, formState: { errors }, setValue, getValues, control, watch } = useForm();
  const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 }, setValue: setValue2, getValues: getValues2, control: control2, watch: watch2 } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);



 

// ---------------------------------------------------------------FETCH DATA ON MOUTING------------------------------------------------------------------------------
  const fetchUserData = async () => {
    const supabase = createClient();

    const { data: { user}, error: userError, } = await supabase.auth.getUser();

    if (!userError) {

      setValue("email", user.email);
       


    }
  };


  useEffect(() => {
    fetchUserData();
  }, []);

 


 // ---------------------------------------------------------------------SUBMIT HANDLER---------------------------------------------------------------------
//   const updateEmail = async (formData) => {
//     console.log(formData, 'INSIDE THE FORM SUBMIT HANDLER');
//     const { email } = formData;

//     const supabase = createClient();
//     setIsLoading(true)
//     const { data, error } = await supabase.auth.updateUser({
//       email: email
//     });

//     console.log(data)
//     setIsLoading(false)
//     console.log(data, error)
//     if(error) {
//       return toast.error(error?.message || "Failed to update the user", {
//         containerId: 'update_user'
//       })
//     } 

//     return toast.success("User Updated Successfully!", {
//       containerId: 'update_user'
//     })


     
//   };





  const updatePassword = async (formData) => {
    console.log(formData, 'INSIDE THE FORM SUBMIT HANDLER');
    const { password } = formData;

    const supabase = createClient();
    setIsLoading2(true)
    const { data, error } = await supabase.auth.updateUser({
        password: password
    });

    setIsLoading2(false)
    console.log(data, error)
    if(error) {
      return toast.error(error?.message || "Failed to update the user", {
        containerId: 'update_user'
      })
    } 

    return toast.success("User Updated Successfully!", {
      containerId: 'update_user'
    })


     
  };

  return (  
    <section>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        containerId={'update_user'}
  
/>
      <div   className="py-8 ">


        <Typography variant="h5" color="#ffffff" sx={{ backgroundColor: "#1565C0", paddingX: 2, paddingY: 1 }} gutterBottom > Email </Typography>

        <Grid2 container spacing={2} maxWidth={600} sx={{ paddingX: 2, paddingY: 2 }} >



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins" , fontSize: {xs: 12, lg: 16}, width: "30%"  }} > Email </InputLabel>{" "}
            <TextField disabled {...register("email", {required: {value: true, message: "Required"}, pattern:{value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:'Email is invalid'}})}  error={errors?.email} helperText={errors?.email && errors?.email?.message} sx={{ width: "60%" }} variant="outlined" size="small"   />{" "}
          </Grid2>

 





        </Grid2>



        {/* <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }} loading={isLoading} > Update Email </Button> */}
      </div>





      <form onSubmit={handleSubmit2(updatePassword)}>


                <Typography variant="h5" color="#ffffff" sx={{ backgroundColor: "#1565C0", paddingX: 2, paddingY: 1 }} gutterBottom > {" "} Password{" "} </Typography>

                <Grid2 container spacing={2} maxWidth={600} sx={{ paddingX: 2, paddingY: 2 }} >


                

                <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
                    <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"  }} > Password </InputLabel>{" "}
                    <TextField   {...register2("password", {required: {value: true, message: "Required"}, minLength: {value: 6, message: 'Password must be greater than 6 letters.'}})} sx={{ width: "60%" }} variant="outlined" size="small" error={errors2?.password} helperText={errors2?.password && errors2?.password?.message}  />{" "}
                </Grid2>


                <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
                    <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"  }} > Confirm Password </InputLabel>{" "}
                    <TextField {...register2("confirm_password", {required: {value: true, message: "Required"}, minLength: {value: 6, message: 'Confirm Password must be greater than 6 letters.', }, validate: {value: (value, formValues) => value === formValues.password ? true : "Password & Confirm Password should be same.",   }})} sx={{ width: "60%" }} variant="outlined" size="small" error={errors2?.confirm_password} helperText={errors2?.confirm_password && errors2?.confirm_password?.message}  />{" "}
                </Grid2>





                </Grid2>


<Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }} loading={isLoading2} > Update Password </Button>

</form>
    </section>
  );
};

export default LoginDetails;
