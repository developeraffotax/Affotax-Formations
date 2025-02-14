import { Client } from "square";
import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import next from "next";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { customersApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN_SERVER,
  environment: "sandbox",
});


// --------------------------------------------------------------Create square customer-----------------------------------------------------------------------------
export async function POST(request) {
  const { emailAddress, givenName } = await request.json();

  try {
    const { result: { customer }, } = await customersApi.createCustomer({
      emailAddress: emailAddress,
      givenName: givenName
      
    });

    return new Response(JSON.stringify({ success: true, customer: customer }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error occured while creating square cutomer" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

 
}
