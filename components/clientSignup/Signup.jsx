"use client";

import { Button, Input, Spinner } from "@nextui-org/react";
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
      <div className="min-h-screen bg-gray-100 text-gray-900 flex  justify-center font-poppins ">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex flex-row-reverse  justify-center flex-1">
          <div className="lg:w-1/2 xl:w-1/2 p-6 sm:p-8">
            <div>
              <Logo />
            </div>
            <div className="mt-0 flex flex-col items-center ">
              <div className="w-full flex-1 ">
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

                <div className="mx-auto max-w-lg w-full ">
                  <div className="w-full flex flex-col justify-start items-start gap-2 shadow-md rounded-xl    p-6 border-2 border-cyan-400  ">
                    <div className="w-full bg-gray-100 px-4 py-3   ">
                      <h2 className="w-full text-2xl font-poppins text-center font-semibold text-cyan-500  ">
                        Sign up
                      </h2>
                    </div>

                    <Form />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-cyan-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('/signup1.png')]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
