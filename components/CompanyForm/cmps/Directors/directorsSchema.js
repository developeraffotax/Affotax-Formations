import { z } from 'zod';


export const directorsSchema = z.object({


    person_title: z.string().min(1, "Required"),
    person_first_name: z.string().min(1, "Required"),
    person_middle_name: z.string(),
    person_last_name: z.string().min(1, "Required"),
    person_dob: z.date({coerce:true}).refine(date => date instanceof Date && !isNaN(date),  {
      message: "Please select a valid date",
    }).refine((date) => {
        const tenYearsAgo = new Date();
        tenYearsAgo.setFullYear(( new Date()).getFullYear() - 10);

        // Compare if the given date is greater than 10 years ago
        return (new Date(date)) < tenYearsAgo ? true : false
      
    }, {
      message: "You must be older than 10 years! 😥",
    }),
    person_nationality: z.string().min(1, "Required"),
    person_country_of_residence: z.string().min(1, "Required"),
    person_occupation: z.string().min(1, "Required"),





    service_address_name_or_number: z.string().min(1, 'Must Required'),
    service_address_street: z.string().min(1, 'Must Required'),
    service_address_locality: z.string(),
    service_address_town: z.string().min(1, 'Must Required'),
    service_address_county: z.string(),
    service_address_postcode: z.string().min(1, 'Must Required'),
    service_address_country: z.string().min(1, "Required"),




    residential_address_isSameAsService: z.boolean(),
    residential_address_name_or_number: z.string().min(1, 'Must Required'),
    residential_address_street: z.string().min(1, 'Must Required'),
    residential_address_locality: z.string(),
    residential_address_town: z.string().min(1, 'Must Required'),
    residential_address_county: z.string(),
    residential_address_postcode: z.string().min(1, 'Must Required'),
    residential_address_country: z.string().min(1, "Required"),

    
 
 
  //   companyType: z.enum(['Private Limited', 'Public Limited', 'LLP'], 'Please select a valid company type'),
  });