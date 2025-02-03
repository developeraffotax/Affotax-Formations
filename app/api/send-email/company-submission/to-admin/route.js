import { render } from "@react-email/components";
import nodemailer from "nodemailer";


import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";
import AdminEmail from "@/utils/EmailTemplate/AdminEmail";
import { AdminEmailCompanyFormation } from "@/utils/EmailTemplate/AdminEmailCompanyFormation";
import { PDFDocument, rgb } from "pdf-lib";



export async function POST(req) {




  const { companyInfo, address, directors, shareholders, orderId} = await req.json();


  console.log(companyInfo)
  console.log(address)
  console.log(directors)
  console.log(shareholders)
  console.log(orderId)










 


  // Access auth admin api

  const adminAuthClient = createClient( process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false, }, } );

  // const { data: { user }, error: userError, } = await adminAuthClient.auth.admin.getUserById(customer_id);

//  try {
  
//  } catch (error) {
//     console.log(error)
//  }




  











































  






































  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {





    const { data: orders, error: orderError } = await adminAuthClient.from("orders").select("order_ref, user_id").eq("id", orderId);

    const { data: { user }, error: userError, } = await adminAuthClient.auth.admin.getUserById(orders[0]?.user_id);


    // const { data: users, error: userError } = await adminAuthClient.from("users").select("raw_user_meta_data").eq("id", orders[0]?.user_id);



    console.log(orders)
    console.log(user)
    console.log(userError)











    const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([400, 600]);
  const {height, width} = page.getSize();

  
  // const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);
 

  page.drawText(`COMPANY INFO `, {x: 20, y: height - 40,   size: 16, color: rgb(1, 0.647, 0) });
  page.drawText(`Company Name = ${companyInfo?.company_name} ${companyInfo?.company_suffix}`, {x: 20, y: height - 60,   size: 10 });
  page.drawText(`SIC Codes = ${companyInfo?.sic_codes?.join(', ')}`, {x: 20, y: height - 70,   size: 10 });
  page.drawText(`Registered In = ${companyInfo?.registered_in}`, {x: 20, y: height - 80,   size: 10 });

  page.drawLine({
    start: { x: 0, y: height - 90 },
    end: { x: width,  y: height - 90 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.75,
  })



  page.drawText(`REGISTERED OFFICE ADDRESS `, {x: 20, y: height - 120,   size: 16, color: rgb(1, 0.647, 0)  });
  page.drawText(`Building Name/Number = ${address?.name_or_number}`, {x: 20, y: height - 140,   size: 10 });
  page.drawText(`Street = ${address?.street}`, {x: 20, y: height - 150,   size: 10 });
  page.drawText(`Locality = ${address?.locality}`, {x: 20, y: height - 160,   size: 10 });
  page.drawText(`Town = ${address?.town}`, {x: 20, y: height - 170,   size: 10 });
  page.drawText(`County = ${address?.county}`, {x: 20, y: height - 180,   size: 10 });
  page.drawText(`Postcode = ${address?.postcode}`, {x: 20, y: height - 190,   size: 10 });
  page.drawText(`Country = ${address?.country}`, {x: 20, y: height - 200,   size: 10 });

  page.drawLine({
    start: { x: 0, y: height - 210 },
    end: { x: width,  y: height - 210 },
    thickness: 1,
    color: rgb(0, 0, 0),
    opacity: 0.75,
  })







  // directors
  page.drawText(`DIRECTORS `, {x: 20, y: height - 240,   size: 16, color: rgb(1, 0.647, 0)  });

  page.drawText(`Title = ${directors?.person_title}`, {x: 20, y: height - 260,   size: 10 });
  page.drawText(`First Name = ${directors?.person_first_name}`, {x: 20, y: height - 270,   size: 10 });
  page.drawText(`Middle Name = ${directors?.person_middle_name}`, {x: 20, y: height - 280,   size: 10 });
  page.drawText(`Last Name = ${directors?.person_last_name}`, {x: 20, y: height - 290,   size: 10 });
  page.drawText(`Date of Birth = ${directors?.person_dob}`, {x: 20, y: height - 300,   size: 10 });
  page.drawText(`Nationality = ${directors?.person_nationality}`, {x: 20, y: height - 310,   size: 10 });
  page.drawText(`Occupation = ${directors?.person_occupation}`, {x: 20, y: height - 320,   size: 10 });
  page.drawText(`Country of Residence = ${directors?.person_country_of_residence}`, {x: 20, y: height - 330,   size: 10 });


  page.drawText(`SERVICE ADDRESS`, {x: 20, y: height - 350,   size: 10, color: rgb(1, 0.647, 0) });

  page.drawText(`Building Name/Number  = ${directors?.service_address_name_or_number}`, {x: 20, y: height - 360,   size: 10 });
  page.drawText(`Street = ${directors?.service_address_street}`, {x: 20, y: height - 370,   size: 10 });
  page.drawText(`Locality = ${directors?.service_address_locality}`, {x: 20, y: height - 380,   size: 10 });
  page.drawText(`Town = ${directors?.service_address_town}`, {x: 20, y: height - 390,   size: 10 });
  page.drawText(`County = ${directors?.service_address_county}`, {x: 20, y: height - 400,   size: 10 });
  page.drawText(`Postcode = ${directors?.service_address_postcode}`, {x: 20, y: height - 410,   size: 10 });
  page.drawText(`Country = ${directors?.service_address_country}`, {x: 20, y: height - 420,   size: 10 });
  



  page.drawText(`RESIDENTIAL ADDRESS`, {x: 20, y: height - 440,   size: 10, color: rgb(1, 0.647, 0) });

  page.drawText(`Building Name/Number = ${directors?.residential_address_name_or_number}`, {x: 20, y: height - 450,   size: 10 });
  page.drawText(`Street= ${directors?.residential_address_street}`, {x: 20, y: height - 460,   size: 10 });
  page.drawText(`Locality = ${directors?.residential_address_locality}`, {x: 20, y: height - 470,   size: 10 });
  page.drawText(`Town = ${directors?.residential_address_town}`, {x: 20, y: height - 480,   size: 10 });
  page.drawText(`County = ${directors?.residential_address_county}`, {x: 20, y: height - 490,   size: 10 });
  page.drawText(`Postcode = ${directors?.residential_address_postcode}`, {x: 20, y: height - 500,   size: 10 });
  page.drawText(`Country = ${directors?.residential_address_country}`, {x: 20, y: height - -510,   size: 10 });





















  // page.drawText(`SHAREHOLDERS`, {x: 20, y: height - 40,   size: 16, color: rgb(1, 0.647, 0) });

  // page.drawText(`Share Currency = ${shareholders?.share_currency} `, {x: 20, y: height - 60,   size: 10 });
  // page.drawText(`Number of Share Holders = ${shareholders?.num_of_share_holders}`, {x: 20, y: height - 70,   size: 10 });
  // page.drawText(`Number of Shares = ${shareholders?.num_of_shares}`, {x: 20, y: height - 80,   size: 10 });
  // page.drawText(`Value per Share = ${shareholders?.value_per_share}`, {x: 20, y: height - 90,   size: 10 });
  // page.drawText(`Total Shares = ${shareholders?.total_shares}`, {x: 20, y: height - 100,   size: 10 });


  shareholders?.shareholders.forEach((shareholder, index) => {

    const page = pdfDoc.addPage([400, 600]);
     const {height, width} = page.getSize();


    page.drawText(`SHAREHOLDER ${index + 1}`, {x: 20, y: height - 40,   size: 16, color: rgb(1, 0.747, 0) });

  page.drawText(`PERSON DETAILS`, {x: 20, y: height - 70,   size: 12, color: rgb(1, 0.647, 0) });

  page.drawText(`Title = ${shareholder?.shareholder_title}`, {x: 20, y: height - 80,   size: 10 });
  page.drawText(`First Name = ${shareholder?.shareholder_first_name}`, {x: 20, y: height - 90,   size: 10 });
  page.drawText(`Middle Name = ${shareholder?.shareholder_middle_name}`, {x: 20, y: height - 100,   size: 10 });
  page.drawText(`Last Name = ${shareholder?.shareholder_last_name}`, {x: 20, y: height - 110,   size: 10 });
  page.drawText(`Date of Birth = ${shareholder?.shareholder_person_dob}`, {x: 20, y: height - 120,   size: 10 });
  page.drawText(`Nationality = ${shareholder?.shareholder_nationality}`, {x: 20, y: height - 130,   size: 10 });
  page.drawText(`Country of Residence = ${shareholder?.shareholder_country_of_residence}`, {x: 20, y: height - 140,   size: 10 });
  page.drawText(`Number of Shares = ${shareholder?.shareholder_num_of_shares}`, {x: 20, y: height - 150,   size: 10 });


  page.drawText(`PERSON ADDRESS`, {x: 20, y: height - 170,   size: 12, color: rgb(1, 0.647, 0) });

  page.drawText(`Building Name/Number  = ${shareholder?.shareholder_address_name_or_number}`, {x: 20, y: height - 180,   size: 10 });
  page.drawText(`Street = ${shareholder?.shareholder_address_street}`, {x: 20, y: height - 190,   size: 10 });
  page.drawText(`Locality = ${shareholder?.shareholder_address_locality}`, {x: 20, y: height - 200,   size: 10 });
  page.drawText(`Town = ${shareholder?.shareholder_address_town}`, {x: 20, y: height - 210,   size: 10 });
  page.drawText(`County = ${shareholder?.shareholder_address_county}`, {x: 20, y: height - 220,   size: 10 });
  page.drawText(`Postcode = ${shareholder?.shareholder_address_postcode}`, {x: 20, y: height - 230,   size: 10 });
  page.drawText(`Country = ${shareholder?.shareholder_address_country}`, {x: 20, y: height - 240,   size: 10 });





    
  page.drawLine({ start: { x: 0, y: 300 }, end: { x: width,  y: 300 }, thickness: 1, color: rgb(0, 0, 0), opacity: 0.75, })

  page.drawText(`SHARE CAPITAL`, {x: 20, y: 280,   size: 16, color: rgb(1, 0.647, 0) });

  page.drawText(`Share Currency = ${shareholders?.share_currency} `, {x: 20, y: 260,   size: 12 });
  page.drawText(`Number of Shareholders = ${shareholders?.num_of_share_holders}`, {x: 20, y: 240,   size: 12 });
  page.drawText(`Number of Shares = ${shareholders?.num_of_shares}`, {x: 20, y: 220,   size: 12 });
  page.drawText(`Value per Share = ${shareholders?.value_per_share}`, {x: 20, y: 200,   size: 12 });
  page.drawText(`Total Shares = ${shareholders?.total_shares}`, {x: 20, y: 180,   size: 12 });





  })


  




























  const pdfBytes = await pdfDoc.save()




   // const emailHtml = await render( <AdminEmailCompanyFormation customerEmail={user?.email} recipientName={user?.user_metadata?.account_holder?.forename} amount={orders[0]?.total} orderRef={orders[0]?.order_ref}    date={new Date().toDateString()} /> );

    const options = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, //admin email
      subject: `${companyInfo?.company_name} | COMPANY REGISTRATION FORM | AFFOTAX FORMATIONS`,
      text: `
        Order Id : ${orderId}
        Order Ref : ${orders[0].order_ref}
        Customer Name : ${user?.user_metadata?.account_holder?.forename + ' ' + user?.user_metadata?.account_holder?.surname}
        Customer Email : ${user?.email}

        Company Name : ${companyInfo?.company_name}
      
      `,
       
      attachments: [
        {
          filename: `${companyInfo?.company_name}.pdf`,
          content: pdfBytes,
          encoding: 'base64'
        }
      ]

       
    };

    await transporter.sendMail(options);

    

    return NextResponse.json({ message: "COMPANY FORMATION EMAIL SENT" }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "error occured while sending the company formation email", error: error }, { status: 500 });
  }
}








