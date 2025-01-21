import { z } from 'zod';


export const directorsSchema = z.object({


    person_title: z.string(),
    person_first_name: z.string().min(1, "Required"),
    person_middle_name: z.string(),
    person_last_name: z.string().min(1, "Required"),
    // person_dob: z.string().min(1, "Required"),
    person_nationality: z.string().min(1, "Required"),
    person_occupation: z.string().min(1, "Required"),
    person_country_of_residence: z.string().min(1, "Required"),





    service_address_name_or_number: z.string().min(1, 'Must Required'),
    service_address_street: z.string().min(1, 'Must Required'),
    service_address_locality: z.string(),
    service_address_town: z.string().min(1, 'Must Required'),
    service_address_county: z.string(),
    service_address_postcode: z.string().min(1, 'Must Required'),
    service_address_country: z.string(),




    residential_address_isSameAsService: z.boolean(),
    residential_address_name_or_number: z.string().min(1, 'Must Required'),
    residential_address_street: z.string().min(1, 'Must Required'),
    residential_address_locality: z.string(),
    residential_address_town: z.string().min(1, 'Must Required'),
    residential_address_county: z.string(),
    residential_address_postcode: z.string().min(1, 'Must Required'),
    residential_address_country: z.string(),

    
 
 
  //   companyType: z.enum(['Private Limited', 'Public Limited', 'LLP'], 'Please select a valid company type'),
  });