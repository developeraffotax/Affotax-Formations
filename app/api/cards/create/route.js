import { Client } from "square";
import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import next from "next";
import { countryToAlpha2 } from "country-to-iso";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { cardsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN_SERVER,
  environment:"sandbox",
});



export async function POST(request) {
  const { sourceId,  cardholderName, billingAddress, card} = await request.json();



  // get here  referenceId, customerId,
  try { 
    const supabase = await createClient();

    const {data: {session: {user}}, error} = await supabase.auth.getSession();
    
    if (!user) {
      throw new Error("Failed to authenticate");
    }

    console.log(user)
    const customerId = user.user_metadata?.account_holder?.square_customer_id;
    const {result: {card}} = await cardsApi.createCard({
        idempotencyKey: randomUUID(),
        sourceId: sourceId,
        card: {
            billingAddress: billingAddress,
            cardholderName: cardholderName,
            customerId: customerId,
            // referenceId: referenceId,
        },
    })
    
    console.log(card)
    return new Response(
      JSON.stringify({ success: true, card: card }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error occured while creating a new card" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

 // redirect(`/success-page?orderId=${orderId.toString()}`);
}
