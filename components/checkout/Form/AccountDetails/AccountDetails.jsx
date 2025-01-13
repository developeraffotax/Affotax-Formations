import { Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "../Icons";
import { LuUserCheck } from "react-icons/lu";









const AccountDetails = ({register, errors, user}) => {

    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);




if (user) {

    return (
      <div className="w-full flex flex-col justify-start items-start gap-4 p-4 border ">
      <div className="w-full bg-gray-100 px-4 py-3   ">
          <h2  className="w-full text-2xl font-poppins text-cyan-500  "  >User Details </h2>
      
      </div>
      
      
      <div className="w-full font-poppins text-sm   flex flex-row  justify-start items-start gap-2 px-4  ">
          <h3 className="  flex justify-start items-center gap-1 text-gray-700 ">Logged in as<LuUserCheck  className="text-base text-cyan-500  " />


          
          </h3>

          <p> {user?.email}</p>
      </div>
      
      
      
      
      
      
      
      
          </div>
    )







}





  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 p-4 border ">
<div className="w-full bg-gray-100 px-4 py-3   ">
    <h2  className="w-full text-2xl font-poppins text-cyan-500  "  >Account Details </h2>

</div>


<div className="w-full ">
 <Input className="max-w-sm font-poppins " endContent={ <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" /> } label="Email" isInvalid={false} labelPlacement="outside" placeholder="you@example.com" type="email" { ...register('email', { required: {value: true, message: "Email is required!"},  pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Please enter a valid email address!"}  }) } />

        {errors?.email && <p  className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">{errors.email.message}</p>}
</div>



<div className="w-full ">
<Input className="max-w-sm font-poppins" endContent={ <button aria-label="toggle password visibility" className="focus:outline-none" type="button" onClick={toggleVisibility} > {isVisible ? ( <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" /> ) : ( <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" /> )} </button> } label="Password" labelPlacement="outside" placeholder="Enter your password" type={isVisible ? "text" : "password"} { ...register('password', { required: {value: true, message: "Password is required!"},  minLength: {value: 6, message: "Password must be greater than 6 characters."}  }) } />

{errors?.password && <p  className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">{errors.password.message}</p>}
</div>






    </div>
  )
};

export default AccountDetails;
