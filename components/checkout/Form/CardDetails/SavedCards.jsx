"use client"

 
import { Alert, Button, Card, CardActionArea, CardContent, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import SavedCard from "./SavedCard";




const SavedCards = ({outerFormSubmitHandler}) => {

    const [value, setValue] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        localStorage.setItem("payment_id", value);
    }, [value])


    const handleChange = (event) => {
      setErrorMsg('')
      setValue(event.target.value);
    };


     const [cards, setCards] = useState([]);

    const [isLoading, setIsLoading] = useState(false)

      
    const submit = () => {


      if(!value) {
        return setErrorMsg("Please select a card")
      }


      outerFormSubmitHandler()
    }



  const fetchCards = async () => {
    setIsLoading(true)
    try {
      const {data, status} = await axios.get('/api/cards/list');

      console.log(data)
    if(status === 200 && data.cards) {
      setCards(data.cards)
    }
    } catch (error) {
        console.log(error);

    //      toast.error(error?.message || 'Failed to fetch cards', {
    //     containerId: 'fetching_payment_error',

    //    })
    } finally {
        setIsLoading(false)
    }






  }



  useEffect(() => {

    fetchCards()


  }, [])


  return (



    <>
       
      {
        isLoading ? <CircularProgress /> :
        <Stack spacing={2} justifyContent={"start"} alignItems={"start"}>
      <FormControl sx={{
        width: '100%',
        maxWidth: 'none'
       }}  >
    <FormLabel id="demo-controlled-radio-buttons-group">Select Existing Card</FormLabel>
    {
         cards.length === 0 && !isLoading && <Alert severity="info" color="error">No Cards Saved!</Alert>
    }
    <RadioGroup
    
       sx={{
        width: '100%',
        maxWidth: 'none'
       }} 
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
        {
            cards.map((card) => {


                return <SavedCard key={card.id} {...card} value={value}/>
            })
        }



    </RadioGroup>
    {
      errorMsg && <p className="w-full text-start text-red-500">{errorMsg}</p>
    }

   {
    cards.length !== 0 &&  <Button sx={{ backgroundColor: '#0FC3E2', width: '100%', paddingY: 1 }} onClick={submit} variant="contained">Pay</Button>
   }
  </FormControl>

     

         
      </Stack>
      }
      
      </>

    
    
  );
};

export default SavedCards;














{/* <ToastContainer containerId={'fetching_payment_error'} position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} /> */}