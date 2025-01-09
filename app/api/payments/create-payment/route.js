import { Client } from "square";
import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN_SERVER,
  environment: process.env.NODE_ENV === "production" ? "production" : "sandbox",
});



export async function POST(request) {
  const { sourceId, orderId, userId } = await request.json();

  try {
    const supabase = await createClient();

    const session = await supabase.auth.getSession();

    if (!session) {
      throw new Error("Failed to authenticate");
    }

    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: sourceId,
      amountMoney: {
        currency: "GBP",
        amount: 500,
      },
      referenceId: orderId.toString(),  // actual order_id in the db
      customerId: userId,
      
    });
    console.log(result);


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

  redirect("/success-page");
}
