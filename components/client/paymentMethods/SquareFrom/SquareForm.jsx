"use client";

import { TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
 
import { useRef } from "react";
import { CreditCard, PaymentForm,  } from "react-square-web-payments-sdk";

export default function SquareForm({cardHolder, setErrorMessage, }) {
  
  const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID;
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;

 


 

  return (
    <PaymentForm
      applicationId={appId}
      locationId={locationId}
       
       

      cardTokenizeResponseReceived={async (token) => {

        if(!cardHolder.fullName || !cardHolder.address ||  !cardHolder.locality ||  !cardHolder.country  ) {
          setErrorMessage("Please fill all the required fields")
          return console.log(cardHolder)
        }
        

        
        try {

          setErrorMessage('')
           
              const {data, status, } = await axios.post('/api/cards/create', {

                sourceId: token.token,
                // card: token.details.card,
                
                cardholderName: cardHolder?.fullName,
                billingAddress:{
                  ...cardHolder,
                  postalCode: token.details.billing.postalCode,
                  
                },
              })


            // console.log(data)

              if(status === 201) {

                window?.location?.reload()
                // setCards((prev) => {

                //   return [
                //     ...prev,
                //     data.card
                //   ]
                // })

                // console.log(ref.current)
                // handleClose()
                // ref?.current?.remove();
                // setCardHolder({
                //   fullName: '',
                //   address: '',
                //   locality: '',
                //   country: 'GB',
                // })

              }



               





        } catch (error) {

          setErrorMessage(error?.message || 'Failed to add new card!')
          console.log(error.message);
        }  
      }}
    > 


      
      <CreditCard
          
         

        buttonProps={{
          css: {
            backgroundColor: "#1976D2",

            "&:hover": {
              backgroundColor: "#0e5fb0",
            },

            fontSize: "16px",
            fontFamily: "poppins",
            color: "#fff",
          },
        }}
      >Add Card </CreditCard>


 

    </PaymentForm>
  );
}
