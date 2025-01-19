"use client";

import { Button, Input, Spinner } from "@heroui/react";
import React, { useContext, useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "./Icons";
import { useForm } from "react-hook-form";
import { LuUserCheck } from "react-icons/lu";
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { createClient } from "@/lib/supabase/client";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/(user)/layout";
import ResetPasswordReq from "./ResetPasswordReq";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

      const [isFpModal, setIsFpModal] = useState(false);
    

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);


    const router = useRouter()



  const userContext = useContext(UserContext)






  const formSubmitHandler = async (creds) => {
    console.log("LOGIN FORM DATA: ", creds);

    const supabase = createClient();

    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword(creds);

      console.log(data);

      if (error) {
        return setErrorMsg(error.message);
      }

      userContext.setUser(data?.session?.user)
      return router.push('/')

      
    } catch (error) {
      console.log(error);
      setErrorMsg(
        error?.message || "Something went wrong! Please try again later"
      );
    } finally {
      setIsLoading(false);
    }
  };



  const googleBtnHandler = async () => {

    const supabase = createClient();

    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
     
    })


    console.log(data)
    console.log(error)

  }





  return (<>
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center font-poppins ">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <Logo />
          </div>
          <div className="mt-6 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button onClick={googleBtnHandler} className="w-full max-w-xs   font-semibold  shadow-sm rounded-full py-3 bg-cyan-50 border-1 border-cyan-200 hover:bg-cyan-200 hover:border-transparent active:scale-95  text-gray-800 flex items-center justify-center gap-2  transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <span className="ml-4 text-2xl "><FcGoogle /></span><h3>Sign In with Google</h3>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign In with E-mail
                </div>
              </div>

              <div className="mx-auto max-w-md  ">
                <div className="w-full flex flex-col justify-start items-start gap-4 shadow-md rounded-xl    p-6 border-2 border-cyan-400  ">
                  <div className="w-full bg-gray-100 px-4 py-3   ">
                    <h2 className="w-full text-2xl font-poppins text-cyan-500  ">
                      Login
                    </h2>
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
                          required: {
                            value: true,
                            message: "Email is required!",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                          required: {
                            value: true,
                            message: "Password is required!",
                          },
                        })}
                      />

                      {errors?.password && (
                        <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div className="w-full ">
                      <p onClick={() => setIsFpModal(true)} className="cursor-pointer ">Forgotten Password?</p>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-4  ">
                      <Button
                        type="submit"
                        className="text-white w-[100%] bg-cyan-500 "
                        color="success"
                        endContent={
                          isLoading ? null : (
                            <MdLogin className="text-xl -ml-1" />
                          )
                        }
                      >
                        {" "}
                        {isLoading ? (
                          <Spinner size="sm" color="white" />
                        ) : (
                          "Login"
                        )}{" "}
                      </Button>
                      <Link className=" text-sm   " href="/client-signup">
                        Or Sign-up
                      </Link>
                      {errorMsg && (
                        <p className="w-full text-center font-poppins text-red-500 mt-2">
                          {errorMsg}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-cyan-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('/login2.png')]"></div>
        </div>
      </div>
    </div>
    <ResetPasswordReq isFpModal={isFpModal} setIsFpModal={setIsFpModal}/>
  </>);
};

export default Login;
