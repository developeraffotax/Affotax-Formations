"use client";

import { useContext, useState } from "react";
import { UserContext } from "../layout";
import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { EyeFilledIcon, EyeSlashFilledIcon, } from "@/components/clientLogin/Icons";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";



const page = () => {
  const { user, setUser } = useContext(UserContext);

  const router = useRouter()

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCPass, setIsVisibleCPass] = useState(false);
  const toggleVisibilityCPass = () => setIsVisibleCPass(!isVisible);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const handlePasswordUpdate = async ({ password, cpassword }) => {
    const supabase = createClient();

    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        return setErrorMsg(error.message);
      }

      router.replace("/");


      
    } catch (error) {
      setErrorMsg(
        error.message || "Some error occured while updating your password. "
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full  py-32 flex justify-center ">
      <form
        onSubmit={handleSubmit(handlePasswordUpdate)}
        className="w-full flex flex-col justify-start items-end gap-6  max-w-2xl  mx-auto p-12   font-poppins  border border-orange-500  shadow-md shadow-black/25  rounded-lg  "
      >
        <div className="w-full">
          <Input
            errorMessage={errors?.password?.message}
            isInvalid={errors?.password ? true : false}
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
            type={isVisible ? "text" : "password"}
            {...register("password", {
              required: {
                value: true,
                message: "Password is required!",
              },
              minLength: {
                value: 6,
                message: "Password must be greater than 6 characters.",
              },
            })}
            key="password"
            classNames={{
              mainWrapper: "w-full ",
              label: "w-[40%]",
            }}
            label="Password: *"
            labelPlacement="outside-left"
          />
        </div>

        <div className="w-full">
          <Input
            errorMessage={errors?.cpassword?.message}
            isInvalid={errors?.cpassword ? true : false}
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibilityCPass}
              >
                {" "}
                {isVisibleCPass ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}{" "}
              </button>
            }
            type={isVisible ? "text" : "password"}
            {...register("cpassword", {
              required: {
                value: true,
                message: "Confirm Password is required!",
              },
              minLength: {
                value: 6,
                message: "Password must be greater than 6 characters.",
              },
              validate: (value, formValues) => {
                console.log(value, formValues);
                return value === formValues?.password
                  ? true
                  : "Confirm Password should match the Password!";
              },
            })}
            key="cpassword"
            classNames={{
              mainWrapper: "w-full ",
              label: "w-[40%]",
            }}
            label="Confirm Password: *"
            labelPlacement="outside-left"
          />
        </div>

        <Button type="submit" color="secondary">
          {isLoading ? "Updating....!!" : "Update Password"}
        </Button>
        {errorMsg && (
          <p className=" py-2 w-full text-sm font-poppins text-red-500 ">
            {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default page;
