"use client";

import { Button, divider, Spinner } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CreditCard, PaymentForm, } from "react-square-web-payments-sdk";

export default function SquareForm({errors, trigger }) {


	const appId = "sandbox-sq0idb-gASJb-Nb95rkIZVJwrmdzQ";						
	const locationId = "L3BCKHG9DGWDX";


	

	return (
		<PaymentForm

			
			applicationId={appId}
			locationId={locationId}
 			cardTokenizeResponseReceived={async (token) => {
				
				try {
					//setIsError(false)

                    // create a customer here first

                    // craete a order then

					
                    //then payemtn
				const result = await axios.post('/api/payments/create-payment', {
                    token: token.token,

                })











				// our orders api will run here
				
				// if (result.payment.status !== 'COMPLETED') {
				// 	setIsError(true)
				// } else {
					

				// 	const res = await createOrder(customerData, orderData, result.payment.id);

				// 	localStorage.removeItem('price_id')

				// 	if (!res) {
				// 		setIsError(true);
				// 	}

					

				// }
				} catch (error) {
					
					setIsError(true);

				}




			}}
		>	

		
			
			<CreditCard>

					<button>
							SUBMIT

					</button>

					<button>
						ss
					</button>

			</CreditCard>
			
					

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




