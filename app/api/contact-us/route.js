// app/api/send-email/route.js
// import sendMail from '@/lib/sendMail';

import sendMail from "@/lib/sendMail";

















export async function POST(req) {

    const { name, email, message } = await req.json();








   
    try {
        // Send mail
        const response = await sendMail(name, email,message);
        console.log(response)
        return new Response(JSON.stringify({ message: "Email sent successfully! We'll get back to you within 12 hours!" }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
