"use client";
import { UserContext } from "@/app/(user)/layout";
import theme from "@/app/theme";
import { COUNTRIES } from "@/components/clientSignup/CountrySelect";
import { createClient } from "@/lib/supabase/client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Divider, FormHelperText, Grid, Grid2, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery, } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
const PersonalDetails = () => {

  const { register, handleSubmit, formState: { errors }, setValue, getValues, control, } = useForm();


  const [showPassword, setShowPassword] =  useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };













  // const isMobile = useMediaQuery(theme.breakpoints.down('lg'));  







  const [errorMsg, setErrorMsg] = useState("");
 const [isLoading, setIsLoading] = useState(false);
  
  

  const router = useRouter()

  const {user, setUser} = useContext(UserContext);


  //sign up
  const formSubmitHandler = async (data) => {

    console.log("LOGIN FORM DATA: ", data);

    const { account_holder, primary_address } = data;

    const {email, confirm_email, password} = account_holder;

    if (email !== confirm_email) {
      return setErrorMsg("Email and Confirm Email should be same!")
    }


     

    //create the user on supabase
    const supabase = createClient();

    try {
      setIsLoading(true)


      const response = await axios.post('/api/customer/create', {
        emailAddress: email,
        givenName: account_holder.first_name
      })

      if(response.status !== 201 || !response?.data?.success) {
        return setErrorMsg("Failed to create sq. customer!")
      }





      console.log(response)



      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            account_holder: {
              ...account_holder,
              square_customer_id: response?.data?.customer?.id
            },
            primary_address
          },
        },
      });

      if (error) {
        setErrorMsg(error.message || "Failed to create a new user!")
      }

      setUser(data?.user)
      return router.push('/')
    } catch (error) {
        console.log(error.message || "Error occured! Please try again later")
        setErrorMsg(error.message || "Error occured! Please try again later")
    } finally {
      setIsLoading(false)
    }


  };


  const [open, setOpen] = React.useState(false);
 

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



  return (
    <section>
      <form onSubmit={handleSubmit(formSubmitHandler)} className="pb-8">
        <Typography variant="h5" color="#ffffff" sx={{ backgroundColor: "#1565C0", paddingX: 2, paddingY: 1 }} gutterBottom > {" "} Personal Details{" "} </Typography>

        <Grid2 container spacing={2}    marginBottom={4} sx={{ paddingX: 2, paddingY: 2,   }} >



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel className="max-lg:hidden" id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"  }} > Organization </InputLabel>{" "}
            <TextField   {...register("account_holder.organization")}  sx={{ width:'60%' }} variant="outlined" size="small" />{" "}
          </Grid2>

          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"    }} > Title* </InputLabel>
            <Controller
              control={control}
              name="account_holder.title"
              defaultValue={"Mr"}
            
              rules={ {required: { value: true, message: "Required" }}}
              render={({ field: { onChange, onBlur, value, ref, name } }) => (
                <Select    sx={{ width:'60%',  }}  variant="outlined"  size="small" onChange={onChange} value={value}  >
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
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"    }} > First Name* </InputLabel>{" "}
            <TextField {...register("account_holder.first_name", { required: { value: true, message: "Required" }, })} error={errors?.account_holder?.first_name} helperText={errors?.account_holder?.first_name?.message} sx={{ width:'60%' }} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"  }} > Middle Name </InputLabel>{" "}
            <TextField {...register("account_holder.middle_name")} sx={{ width:'60%' }} variant="outlined" size="small" />{" "}
          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"   }} > Last Name* </InputLabel>{" "}
            <TextField {...register("account_holder.last_name", { required: { value: true, message: "Required" }})}  sx={{ width:'60%' }} error={errors?.account_holder?.last_name} helperText={errors?.account_holder?.last_name?.message} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"   }} > Gender* </InputLabel>{" "}
            {/* <TextField {...register("account_holder.gender", { required: { value: true, message: "Required" } })} error={errors?.account_holder?.gender} helperText={errors?.account_holder?.gender?.message} sx={{ width:'60%' }} variant="outlined" size="small" />{" "} */}
            <Controller

              control={control}
              name="account_holder.gender"
              defaultValue={"Male"}
              // rules={ {required: { value: true, message: "Required" }}}
              render={({ field: { onChange, onBlur, value, ref, name } }) => (
                <>
                <Select  label="Title" labelId='asasd' onClose={handleClose}
          onOpen={handleOpen}   sx={{ width:'60%' }}  variant="outlined"  size="small" onChange={onChange} value={value}  >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  
                </Select>
                  </>
              )}
            />

              {/* <FormHelperText>{errors?.account_holder?.gender?.message}</FormHelperText> */}



          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"   }} > Phone Number* </InputLabel>{" "}
            <TextField {...register("account_holder.phone_number", { required: { value: true, message: "Required" } })} error={errors?.account_holder?.phone_number} helperText={errors?.account_holder?.phone_number?.message} sx={{ width:'60%' }} variant="outlined" size="small" />{" "}
          </Grid2>

          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"   }} > Date of Birth* </InputLabel>
            <Controller rules={ {required: { value: true, message: "Required" },  }} control={control} name="account_holder.dob"   render={({ field: { onChange, onBlur, value, ref } }) => ( <DatePicker slotProps={{textField: {
              error: errors?.account_holder?.dob,
              helperText: errors?.account_holder?.dob?.message
            }}}  disableFuture   sx={{ width:'60%' }} size="small" value={dayjs(value)} onChange={(value) => onChange(value)} /> )} />
          </Grid2>
          

          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"   }} > Email* </InputLabel>{" "}
            <TextField type="email" {...register("account_holder.email", { required: { value: true, message: "Required" } })} error={errors?.account_holder?.email} helperText={errors?.account_holder?.email?.message} sx={{ width:'60%' }} variant="outlined" size="small" />{" "}
          </Grid2>

          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"   }} > Confirm Email* </InputLabel>{" "}
            <TextField type="email" {...register("account_holder.confirm_email", { required: { value: true, message: "Required" } })} error={errors?.account_holder?.confirm_email} helperText={errors?.account_holder?.confirm_email?.message} sx={{ width:'60%' }} variant="outlined" size="small" />{" "}
          </Grid2>

          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%"   }} > Password* </InputLabel>{" "}
            <TextField  type={showPassword ? 'text' : 'password'}  slotProps={{
              input: {
                endAdornment: 
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              
            }} {...register("account_holder.password", { required: { value: true, message: "Required", }, minLength: {value: 6, message: "Must be Greater than 6 characters!"} })} error={errors?.account_holder?.password} helperText={errors?.account_holder?.password?.message} sx={{ width:'60%' }} variant="outlined" size="small" />{" "}
          </Grid2>



        </Grid2>





       



























        <Divider />

        <Typography variant="h5" color="#ffffff" sx={{ backgroundColor: "#1565C0", paddingX: 2, paddingY: 1 }} gutterBottom marginTop={4} > {" "} Postal Address{" "} </Typography>

        <Grid2 container spacing={2}  sx={{ paddingX: 2, paddingY: 2 }} >




          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%" }} > Building Name/Number* </InputLabel>{" "}
            <TextField {...register("primary_address.name_or_number", { required: { value: true, message: "Required" }, })} error={errors?.primary_address?.name_or_number} helperText={errors?.primary_address?.name_or_number?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%" }} > Street* </InputLabel>{" "}
            <TextField {...register("primary_address.street", { required: { value: true, message: "Required" } })} error={errors?.primary_address?.street} helperText={errors?.primary_address?.street?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%" }} > Locality </InputLabel>{" "}
            <TextField {...register("primary_address.locality")} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%" }} > Town* </InputLabel>{" "}
            <TextField {...register("primary_address.town", { required: { value: true, message: "Required" } })} error={errors?.primary_address?.town} helperText={errors?.primary_address?.town?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>



          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%" }} > County </InputLabel>{" "}
            <TextField {...register("primary_address.county")} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%" }} > Post Code* </InputLabel>{" "}
            <TextField {...register("primary_address.post_code", { required: { value: true, message: "Required" } })} error={errors?.primary_address?.post_code} helperText={errors?.primary_address?.post_code?.message} sx={{ width: "60%" }} variant="outlined" size="small" />{" "}
          </Grid2>


         


          <Grid2 container spacing={2} size={12} direction={"row"} alignItems={"center"} justifyContent={"space-between"} > {" "}
            <InputLabel id="demo-select-small-label" sx={{ fontFamily: "poppins", fontSize: {xs: 12, lg: 16}, width: "30%" }} > Country* </InputLabel>{" "}



            <Controller
              control={control}
              name="primary_address.country"
              defaultValue={"United Kingdom"}
              rules={ {required: { value: true, message: "Required" }}}
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


        {errorMsg && (
          <p className="w-full text-start px-4 font-poppins text-red-500 mt-2">
            {errorMsg}
          </p>
        )}

        <div className="w-full flex justify-center items-center ">

        <Button loading={isLoading} type="submit" variant="contained" color="primary" sx={{ marginTop: 2, width: {xs: '90%', lg: '100%'},   }} > Sign Up </Button>
        </div>
      </form>
    </section>
  );
};

export default PersonalDetails;







































// import { Button, Input, Spinner } from "@heroui/react";
// import Link from "next/link";
// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { MdLogin } from "react-icons/md";
// import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "./Icons";
// import { createClient } from "@/lib/supabase/client";
// import CountrySelect from "./CountrySelect";
// import { useRouter } from "next/navigation";
// import { UserContext } from "@/app/(user)/layout";
 

// const Form = () => {
//   const [errorMsg, setErrorMsg] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => setIsVisible(!isVisible);
//   const { register, handleSubmit, formState: { errors }, } = useForm();


//   const router = useRouter()

//   const {user, setUser} = useContext(UserContext);


//   //sign up
//   const formSubmitHandler = async (data) => {
//     console.log("LOGIN FORM DATA: ", data);

//     const { organization, title,  first_name, middle_name, last_name, gender, phone_number, email, confirm_email, password } = data;
//     const { post_code, name_or_number, street, locality, town, county, country } = data;

//     const account_holder = {
//       organization, title,  first_name, middle_name, last_name, gender,  phone_number, email
//     }

//     const primary_address = {
//       post_code, name_or_number, street, locality, town, county, country 
//     }






//     // create the user on supabase
//     const supabase = createClient();

//     try {
//       setIsLoading(true)
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: {
//             account_holder,
//             primary_address
//           },
//         },
//       });

//       if (error) {
//         setErrorMsg(error.message || "Failed to create a new user!")
//       }

//       setUser(data?.user)
//       return router.push('/')
//     } catch (error) {
//         console.log(error.message || "Error occured! Please try again later")
//     } finally {
//       setIsLoading(false)
//     }


//   };






//   return (
//     (<form
//       onSubmit={handleSubmit(formSubmitHandler)}
//       className="w-full flex flex-col justify-start items-start gap-4 font-poppins "
//     >
//       {/* ACCOUNT HOLDER */}
//       <div className="w-full flex flex-col justify-start items-start gap-2  ">
//           <div className="w-full text-center bg-cyan-500 text-white py-2 my-2  shadow-md ">Account Holder </div>
//       <div className="w-full">
//       <Input
//         {...register("organization")}
//         key="organization"
//         classNames={{
//           mainWrapper: "w-full ",
//           label: "w-[40%]",
//         }}
//         label="Organisation (if applicable):	"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>


//     <div className="w-full">
//       <Input
//         errorMessage={errors?.title?.message}
//         isInvalid={errors?.title ? true : false}
//         {...register("title", {
//           required: {
//             value: true,
//             message: "Title is required!",
//           },
//         })}
//         key="title"
//         classNames={{
//           mainWrapper:
//             "w-full",
//           label: "w-[40%] ",
//         }}
//         label="Title: *"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>




//     <div className="w-full">
//       <Input
//         errorMessage={errors?.first_name?.message}
//         isInvalid={errors?.first_name ? true : false}
//         {...register("first_name", {
//           required: {
//             value: true,
//             message: "First name is required!",
//           },
//         })}
//         key="first_name"
//         classNames={{
//           mainWrapper:
//             "w-full",
//           label: "w-[40%] ",
//         }}
//         label="First Name: *"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>

//     <div className="w-full">
//       <Input
        
//         {...register("middle_name", {
          
//         })}
//         key="middle_name"
//         classNames={{
//           mainWrapper:
//             "w-full",
//           label: "w-[40%] ",
//         }}
//         label="Middle Name: "
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>


//     <div className="w-full">
//     <Input
//         errorMessage={errors?.last_name?.message}
//         isInvalid={errors?.last_name ? true : false}
//         {...register("last_name", {
//           required: {
//             value: true,
//             message: "Last name is required!",
//           },
//         })}
//         key="last_name"
//         classNames={{
//           mainWrapper:
//             "w-full",
//           label: "w-[40%] ",
//         }}
//         label="Last Name: *"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>




//     <div className="w-full">
//       <Input
//         errorMessage={errors?.gender?.message}
//         isInvalid={errors?.gender ? true : false}
//         {...register("gender", {
//           required: {
//             value: true,
//             message: "Phone Number is required!",
//           },
//         })}
//         key="gender"
//         classNames={{
//           mainWrapper: "w-full ",
//           label: "w-[40%]",
//         }}
//         label="Gender: *	"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>


//     <div className="w-full">
//       <Input
//         errorMessage={errors?.dob?.message}
//         isInvalid={errors?.dob ? true : false}
//         {...register("dob", {
//           required: {
//             value: true,
//             message: "Phone Number is required!",
//           },
//         })}
//         key="dob"
//         classNames={{
//           mainWrapper: "w-full ",
//           label: "w-[40%]",
//         }}
//         label="Date of birth: *	"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>





   

//     <div className="w-full">
//       <Input
//         errorMessage={errors?.phone_number?.message}
//         isInvalid={errors?.phone_number ? true : false}
//         {...register("phone_number", {
//           required: {
//             value: true,
//             message: "Phone Number is required!",
//           },
//         })}
//         key="phone_number"
//         classNames={{
//           mainWrapper: "w-full ",
//           label: "w-[40%]",
//         }}
//         label="Phone Number: *	"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>

//     {/* EMAIL */}
//     <div className="w-full">
//       <Input
//         errorMessage={errors?.email?.message}
//         isInvalid={errors?.email ? true : false}
//         {...register("email", {
//           required: {
//             value: true,
//             message: "Email is required!",
//           },
//           pattern: {
//             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//             message: "Please enter a valid email address!",
//           },
//         })}
//         endContent={
//           <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//         }
//         key="email"
//         classNames={{
//           mainWrapper: "w-full ",
//           label: "w-[40%]",
//         }}
//         label="Email: *	"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>

//     <div className="w-full">
//       <Input
//         errorMessage={errors?.confirm_email?.message}
//         isInvalid={errors?.confirm_email ? true : false}
//         {...register("confirm_email", {
//           required: {
//             value: true,
//             message: "Confirm Email is required!",
//           },

//           validate: (value, formValues) => {
//             console.log(value, formValues);
//             return value === formValues?.email
//               ? true
//               : "Confirm Email should match the Email!";
//           },
//         })}
//         key="confirm_email"
//         classNames={{
//           mainWrapper: "w-full ",
//           label: "w-[40%]",
//         }}
//         label="Confirm Email: *	"
//         labelPlacement="outside-left"
//         type="text"
//       />
//     </div>

//     <div className="w-full">
//       <Input
//         errorMessage={errors?.password?.message}
//         isInvalid={errors?.password ? true : false}
//         endContent={
//           <button
//             aria-label="toggle password visibility"
//             className="focus:outline-none"
//             type="button"
//             onClick={toggleVisibility}
//           >
//             {" "}
//             {isVisible ? (
//               <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
//             ) : (
//               <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
//             )}{" "}
//           </button>
//         }
//         type={isVisible ? "text" : "password"}
//         {...register("password", {
//           required: {
//             value: true,
//             message: "Password is required!",
//           },
//           minLength: {
//             value: 6,
//             message: "Password must be greater than 6 characters.",
//           },
//         })}
//         key="password"
//         classNames={{
//           mainWrapper: "w-full ",
//           label: "w-[40%]",
//         }}
//         label="Password: *"
//         labelPlacement="outside-left"
//       />
//     </div>


//       </div>
//       {/* PRIMARY ADDRESS */}
//       <div className="w-full flex flex-col justify-start items-start gap-2    " >
//       <div className="w-full text-center bg-cyan-500 text-white py-2 my-2 shadow-md  ">Primary Address </div>
//       <div className="w-full">
//     <Input
//       errorMessage={errors?.post_code?.message}
//       isInvalid={errors?.post_code ? true : false}
//       {...register("post_code", {
//         required: {
//           value: true,
//           message: "Post Code is required!",
//         },
//       })}
//       key="post_code"
//       classNames={{
//         mainWrapper: "w-full ",
//         label: "w-[40%]",
//       }}
//       label="Post Code: *"
//       labelPlacement="outside-left"
//       type="text"
//     />
//   </div>

//   <div className="w-full">
//     <Input
//       errorMessage={errors?.name_or_number?.message}
//       isInvalid={errors?.name_or_number ? true : false}
//       {...register("name_or_number", {
//         required: {
//           value: true,
//           message: "House Name / Number is required!",
//         },
//       })}
//       key="name_or_number"
//       classNames={{
//         mainWrapper:
//           "w-full",
//         label: "w-[40%] ",
//       }}
//       label="House Name / Number: *	"
//       labelPlacement="outside-left"
//       type="text"
//     />
//   </div>

//   <div className="w-full">
//     <Input
//       errorMessage={errors?.street?.message}
//       isInvalid={errors?.street ? true : false}
//       {...register("street", {
//         required: {
//           value: true,
//           message: "Street is required!",
//         },
//       })}
//       key="street"
//       classNames={{
//         mainWrapper: "w-full ",
//         label: "w-[40%]",
//       }}
//       label="Street: *"
//       labelPlacement="outside-left"
//       type="text"
//     />
//   </div>

//   <div className="w-full">
//     <Input
     
//       {...register("locality")}
//       key="locality"
//       classNames={{
//         mainWrapper: "w-full ",
//         label: "w-[40%]",
//       }}
//       label="Locality:	"
//       labelPlacement="outside-left"
//       type="text"
//     />
//   </div>



//   <div className="w-full">
//     <Input
//       errorMessage={errors?.town?.message}
//       isInvalid={errors?.town ? true : false}
//       {...register("town", {
//         required: {
//           value: true,
//           message: "Town is required!",
//         },
//       })}
//       key="town"
//       classNames={{
//         mainWrapper:
//           "w-full flex  flex-col-reverse justify-start items-start gap-1",
//         label: "w-[40%]",
        
//       }}
//       label="Town: *"
//       labelPlacement="outside-left"
//       type="text"
//     />
//   </div>


//   <div className="w-full">
//     <Input
     
//       {...register("county")}
//       key="county"
//       classNames={{
//         mainWrapper: "w-full ",
//         label: "w-[40%]",
//       }}
//       label="County:	"
//       labelPlacement="outside-left"
//       type="text"
//     />
//   </div>



//   {/* COUNTRY SELECT */}
//   <div className="w-full">
//       <CountrySelect register={register} errors={errors}/>
//   </div>

  
  











//       </div>
//       <div className="w-full flex flex-col justify-center items-center gap-4  ">
//         <Button
//           type="submit"
//           className="text-white w-[100%] bg-cyan-500 "
//           color="success"
//           endContent={isLoading ? null : <MdLogin className="text-xl -ml-1" />}
//         >
//           {" "}
//           {isLoading ? <Spinner size="sm" color="white" /> : "Signup"}{" "}
//         </Button>
//         <Link className=" text-sm   " href="/client-login">
//           Or Login
//         </Link>
//         {errorMsg && (
//           <p className="w-full text-center font-poppins text-red-500 mt-2">
//             {errorMsg}
//           </p>
//         )}
//       </div>
//     </form>)
//   );
// };

// export default Form;
