"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { MdLogin } from "react-icons/md";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Divider,
  Input,
  Select,
  SelectItem,
  Spinner,
} from "@heroui/react";
import { shareholderSchema } from "./shareholderSchema";
import { COUNTRIES } from "./countries";
import { v4 as uuidv4 } from "uuid";
import SelectCmp from "./SelectCmp";
import { TagsInput } from "react-tag-input-component";
import Link from "next/link";

const Summary = ({
  companyInfo,
  address,
  directors,
  shareholders,
  submitHandler,
  goBackBtnHandler,
  isLoading
}) => {
  // const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setIsErrorMsg] = useState("");

 
  const onBack = () => {
   
    goBackBtnHandler();
  };









  return (
    <>
      <div className="w-full ">



      {/* Company Information */}
      <div className="w-full mb-8">
          <h2 className="w-full text-start text-2xl font-poppins bg-cyan-500 text-white  py-2 px-4   ">
            Company Information
          </h2>

          <div className="w-full flex flex-col justify-start items-start gap-2       ">
            <table className="w-full  table-auto border-collapse font-Inter">
              <tbody>
                <tr className=" border border-collapse "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Company Name </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${companyInfo.company_name} ${companyInfo.company_suffix}`}{" "} </td>{" "} </tr>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%]  border-r ">Type</td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`Private Company Limited by Shares`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Registered In </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${companyInfo.registered_in}`}{" "} </td>{" "} </tr>
              </tbody>
            </table>
          </div>
        </div>










      {/* Registered Office */}
        <div className="w-full mb-8">
          <h2 className="w-full text-start text-2xl font-poppins bg-cyan-500 text-white   py-2 px-4   ">
          Registered Office
          </h2>

          <div className="w-full flex flex-col justify-start items-start gap-2       ">
            <table className="w-full  table-auto border-collapse font-Inter">
              <tbody>
                <tr className=" border border-collapse "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Building Name/Number </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${address.name_or_number}`}{" "} </td>{" "} </tr>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%]  border-r ">Street</td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {`${address.street}`} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Locality </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${address.locality}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Town </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${address.town}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> County </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${address.county}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Postcode </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${address.postcode}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Country </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${address.country}`}{" "} </td>{" "} </tr>
              </tbody>
            </table>
          </div>
        </div>












        {/* Directors */}
        <div className="w-full mb-8">
          <h2 className="w-full text-start text-2xl font-poppins bg-cyan-500 text-white py-2 px-4   ">
          Directors
          </h2>

          <div className="w-full flex flex-col justify-start items-start gap-2       ">
            <table className="w-full  table-auto border-collapse font-Inter">
              <tbody>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r text-gray-900  bg-gray-100 text-center" colSpan={2}> Director Details </td>{" "}  </tr>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Title </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.person_title}`}{" "} </td>{" "} </tr>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%]  border-r ">First Name</td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {`${directors.person_first_name}`} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Middle Name </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.person_middle_name}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Last Name </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.person_last_name}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Nationality </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.person_nationality}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Occupation </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.person_occupation}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  ">Country of Residence </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.person_country_of_residence}`}{" "} </td>{" "} </tr>
              </tbody>
            </table>
          </div>





          <div className="w-full flex flex-col justify-start items-start gap-2       ">
            <table className="w-full  table-auto border-collapse font-Inter">
              <tbody>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r text-gray-900  bg-gray-100 text-center" colSpan={2}> Residential Address </td>{" "}  </tr>
                <tr className=" border border-collapse "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Building Name/Number </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.service_address_name_or_number}`}{" "} </td>{" "} </tr>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%]  border-r ">Street</td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {`${directors.service_address_street}`} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Locality </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.service_address_locality}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Town </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.service_address_town}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> County </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.service_address_county}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Postcode </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.service_address_postcode}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Country </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.service_address_country}`}{" "} </td>{" "} </tr>
              </tbody>
            </table>
          </div>





          <div className="w-full flex flex-col justify-start items-start gap-2       ">
            <table className="w-full  table-auto border-collapse font-Inter">
              <tbody>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r text-gray-900  bg-gray-100 text-center" colSpan={2}> Service Address </td>{" "}  </tr>
                <tr className=" border border-collapse "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Building Name/Number </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.residential_address_name_or_number}`}{" "} </td>{" "} </tr>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%]  border-r ">Street</td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {`${directors.residential_address_street}`} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Locality </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.residential_address_locality}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Town </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.residential_address_town}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> County </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.residential_address_county}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Postcode </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.residential_address_postcode}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Country </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${directors.residential_address_country}`}{" "} </td>{" "} </tr>
              </tbody>
            </table>
          </div>
        </div>









    {/* Shareholder Capital */}
        <div className="w-full mb-8">
          <h2 className="w-full text-start text-2xl font-poppins bg-cyan-500 text-white py-2 px-4   ">
          Share Capital
          </h2>

          <table className="w-full  table-auto border-collapse font-Inter">
              <tbody>
                <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%]  border-r ">Share Currency</td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {`${shareholders.share_currency}`} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Share Class </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`Ordinary`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Number of Shareholders </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${shareholders.num_of_share_holders}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Number of Share </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${shareholders.num_of_shares}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Value per Share </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${shareholders.value_per_share}`}{" "} </td>{" "} </tr>
                <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Total Shares </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${shareholders.total_shares}`}{" "} </td>{" "} </tr>
              </tbody>
            </table>
          

          </div>



























            {/* Shareholders */}
        <div className="w-full mb-8">
          <h2 className="w-full text-start text-2xl font-poppins bg-cyan-500 text-white py-2 px-4   ">
          Shareholders
          </h2>

          {
              shareholders?.shareholders?.map((el, index) => {

                  return (
                    <div key={index + '_shareholder'} className="w-full flex flex-col justify-start items-start gap-4 shadow-sm mb-3       ">
                      <table className="w-full  table-auto border-collapse font-Inter">
                        <tbody>
                          <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r text-white  bg-zinc-800 text-center" colSpan={2}> Shareholder {index + 1} </td>{" "}  </tr>
                          <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Title </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_title}`}{" "} </td>{" "} </tr>
                          <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%]  border-r ">First Name</td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {`${el.shareholder_first_name}`} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Middle Name </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_middle_name}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Last Name </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_last_name}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Date of Birth </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_person_dob}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Nationality </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_nationality}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  ">Country of Residence </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_country_of_residence}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Number of Shares </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_num_of_shares}`}{" "} </td>{" "} </tr>

                          <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r text-gray-900  bg-gray-200 text-center" colSpan={2}> Address </td>{" "}  </tr>
                          {/* <tr className=" border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Title </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_title}`}{" "} </td>{" "} </tr> */}

                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Building Name/Number </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_address_name_or_number}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Street </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_address_street}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Locality </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_address_locality}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Town </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_address_town}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> County </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_address_county}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Post Code </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_address_postcode}`}{" "} </td>{" "} </tr>
                          <tr className="border  "> {" "} <td className=" px-3 py-1   w-[40%] border-r  "> Country </td>{" "} <td className=" px-3 py-1 flex justify-start items-center gap-2  "> {" "} {`${el.shareholder_address_country}`}{" "} </td>{" "} </tr>



                        </tbody>
                      </table>
                    </div>
                  )

              })

          }
          

          </div>



































        <div className="w-full flex flex-col justify-center items-center gap-4 font-poppins ">
          <div className="w-full flex flex-row justify-center items-center gap-4 ">
            <Button onPress={goBackBtnHandler} className="text-white w-[50%] bg-gray-500  " >  Go Back </Button>
            <Button onPress={submitHandler}  isLoading={isLoading}     className="text-white w-[50%] bg-teal-500  " color="success" endContent={ isLoading ? null : <MdLogin className="text-xl -ml-1" /> } >  {isLoading ? 'Submitting...' : "Submit"}   </Button>
          </div>

          {errorMsg && ( <p className="w-full text-center   text-red-500 mt-2"> {" "} {errorMsg}{" "} </p> )}
        </div>
      </div>
    </>
  );
};

export default Summary;
