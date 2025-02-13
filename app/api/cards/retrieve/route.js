import { Client } from "square";
import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import next from "next";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { cardsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN_SERVER,
  environment: "sandbox",
});

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const cardId = searchParams.get("cardId");

  try {
    const supabase = await createClient();

    const session = await supabase.auth.getSession();

    if (!session) {
      throw new Error("Failed to authenticate");
    }

    const { result: {card} } = await cardsApi.retrieveCard(cardId)

    return new Response(JSON.stringify({ card: card }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });



  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Error occured while fetching cards" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
