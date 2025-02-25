"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import ApartmentIcon from "@mui/icons-material/Apartment";
import Image from "next/image";
import DummyChart from '@/public/dummyChart.png'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
const Dashboard = () => {
 

  return (
    <div className="  w-full ">
      <ul className="w-full grid grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1 gap-6 ">
        <Link href={"/client/companies"} className=" p-4 font-poppins min-h-64 text-black  flex flex-col justify-start items-center gap-12  rounded-xl bg-gradient-to-r from-blue-50 to-cyan-100 hover:scale-105 duration-300 transition-all  " >
          <h2 className="text-3xl w-full  text-center      "> <span> <HomeOutlinedIcon />{" "} </span> My Companies </h2>

          <ul className=" px-12 max-w-lg mx-auto w-full flex flex-col justify-center items-center text-sm ">
            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Companies</h3>

              <h4 className="text-blue-500 ">Example Corp</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">SIC Codes</h3>

              <h4 className="text-blue-500 ">1234</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Registered In</h3>

              <h4 className="text-blue-500 ">England & Wales</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Date</h3>

              <h4 className="text-blue-500 ">2020-03-01</h4>
            </li>
          </ul>
        </Link>





       








        <Link href={"/client/payment-methods"} className="p-4 font-poppins min-h-64 text-black  flex flex-col justify-start items-center gap-12  rounded-xl bg-gradient-to-r from-blue-50 to-cyan-100 hover:scale-105 duration-300 transition-all  " >
          <h2 className="text-3xl w-full  text-center      "> <span> <PaymentsOutlinedIcon />{" "} </span> Payment Methods </h2>

          <ul className=" px-12 max-w-lg mx-auto w-full flex flex-col justify-center items-center text-sm ">
            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Payment Method</h3>

              <h4 className="text-blue-500 ">VISA, MASTERCARD etc.</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Cardholder Name</h3>

              <h4 className="text-blue-500 ">Cardholder Name</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Card Number</h3>

              <h4 className="text-blue-500 ">**** **** **** 1234</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">CVV</h3>

              <h4 className="text-blue-500 ">123</h4>
            </li>
          </ul>
        </Link>














        <Link href={"/client/user-details"} className="p-4 font-poppins min-h-64 text-black  flex flex-col justify-start items-center gap-12  rounded-xl bg-gradient-to-r from-blue-50 to-cyan-100 hover:scale-105 duration-300 transition-all  " >
          <h2 className="text-3xl w-full  text-center      "> <span> <AccountCircleOutlinedIcon />{" "} </span> Personal Details </h2>

          <ul className=" px-12 max-w-lg mx-auto w-full flex flex-col justify-center items-center text-sm ">
            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Payment Method</h3>

              <h4 className="text-blue-500 ">VISA, MASTERCARD etc.</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Cardholder Name</h3>

              <h4 className="text-blue-500 ">Cardholder Name</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Card Number</h3>

              <h4 className="text-blue-500 ">**** **** **** 1234</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">CVV</h3>

              <h4 className="text-blue-500 ">123</h4>
            </li>
          </ul>
        </Link>


        <Link href={"/client/orders"} className="p-4 font-poppins text-black flex flex-col justify-start items-center gap-2  rounded-xl bg-gradient-to-r from-blue-50 to-cyan-100 hover:scale-105 duration-300 transition-all  " >
          <h2 className="text-3xl w-full  text-center      "> <span> <HistoryOutlinedIcon />{" "} </span> My Order History </h2>

           

          <Image src={DummyChart} cover className=" w-full max-w-sm " />
        </Link>





        <Link href={"/client/login-details"} className="p-4 font-poppins min-h-64 text-black  flex flex-col justify-start items-center gap-12  rounded-xl bg-gradient-to-r from-blue-50 to-cyan-100 hover:scale-105 duration-300 transition-all  " >
          <h2 className="text-3xl w-full  text-center      "> <span> <LoginOutlinedIcon />{" "} </span> Login Details </h2>

          <ul className=" px-12 max-w-lg mx-auto w-full flex flex-col justify-center items-center text-sm ">
            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">User Email</h3>

              <h4 className="text-blue-500 ">example@example.com</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">User Password</h3>

              <h4 className="text-blue-500 ">******</h4>
            </li>

            <li className="w-full flex justify-between items-center gap-2 ">
              <h3 className=" ">Confirm Password</h3>

              <h4 className="text-blue-500 ">******</h4>
            </li>

            
          </ul>
        </Link>


      </ul>
    </div>
  );
};

export default Dashboard;
