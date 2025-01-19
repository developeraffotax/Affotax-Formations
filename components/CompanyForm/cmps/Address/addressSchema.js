import { z } from 'zod';


export const addressSchema = z.object({
    name_or_number: z.string().min(3, 'Must Required'),
    street: z.string().min(3, 'Must Required'),
    locality: z.string(),
    town: z.string().min(3, 'Must Required'),
    county: z.string(),
    postcode: z.string().min(3, 'Must Required'),
    country: z.string(),

    
 
 
  //   companyType: z.enum(['Private Limited', 'Public Limited', 'LLP'], 'Please select a valid company type'),
  });