import { z } from 'zod';


export const addressSchema = z.object({
    name_or_number: z.string().min(1, 'Must Required'),
    street: z.string().min(1, 'Must Required'),
    locality: z.string(),
    town: z.string().min(1, 'Must Required'),
    county: z.string(),
    postcode: z.string().min(1, 'Must Required'),
    country: z.string().min(1, 'Must Required'),

    company_suffix: z.string(),

    
 
 
  //   companyType: z.enum(['Private Limited', 'Public Limited', 'LLP'], 'Please select a valid company type'),
  });