import React from "react";
import { FaCheck } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

const PACKAGES = [
  {
    name: "DIGITAL",
    price: 30,
    contains: [
      "Limited Company",
      "Companies House £50.00 Filing Fee Included",
      "Free Business Bank Account",
      "Free Online Company Manager",
      "Free .com or .co.uk Domain Name",
    ],
  },

  {
    name: "PRIVACY",
    price: 30,
    contains: ["Limited Company", "Companies House £50.00 Filing Fee Included"],
  },

  {
    name: "PROFESSIONAL",
    price: 30,
    contains: [
      "Limited Company",
      "Companies House £50.00 Filing Fee Included",
      "Free Business Bank Account",
      "Free Online Company Manager",
    ],
  },
];

const SERVICES = [
  "Limited Company",
  "Companies House £50.00 Filing Fee Included",
  "Free Business Bank Account",
  "Free Online Company Manager",
  `Filing of the First
Confirmation Statement`,
  `Email Copy of Certificate of
Incorporation, Mem & Arts and
Share Certificate(s)`,
  `Email Copy of Company
Register with First Entries`,
];

const LimitedCompany = () => {
  return (
    <div className="w-full flex justify-center items-center ">










      <ul className="w-full flex justify-center items-center ">
        <li className="w-full flex flex-col bg-slate-200 justify-center items-center " key={uuidv4()} > {" "} <h3 className="text-3xl font-semibold ">{"TEMP"}</h3>{" "} {/* can expand here */}{" "} </li>
        {PACKAGES.map((el) => {
          return (
            <li className="w-full flex flex-col bg-slate-200 justify-center items-center " key={uuidv4()} >
              <h3 className="text-3xl font-semibold ">{el.name}</h3>
              <h4 className="text-3xl font-semibold ">£{el.price}</h4>
              {/* can expand here */}
            </li>
          );
        })}
      </ul>






      <ul className="w-full flex flex-col justify-start items-start ">
        {SERVICES.map((service) => {
          return (
            <li key={uuidv4()}>
              <h3 className="">{service}</h3>
            </li>
          );
        })}
      </ul>





    </div>
  );
};

export default LimitedCompany;
