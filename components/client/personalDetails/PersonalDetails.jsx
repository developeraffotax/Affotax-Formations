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
const PersonalDetails = () => {

  const { register, handleSubmit, formState: { errors }, setValue, getValues, control, } = useForm();

  const [isLoading, setIsLoading] = useState(false);


// ---------------------------------------------------------------FETCH DATA ON MOUTING------------------------------------------------------------------------------
  const fetchUserData = async () => {
    const supabase = createClient();

    const { data: { user: { user_metadata: { account_holder, primary_address }, }, }, error: userError, } = await supabase.auth.getUser();

    if (!userError) {

      setValue("account_holder", {
        ...account_holder,
      });
      // console.log(getValues())
      setValue("primary_address", primary_address);


    }
  };


  useEffect(() => {
    fetchUserData();
  }, []);




 // ---------------------------------------------------------------------SUBMIT HANDLER---------------------------------------------------------------------
  const formSubmitHandler = async (formData) => {
    console.log(formData, 'INSIDE THE FORM SUBMIT HANDLER');
    const { account_holder, primary_address } = formData;

    const supabase = createClient();
    setIsLoading(true)
    const { data, error } = await supabase.auth.updateUser({
      data: {
        account_holder: account_holder,

        primary_address: primary_address,
      },
    });

    setIsLoading(false)
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
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Typography variant="h5" color="#ffffff" sx={{ backgroundColor: "#1565C0", paddingX: 2, paddingY: 1 }} gutterBottom > {" "} Personal Details{" "} </Typography>

        <Grid2 container spacing={2} maxWidth={600} minWidth={400} marginBottom={8} sx={{ paddingX: 2, paddingY: 2 }} >



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Organization </InputLabel>{" "}
            <TextField {...register("account_holder.organization")} sx={{ width: "60%" }} variant="outlined" size="small"   />{" "}
          </Grid2>

          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Title* </InputLabel>
            <Controller
              control={control}
              name="account_holder.title"
              defaultValue={"Mr"}
              
              // rules={ {required: { value: true, message: "Required" }}}
              render={({ field: { onChange, onBlur, value, ref, name } }) => (
                <Select sx={{ width: "60%" }}  variant="outlined"  size="small" onChange={onChange} value={value}  >
                  <MenuItem value={"Mr"}>Mr</MenuItem>
                  <MenuItem value={"Ms"}>Ms</MenuItem>
                  <MenuItem value={"Miss"}>Miss</MenuItem>
                  <MenuItem value={"Mrs"}>Mrs</MenuItem>
                  <MenuItem value={"Dr"}>Dr</MenuItem>
                  <MenuItem value={"Prof"}>Prof</MenuItem>
                  <MenuItem value={"Master"}>Master</MenuItem>
                  <MenuItem value={"Rev"}>Rev</MenuItem>
                  <MenuItem value={"Sir"}>Sir</MenuItem>
                  <MenuItem value={"Lord"}>Lord</MenuItem>
                  <MenuItem value={"Lady"}>Lady</MenuItem>
                  <MenuItem value={"Mx"}>Mx</MenuItem>
                </Select>
              )}
            />
          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > First Name* </InputLabel>{" "}
            <TextField {...register("account_holder.first_name", { required: { value: true, message: "Required" }, })} error={errors?.account_holder?.first_name} helperText={errors?.account_holder?.first_name?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Middle Name </InputLabel>{" "}
            <TextField {...register("account_holder.middle_name")} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Last Name* </InputLabel>{" "}
            <TextField {...register("account_holder.last_name", { required: { value: true, message: "Required" }})}  sx={{ width: "60%" }} error={errors?.account_holder?.last_name} helperText={errors?.account_holder?.last_name?.message} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Gender* </InputLabel>{" "}
            {/* <TextField {...register("account_holder.gender", { required: { value: true, message: "Required" } })} error={errors?.account_holder?.gender} helperText={errors?.account_holder?.gender?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "} */}
              
              <Controller
              
                            control={control}
                            name="account_holder.gender"
                              defaultValue={"Male"}
                            // rules={ {required: { value: true, message: "Required" }}}
                            render={({ field: { onChange, onBlur, value, ref, name } }) => (
                              <>
                              <Select   sx={{ width: "60%" }}  variant="outlined"  size="small" onChange={onChange} value={value} >
                                <MenuItem   value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                
                              </Select>
                                </>
                            )}
                          />
          
          
          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Phone Number* </InputLabel>{" "}
            <TextField {...register("account_holder.phone_number", { required: { value: true, message: "Required" } })} error={errors?.account_holder?.phone_number} helperText={errors?.account_holder?.phone_number?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>

          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Date of Birth* </InputLabel>
            <Controller rules={ {required: { value: true, message: "Required" },}} control={control} name="account_holder.dob"   render={({ field: { onChange, onBlur, value, ref } }) => ( <DatePicker slotProps={{textField: {
              error: errors?.account_holder?.dob,
              helperText: errors?.account_holder?.dob?.message
            }}}   sx={{ width: "60%" }} size="small" value={dayjs(value)} onChange={(value) => onChange(value)} /> )} />
          </Grid2>
          
        </Grid2>


        <Divider />

        <Typography variant="h5" color="#ffffff" sx={{ backgroundColor: "#1565C0", paddingX: 2, paddingY: 1 }} gutterBottom marginTop={4} > {" "} Postal Address{" "} </Typography>

        <Grid2 container spacing={2} maxWidth={600} minWidth={400} sx={{ paddingX: 2, paddingY: 2 }} >




          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Building Name/Number* </InputLabel>{" "}
            <TextField {...register("primary_address.name_or_number", { required: { value: true, message: "Required" }, })} error={errors?.primary_address?.name_or_number} helperText={errors?.primary_address?.name_or_number?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Street* </InputLabel>{" "}
            <TextField {...register("primary_address.street", { required: { value: true, message: "Required" } })} error={errors?.primary_address?.street} helperText={errors?.primary_address?.street?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Locality </InputLabel>{" "}
            <TextField {...register("primary_address.locality")} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins" }} > Town* </InputLabel>{" "}
            <TextField {...register("primary_address.town", { required: { value: true, message: "Required" } })} error={errors?.primary_address?.town} helperText={errors?.primary_address?.town?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > County </InputLabel>{" "}
            <TextField {...register("primary_address.county")} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Post Code* </InputLabel>{" "}
            <TextField {...register("primary_address.post_code", { required: { value: true, message: "Required" } })} error={errors?.primary_address?.post_code} helperText={errors?.primary_address?.post_code?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>


          {/* <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins" }} > Country* </InputLabel>{" "}
            <TextField {...register("primary_address.country", { required: { value: true, message: "Required" } })} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2> */}


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"      }} > Country* </InputLabel>{" "}
            {/* <TextField {...register("primary_address.country", { required: { value: true, message: "Required" } })} sx={{ width: "60%" }} variant="outlined" size="small" />{" "} */}






            <Controller
              control={control}
              name="primary_address.country"
              defaultValue={"United Kingdom"}
              // rules={ {required: { value: true, message: "Required" }}}
              render={({ field: { onChange, onBlur, value, ref, name } }) => (
                <Select sx={{ width: "60%" }}  variant="outlined"  size="small" onChange={onChange} value={value}  >
                    {
                      COUNTRIES.map((country) => {
                        return <MenuItem key={country} value={country}>{country}</MenuItem>
                      })
                    }
                </Select>
              )}
            />
          </Grid2>



        </Grid2>

        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }} loading={isLoading} > Update </Button>
      </form>
    </section>
  );
};

export default PersonalDetails;
