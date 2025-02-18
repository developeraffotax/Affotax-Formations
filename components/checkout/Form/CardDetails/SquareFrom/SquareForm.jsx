"use client";

import { CreditCard, PaymentForm, GooglePay} from "react-square-web-payments-sdk";

export default function SquareForm({ errors, outerFormSubmitHandler }) {
  const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID;
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;

  return (
    <PaymentForm
      applicationId={appId}
      locationId={locationId}
      // createVerificationDetails={}

      cardTokenizeResponseReceived={async (token) => {

        

        try {
          localStorage.setItem("payment_id", token.token);
          outerFormSubmitHandler();
        } catch (error) {
          console.log(error.message);
        }
      }}
    >
      
     
      


      {/* <GooglePay /> */}
      <CreditCard
        buttonProps={{
          css: {
            backgroundColor: "#0fc3e2",

            "&:hover": {
              backgroundColor: "#0da9c4",
            },

            fontSize: "16px",
            fontFamily: "poppins",
            color: "#fff",
          },
        }}
      />
    </PaymentForm>
  );
}


























// createPaymentRequest={() => ({
//   countryCode: "US",
//   currencyCode: "USD",
//   lineItems: [
//     {
//       amount: "22.15",
//       label: "Item to be purchased",
//       id: "SKU-12345",
//       imageUrl: "https://url-cdn.com/123ABC",
//       pending: true,
//       productUrl: "https://my-company.com/product-123ABC"
//     }
//   ],
//   taxLineItems: [
//     {
//       label: "State Tax",
//       amount: "8.95",
//       pending: true
//     }
//   ],
//   discounts: [
//     {
//       label: "Holiday Discount",
//       amount: "5.00",
//       pending: true
//     }
//   ],

//   requestBillingContact: false,
//   requestShippingContact: false,
//   shippingOptions: [
//     {
//       label: "Next Day",
//       amount: "15.69",
//       id: "1"
//     },
//     {
//       label: "Three Day",
//       amount: "2.00",
//       id: "2"
//     }
//   ],
  
//   // pending is only required if it's true.
//   total: {
//     amount: "41.79",
//     label: "Total",
//   },
// })}