"use client";

import { Button, Input, Spinner } from "@nextui-org/react";
import React, { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "../Icons";
import { useForm } from "react-hook-form";
import { LuUserCheck } from "react-icons/lu";
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { createClient } from "@/lib/supabase/client";

const LoginForm = ({ setSelected, setUser }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
const { register, handleSubmit, formState: { errors }, } = useForm();
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formSubmitHandler = async (creds) => {
    console.log("LOGIN FORM DATA: ", creds);

    const supabase = createClient();

    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword(creds);

      console.log(data);

        if (error) {
          setErrorMsg(error.message)
        }

        
        if (data.session) {
          setUser(data.session.user);
          setSelected("signup");
        }

        return;






    } catch (error) {
        console.log(error)
        setErrorMsg(error?.message || 'Something went wrong! Please try again later')
    } finally {
      setIsLoading(false)
    }

   
  };

  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 p-4 border ">
      <div className="w-full bg-gray-100 px-4 py-3   ">
        <h2 className="w-full text-2xl font-poppins text-cyan-500  ">Login</h2>
      </div>

      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="w-full flex flex-col justify-start items-start gap-5 font-poppins "
      >
        <div className="w-full ">
          <Input
            className="max-w-sm font-poppins "
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Email"
            isInvalid={false}
            labelPlacement="outside"
            placeholder="you@example.com"
            type="email"
            {...register("email", {
              required: { value: true, message: "Email is required!" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address!",
              },
            })}
          />

          {errors?.email && (
            <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="w-full ">
          <Input
            className="max-w-sm font-poppins"
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {" "}
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}{" "}
              </button>
            }
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            {...register("password", {
              required: { value: true, message: "Password is required!" },
              // minLength: {value: 6, message: "Password must be greater than 6 characters."}
              // pattern: {
              //   value: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
              //   message:
              //     "Please must be minimum of 8 character and contain a lowercase, uppercase and a special character!",
              // },
            })}
          />

          {errors?.password && (
            <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="w-full ">
          <p>Forgotten Password?</p>
        </div>

        <div className="w-full ">
          {/* <input ref={submitInputRef} type="submit" hidden /> */}
          <Button

            type="submit"
            className="text-white w-[30%] "
            color="success"
            endContent={isLoading ? null : <MdLogin className="text-xl -ml-1" />}
          >
            {isLoading ?  <Spinner size="sm" color="white"   /> : "Login"}
          </Button>


          <p className="w-full text-center font-poppins text-red-500 mt-2">{errorMsg && errorMsg}</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
