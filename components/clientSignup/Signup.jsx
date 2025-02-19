"use client";

import { Button, Input, Spinner } from "@heroui/react";
import React, { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "./Icons";
import { useForm } from "react-hook-form";
import { LuUserCheck } from "react-icons/lu";
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { createClient } from "@/lib/supabase/client";
import Logo from "./Logo";
import Link from "next/link";
import Form from "./Form";

const SignUp = () => {

  






  return (
    <>
      <div className="    text-gray-900 flex  justify-center font-poppins ">
        <div className="max-w-screen-2xl m-0   bg-white   sm:rounded-lg flex flex-row-reverse  justify-center flex-1">
          <div className="lg:w-3/4 xl:w-3/4 p-6 max-lg:p-0  ">
            {/* <div>
              <Logo />
            </div> */}
            <div className="mt-0 flex flex-col items-center ">
              <div className="w-full   ">
                {/* <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-cyan-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <span className="ml-4">Sign In with Google</span>
                  </button>
                </div> */}

                <div className="my-6 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Fill the form below!
                  </div>
                </div>

                <div className="mx-auto max-w-2xl w-full ">
                  <div className="w-full flex flex-col justify-start items-start gap-0 shadow-md rounded-xl    p-6 max-lg:p-0 max-lg:border-none border-2 border-[#1565C0]  ">
                    <div className="w-full bg-gray-100 px-4 py-3   ">
                      <h2 className="w-full text-2xl font-poppins text-center font-semibold text-[#1565C0]  ">
                        Sign up
                      </h2>
                    </div>

                    <Form />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex-1 bg-cyan-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('/signup1.png')]"></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SignUp;
