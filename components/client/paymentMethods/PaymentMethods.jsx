"use client";

import { Alert, Backdrop, Box, Button, Card, DialogContent, DialogContentText, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CardComponent from "./Card";
import SquareForm from "./SquareFrom/SquareForm";

const PaymentMethods = () => {
  const [open, setOpen] = useState(false);

  const [cardHolder, setCardHolder] = useState({
    fullName: '',
    address: '',
    locality: '',
    country: '',
  })

  const [errorMessage, setErrorMessage] = useState('')

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };







  const handleChange = (event) => {
    const {name, value} = event.target;
    return setCardHolder((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })


  }


  console.log(cardHolder)




  return (
    <>
      <Stack spacing={2} justifyContent={"start"} alignItems={"start"}>
        <CardComponent />
        <CardComponent />
        <CardComponent />

        <Button onClick={handleOpen}>Add a New Card</Button>
      </Stack>
      <Backdrop
        sx={(theme) => ({
          color: "#4f4f4f",
          zIndex: theme.zIndex.drawer + 1,
          
        })}
        open={open}
        // onClick={handleClose}
      >
        <Box display="flex" flexDirection={"column"} gap={2} justifyContent="center" alignItems="center" sx={{ width: "100%", padding: 8,  }} >

           <form  className="w-[30%] flex flex-col justify-center items-start gap-2 bg-gray-100  p-8 rounded-md ">

              {errorMessage && <Alert variant="filled" severity="error" sx={{width: '100%'}}> {errorMessage} </Alert>}



           <TextField size="small" label="Full Name" sx={{width: '100%', backgroundColor: 'white'}} name="fullName" required onChange={handleChange} value={cardHolder.fullName}/>

            <Typography sx={{fontFamily: 'poppins', fontWeight: 600, }}>Billing Address</Typography>
           <TextField size="small" label="Address" sx={{width: '100%', backgroundColor: 'white'}} name="address" required onChange={handleChange} value={cardHolder.address}/>
           <TextField size="small" label="Locality" sx={{width: '100%', backgroundColor: 'white'}} name="locality" required onChange={handleChange}  value={cardHolder.locality}/>
           <TextField size="small" label="Country" sx={{width: '100%', backgroundColor: 'white'}} name="country" required onChange={handleChange}  value={cardHolder.country} />





          <div className="w-full ">
          <SquareForm cardHolder={cardHolder} setErrorMessage={setErrorMessage}/>
          </div>


            <Button onClick={handleClose} variant="text" color="" sx={{width: '100%', }}>Cancel</Button>
           </form>




        </Box>
      </Backdrop>
    </>
  );
};

export default PaymentMethods;
