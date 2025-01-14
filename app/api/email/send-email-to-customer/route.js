// import { render } from '@react-email/components';
// import nodemailer from 'nodemailer';

// import { CustomerEmail } from '@/utils/EmailTemplate/CustomerEmail';
// import { NextResponse } from 'next/server';

// export async function POST(req) {

//     //const {customerEmail, subject, } = await req.json();

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.GMAIL_USER,
//             pass: process.env.GMAIL_PASS,
//         },
        

//     });

      


//     try {
//         const emailHtml = await render(<CustomerEmail url="https://example.com" />);
      
//         const options = {
//           from: process.env.GMAIL_USER,
//           to: 'affotaxit2@gmail.com',
//           subject: 'hello world',
//           html: emailHtml,
//         };
        
//       const a =   await transporter.sendMail(options);
  
//       console.log(a)
  
//         return NextResponse.json({ message: 'email send' }, { status: 200 })
//     } catch (error) {


//         console.log(error)

//         return NextResponse.json({ message: 'error occured' }, { status: 500 })
//     }

     

// }
