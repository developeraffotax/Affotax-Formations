import { render } from "@react-email/components";
import nodemailer from "nodemailer";


import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";
import AdminEmail from "@/utils/EmailTemplate/AdminEmail";



export async function POST(req) {




  const { data: { object: { payment: { reference_id: order_id, customer_id } } } } = await req.json();


  const adminAuthClient = createClient( process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false, }, } );

  // Access auth admin api

  const { data: { user }, error: userError, } = await adminAuthClient.auth.admin.getUserById(customer_id);

  const { data: orders, error: orderError } = await adminAuthClient .from("orders") .select() .eq("id", order_id);

  const { data: order_items, error: orderItemsError } = await adminAuthClient .from("order_items") .select() .eq("order_id", order_id);




  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    const emailHtml = await render( <AdminEmail customerEmail={user?.email} recipientName={user?.user_metadata?.account_holder?.forename} amount={orders[0]?.total} orderRef={orders[0]?.order_ref} ordersArr={order_items}   date={new Date().toDateString()} /> );

    const options = {
      from: process.env.GMAIL_USER,
      to: "affotaxit2@gmail.com", //admin email
      subject: "NEW ORDER RECEIVED | AFFOTAX FORMATIONS",
      html: emailHtml,
    };

    await transporter.sendMail(options);

    

    return NextResponse.json({ message: "EMAIL SENT" }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "error occured" }, { status: 500 });
  }
}








