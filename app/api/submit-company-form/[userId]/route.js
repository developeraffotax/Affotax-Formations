// import { createClient } from "@supabase/supabase-js";
// import axios from "axios";



// export async function POST(req, {params}) {


    
//     const {userId} = await params;
//      //const { companyName} = await req.json();
    
   
   
//      const adminAuthClient = createClient( process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { autoRefreshToken: false, persistSession: false, }, } );
   
     
   
//      const { data: { user }, error: userError, } = await adminAuthClient.auth.admin.getUserById()
   
//      const { data: orders, error: orderError } = await adminAuthClient .from("orders") .select() .eq("id", order_id);


   

     
   
//     try {


        
//         return new Response(JSON.stringify({ message: "COMPANY FORM SUBMITTED"  }), {
//             status: 200,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });


//     } catch (error) {
//         console.error('Error occured while submitting company form', error);


//         return new Response(JSON.stringify({ error: 'Error occured while submitting company form' }), {
//             status: 500,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     }
// }
