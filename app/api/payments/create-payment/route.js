import { Client } from "square";
import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import next from "next";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN_SERVER,
  environment:"sandbox",
});



export async function POST(request) {
  const { sourceId, orderId, userId, amount, buyerEmailAddress } = await request.json();

  try {
    const supabase = await createClient();

    const session = await supabase.auth.getSession();

    if (!session) {
      throw new Error("Failed to authenticate");
    }

    const totalAmout = (+amount) * 100;
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: sourceId,
      amountMoney: {
        currency: "GBP",
        amount: totalAmout,
      },
      referenceId: orderId.toString(),  // actual order_id in the db
      customerId: userId,

      buyerEmailAddress: buyerEmailAddress
      
    });
    
    console.log(result)
    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error occured while capturing payments" }),
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
