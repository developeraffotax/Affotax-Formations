"use client";

import { Button, divider, Spinner } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CreditCard, PaymentForm, } from "react-square-web-payments-sdk";

export default function SquareForm({errors, outerFormSubmitHandler }) {


	const appId = "sandbox-sq0idb-gASJb-Nb95rkIZVJwrmdzQ";						
	const locationId = "L3BCKHG9DGWDX";





	return (
		<PaymentForm

			
			applicationId={appId}
			locationId={locationId}
			
 			cardTokenizeResponseReceived={async (token) => {
				
				try {
					
					console.log(token)

					outerFormSubmitHandler()

				// }
				} catch (error) {
					console.log(error.message)
					//setIsError(true);

				}




			}}
		>	

		 
			
		 <CreditCard  />
			

		</PaymentForm>
	);
}





// render={(Btn) => <Btn    style={{ backgroundColor: '#000000', }}     >{"PAY SECURELY"}</Btn>}









// <CreditCard buttonProps={{
//         //   isLoading: true,
                
//           //onClick: onClick,
//           onClickCapture: onClick,
                
//           css: {
//             backgroundColor: '#0fc3e2',
              
//               '&:hover': {
//                 backgroundColor: '#0da9c4',
//               },
            
//             fontSize: '16px',
//             fontFamily: 'poppins',
//             color: '#fff',
            
//           },
          
          
//         }} />




