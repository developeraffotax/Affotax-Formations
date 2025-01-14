import axios from "axios";



const API_URL = process.env.OS_DATA_HUB_API_URL;
const API_KEY = process.env.OS_DATA_HUB_API_KEY;



 
 

export async function POST(req) {

    const { query } = await req.json();

    try {
        const res = await axios.get(`${API_URL}/search/names/v1/find?query=${query}&key=${API_KEY}&maxresults=10`);

        
            const addressArr = res.data?.results.map((el) => {


                return {
                    post_code: query,
                    town: el?.GAZETTEER_ENTRY?.POPULATED_PLACE,
                    county: el?.GAZETTEER_ENTRY?.COUNTY_UNITARY,
                    country: el?.GAZETTEER_ENTRY?.COUNTRY,
                    street: 'asd',
                    name_or_number: ''


                }



            })

            return new Response(JSON.stringify(res.data), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    } catch (error) {
            console.log(error)
    }
}



