import axios from "axios";



const API_URL = process.env.COMPANIES_HOUSE_API_URL;
const API_KEY = process.env.COMPANIES_HOUSE_API_KEY;




export async function POST(req) {

    const { companyName} = await req.json();

    const url = `${API_URL}/search/companies?q=${companyName}&restrictions=active-companies legally-equivalent-company-name`
   
    try {
        const {data} = await axios.get(url, {
            headers: {
                Authorization: `Basic ${btoa(API_KEY + ':')}`
            }
        })

        let isCompanyNameAvailable;
        let message;

        console.log(data)

        if(data.items.length > 0) {
            isCompanyNameAvailable=false;
            message="This company name is not available! Try some other name";
        } else {
            isCompanyNameAvailable=true;
            message="Congrats! This company name is available";
        }

        return new Response(JSON.stringify({ message: message, isCompanyNameAvailable:isCompanyNameAvailable, data:data }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });


    } catch (error) {
        console.error('Error occured while searcing company name', error);
        return new Response(JSON.stringify({ error: 'Error occured while searcing company name' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
