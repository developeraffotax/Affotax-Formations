"use client";

import { Alert, Backdrop, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress, MenuItem, Skeleton, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardComponent from "./Card";
import SquareForm from "./SquareFrom/SquareForm";
import { COUNTRIES } from "@/components/clientSignup/CountrySelect";
import { countryToAlpha2 } from "country-to-iso";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";


const PaymentMethods = () => {





  const [dialogue, setDialogue] = useState({
    openStatus: false,
    deleteId: ''
  });

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleDialogueClose = () => {
    setDialogue({
      openStatus: false,
      deleteId: ''
    });
  };
 



  const [open, setOpen] = useState(false);

  const [cards, setCards] = useState([]);

  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const [cardHolder, setCardHolder] = useState({
    fullName: '',
    address: '',
    locality: '',
    country: 'GB',
  })

 

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




  const fetchCards = async () => {
    setIsFetching(true)
    try {
      const {data, status} = await axios.get('/api/cards/list');

      console.log(data)
    if(status === 200 && data.cards) {
      setCards(data.cards)
    }
    } catch (error) {
        console.log(error);

         toast.error(error?.message || 'Failed to fetch cards', {
        containerId: 'fetching_payment_error',

       })
    } finally {
      setIsFetching(false)
    }






  }



  useEffect(() => {

    fetchCards()


  }, [])

  // console.log(cardHolder)

  // const formSubmitHandler = (event) => {
  //     event.preventDefault();





  //   console.log(formData)

  // }



  const deletCardHandler = async ( ) => {
    //setIsDeleting(true)
    setIsFetching(true)
    try { 
      const {data, status} = await axios.get(`/api/cards/disable?cardId=${dialogue.deleteId}`);
      console.log(data)

        if(status === 200) {
          setCards((prev) => {

            return prev.filter(card => card.id !== dialogue.deleteId)




          })
        }



    } catch (error) {
      console.log(error);


      toast.error()
    } finally {
      setIsFetching(false);
      handleDialogueClose();
      //setIsDeleting(false)
    }




  }






  return (
    <>  
        <Dialog
        open={dialogue.openStatus}
        onClose={handleDialogueClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this card?
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogueClose}>Cancel</Button>
          <Button color="error" variant="contained" loading={isFetching} onClick={deletCardHandler}  >
            Delete
          </Button>
        </DialogActions>
      </Dialog>



      <ToastContainer containerId={'fetching_payment_error'} position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
      <Stack spacing={2} justifyContent={"start"} alignItems={"start"}>
        

      {cards.length === 0 && !isFetching && <Alert severity="info" color="error">No Cards Saved!</Alert>}
        {
          isFetching ? <Box sx={{ width: 350, }}>
          <Skeleton height={170} />
          <Skeleton height={170} />
          <Skeleton height={170} />
           
        </Box> : 
cards?.map((card) => {

  return <CardComponent key={card.id} deletCardHandler={() => setDialogue({openStatus: true, deleteId: card.id})} last4={card.last4} cardholderName={card.cardholderName} expMonth={card.expMonth} expYear={card.expYear} cardBrand={card.cardBrand} />


})


        }

        
        {/* {
          cards.map((card) => {

            return <CardComponent key={card.id} last4={card.last4} cardholderName={card.cardholderName} expMonth={card.expMonth} expYear={card.expYear} cardBrand={card.cardBrand} />


          })
        } */}


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

        <div className="w-full "></div>
        <Box  display="flex" flexDirection={"column"} gap={2} justifyContent="center" alignItems="center" sx={{ width: "100%", padding: 2,  position:'absolute'  }} >

            

           <form   className="w-[30%] max-lg:w-full  flex flex-col justify-center items-start gap-2 bg-gray-100  p-8 rounded-md ">
            
              {errorMessage && <Alert variant="filled" severity="error" sx={{width: '100%'}}> {errorMessage} </Alert>}



           <TextField size="small" label="Cardholder Name" sx={{width: '100%', backgroundColor: 'white'}} name="fullName" required onChange={handleChange} value={cardHolder.fullName}/>

            <Typography sx={{fontFamily: 'poppins', fontWeight: 600, }}>Cardholder Billing Address</Typography>
           <TextField size="small" label="Address" sx={{width: '100%', backgroundColor: 'white'}} name="address" required onChange={handleChange} value={cardHolder.address}/>
           <TextField size="small" label="Locality" sx={{width: '100%', backgroundColor: 'white'}} name="locality" required onChange={handleChange}  value={cardHolder.locality}/>
           <TextField    size="small" label="Country" sx={{width: '100%', backgroundColor: 'white'}} name="country" select required onChange={handleChange}  value={cardHolder.country} >

            {
              COUNTRIES.map((country) => {
                return  <MenuItem key={country} value={countryToAlpha2(country)} >
                {country}
              </MenuItem>
              })
            }

            </TextField>





          <div className="w-full ">
          <SquareForm cardHolder={cardHolder} setErrorMessage={setErrorMessage} setCards={setCards} handleClose={handleClose} setCardHolder={setCardHolder} />
          </div>


            <Button onClick={handleClose} variant="text" color="" sx={{width: '100%', }}>Cancel</Button>
           </form>




        </Box>
      </Backdrop>
    </>
  );
};

export default PaymentMethods;
