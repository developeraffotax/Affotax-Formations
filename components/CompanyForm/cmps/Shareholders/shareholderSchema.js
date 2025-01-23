import { z } from "zod";

export const shareholderSchema = z.object({


  shareholders: z.array(
    z.object({
      shareholder_title: z.string(),
      shareholder_first_name: z.string().min(1, "Required"),
      shareholder_middle_name: z.string(),
      shareholder_last_name: z.string().min(1, "Required"),
      shareholder_nationality: z.string().min(1, "Required"),
      shareholder_country_of_residence: z.string().min(1, "Required"),
      shareholder_num_of_shares: z.number().min(1).max(100000),

      shareholder_address_name_or_number: z.string().min(1, 'Must Required'),         // building name or number
      shareholder_address_street: z.string().min(1, 'Must Required'),
      shareholder_address_locality: z.string(),
      shareholder_address_town: z.string().min(1, 'Must Required'),
      shareholder_address_county: z.string(),
      shareholder_address_postcode: z.string().min(1, 'Must Required'),
      shareholder_address_country: z.string().min(1, "Required"),
    }),

  ),



  share_currency: z.string(),

  num_of_share_holders: z.number().min(1).max(10),
  num_of_shares: z.number().min(1).max(100000),
  value_per_share:  z.number().min(1).max(100000),
  // total_shares: z.number(),


   
});
 