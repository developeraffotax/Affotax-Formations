import { Button, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MdLogin } from "react-icons/md";
import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "./Icons";
import { createClient } from "@/lib/supabase/client";
import CountrySelect from "./CountrySelect";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/(user)/layout";

const Form = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { register, handleSubmit, formState: { errors }, } = useForm();


  const router = useRouter()

  const {user, setUser} = useContext(UserContext);


  //sign up
  const formSubmitHandler = async (data) => {
    console.log("LOGIN FORM DATA: ", data);

    const { organization, forename, surname, phone_number, email, confirm_email, password } = data;
    const { post_code, house_name_or_number, street, locality, town, county, country } = data;

    const account_holder = {
      organization, forename, surname, phone_number, email
    }

    const primary_address = {
      post_code, house_name_or_number, street, locality, town, county, country 
    }






    // create the user on supabase
    const supabase = createClient();

    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            account_holder,
            primary_address
          },
        },
      });

      if (error) {
        setErrorMsg(error.message || "Failed to create a new user!")
      }

      setUser(data?.user)
      return router.push('/')
    } catch (error) {
        console.log(error.message || "Error occured! Please try again later")
    } finally {
      setIsLoading(false)
    }














  };






  return (
    <form
      onSubmit={handleSubmit(formSubmitHandler)}
      className="w-full flex flex-col justify-start items-start gap-4 font-poppins "
    >

{/* ACCOUNT HOLDER */}
        <div className="w-full flex flex-col justify-start items-start gap-2  ">
            <div className="w-full text-center bg-cyan-500 text-white py-2 my-2  shadow-md ">Account Holder </div>
        <div className="w-full">
        <Input
          {...register("organization")}
          key="organization"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="Organisation (if applicable):	"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

      <div className="w-full">
        <Input
          errorMessage={errors?.forename?.message}
          isInvalid={errors?.forename ? true : false}
          {...register("forename", {
            required: {
              value: true,
              message: "Forename is required!",
            },
          })}
          key="forename"
          classNames={{
            mainWrapper:
              "w-full",
            label: "w-[40%] ",
          }}
          label="Forename: *"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

      <div className="w-full">
        <Input
          errorMessage={errors?.surname?.message}
          isInvalid={errors?.surname ? true : false}
          {...register("surname", {
            required: {
              value: true,
              message: "Surname is required!",
            },
          })}
          key="surname"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="Surname: *	"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

      <div className="w-full">
        <Input
          errorMessage={errors?.phone_number?.message}
          isInvalid={errors?.phone_number ? true : false}
          {...register("phone_number", {
            required: {
              value: true,
              message: "Phone Number is required!",
            },
          })}
          key="phone_number"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="Phone Number: *	"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

      {/* EMAIL */}
      <div className="w-full">
        <Input
          errorMessage={errors?.email?.message}
          isInvalid={errors?.email ? true : false}
          {...register("email", {
            required: {
              value: true,
              message: "Email is required!",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address!",
            },
          })}
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          key="email"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="Email: *	"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

      <div className="w-full">
        <Input
          errorMessage={errors?.confirm_email?.message}
          isInvalid={errors?.confirm_email ? true : false}
          {...register("confirm_email", {
            required: {
              value: true,
              message: "Confirm Email is required!",
            },

            validate: (value, formValues) => {
              console.log(value, formValues);
              return value === formValues?.email
                ? true
                : "Confirm Email should match the Email!";
            },
          })}
          key="confirm_email"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="Confirm Email: *	"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

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


        </div>
















{/* PRIMARY ADDRESS */}
          <div className="w-full flex flex-col justify-start items-start gap-2    " >
          <div className="w-full text-center bg-cyan-500 text-white py-2 my-2 shadow-md  ">Primary Address </div>
          <div className="w-full">
        <Input
          errorMessage={errors?.post_code?.message}
          isInvalid={errors?.post_code ? true : false}
          {...register("post_code", {
            required: {
              value: true,
              message: "Post Code is required!",
            },
          })}
          key="post_code"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="Post Code: *"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

      <div className="w-full">
        <Input
          errorMessage={errors?.house_name_or_number?.message}
          isInvalid={errors?.house_name_or_number ? true : false}
          {...register("house_name_or_number", {
            required: {
              value: true,
              message: "House Name / Number is required!",
            },
          })}
          key="house_name_or_number"
          classNames={{
            mainWrapper:
              "w-full",
            label: "w-[40%] ",
          }}
          label="House Name / Number: *	"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

      <div className="w-full">
        <Input
          errorMessage={errors?.street?.message}
          isInvalid={errors?.street ? true : false}
          {...register("street", {
            required: {
              value: true,
              message: "Street is required!",
            },
          })}
          key="street"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="Street: *"
          labelPlacement="outside-left"
          type="text"
        />
      </div>

      <div className="w-full">
        <Input
         
          {...register("locality")}
          key="locality"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="Locality:	"
          labelPlacement="outside-left"
          type="text"
        />
      </div>



      <div className="w-full">
        <Input
          errorMessage={errors?.town?.message}
          isInvalid={errors?.town ? true : false}
          {...register("town", {
            required: {
              value: true,
              message: "Town is required!",
            },
          })}
          key="town"
          classNames={{
            mainWrapper:
              "w-full flex  flex-col-reverse justify-start items-start gap-1",
            label: "w-[40%]",
            
          }}
          label="Town: *"
          labelPlacement="outside-left"
          type="text"
        />
      </div>


      <div className="w-full">
        <Input
         
          {...register("county")}
          key="county"
          classNames={{
            mainWrapper: "w-full ",
            label: "w-[40%]",
          }}
          label="County:	"
          labelPlacement="outside-left"
          type="text"
        />
      </div>



      {/* COUNTRY SELECT */}
      <div className="w-full">
          <CountrySelect register={register} errors={errors}/>
      </div>

      
      











          </div>














      <div className="w-full flex flex-col justify-center items-center gap-4  ">
        <Button
          type="submit"
          className="text-white w-[100%] bg-cyan-500 "
          color="success"
          endContent={isLoading ? null : <MdLogin className="text-xl -ml-1" />}
        >
          {" "}
          {isLoading ? <Spinner size="sm" color="white" /> : "Signup"}{" "}
        </Button>
        <Link className=" text-sm   " href="/client-login">
          Or Login
        </Link>
        {errorMsg && (
          <p className="w-full text-center font-poppins text-red-500 mt-2">
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
