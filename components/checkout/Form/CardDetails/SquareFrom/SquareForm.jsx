"use client";

import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

export default function SquareForm({ errors, outerFormSubmitHandler }) {
  const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID;
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;

  return (
    <PaymentForm
      applicationId={appId}
      locationId={locationId}
      cardTokenizeResponseReceived={async (token) => {
        try {
          localStorage.setItem("payment_id", token.token);
          outerFormSubmitHandler();
        } catch (error) {
          console.log(error.message);
        }
      }}
    >
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
