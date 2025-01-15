import { render } from '@react-email/components';
import nodemailer from 'nodemailer';

import { CustomerEmail } from '@/utils/EmailTemplate/CustomerEmail';
import { NextResponse } from 'next/server';

export async function POST(req) {

    const { recipientName, amount, orderRef,  ordersArr, email } = await req.json();

    console.log(req)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
        

    });

      


    try {
        const emailHtml = await render(<CustomerEmail recipientName={recipientName} amount={amount} orderRef={orderRef} ordersArr={ordersArr} />);
      
        const options = {
          from: process.env.GMAIL_USER,
          to: 'affotaxit2@gmail.com',
          subject: 'hello world',
          html: emailHtml,
        };
        
      const a =   await transporter.sendMail(options);
  
      console.log(a)
  
        return NextResponse.json({ message: 'email send' }, { status: 200 })
    } catch (error) {


        console.log(error)

        return NextResponse.json({ message: 'error occured' }, { status: 500 })
    }

     

}
































// {
//     "merchant_id": "6SSW7HV8K2ST5",
//     "type": "payment.created",
//     "event_id": "13b867cf-db3d-4b1c-90b6-2f32a9d78124",
//     "created_at": "2020-02-06T21:27:30.792Z",
//     "data": {
//       "type": "payment",
//       "id": "KkAkhdMsgzn59SM8A89WgKwekxLZY",
//       "object": {
//         "payment": {
//           "id": "hYy9pRFVxpDsO1FB05SunFWUe9JZY",
//           "created_at": "2020-11-22T21:16:51.086Z",
//           "updated_at": "2020-11-22T21:16:51.198Z",
//           "amount_money": {
//             "amount": 100,
//             "currency": "USD"
//           },
//           "status": "APPROVED",
//           "delay_duration": "PT168H",
//           "source_type": "CARD",
//           "card_details": {
//             "status": "AUTHORIZED",
//             "card": {
//               "card_brand": "MASTERCARD",
//               "last_4": "9029",
//               "exp_month": 11,
//               "exp_year": 2022,
//               "fingerprint": "sq-1-Tvruf3vPQxlvI6n0IcKYfBukrcv6IqWr8UyBdViWXU2yzGn5VMJvrsHMKpINMhPmVg",
//               "card_type": "CREDIT",
//               "prepaid_type": "NOT_PREPAID",
//               "bin": "540988"
//             },
//             "entry_method": "KEYED",
//             "cvv_status": "CVV_ACCEPTED",
//             "avs_status": "AVS_ACCEPTED",
//             "statement_description": "SQ *DEFAULT TEST ACCOUNT",
//             "card_payment_timeline": {
//               "authorized_at": "2020-11-22T21:16:51.198Z"
//             }
//           },
//           "location_id": "S8GWD5R9QB376",
//           "order_id": "03O3USaPaAaFnI6kkwB1JxGgBsUZY",
//           "risk_evaluation": {
//             "created_at": "2020-11-22T21:16:51.198Z",
//             "risk_level": "NORMAL"
//           },
//           "total_money": {
//             "amount": 100,
//             "currency": "USD"
//           },
//           "approved_money": {
//             "amount": 100,
//             "currency": "USD"
//           },
//           "capabilities": [
//             "EDIT_TIP_AMOUNT",
//             "EDIT_TIP_AMOUNT_UP",
//             "EDIT_TIP_AMOUNT_DOWN"
//           ],
//           "receipt_number": "hYy9",
//           "delay_action": "CANCEL",
//           "delayed_until": "2020-11-29T21:16:51.086Z",
//           "version_token": "FfQhQJf9r3VSQIgyWBk1oqhIwiznLwVwJbVVA0bdyEv6o"
//         }
//       }
//     }