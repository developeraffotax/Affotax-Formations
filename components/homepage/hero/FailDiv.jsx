import React from "react";
import { RxCross2 } from "react-icons/rx";
import Form from "./Form";


const FailDiv = ({ companyName,  onSubmitHandler, setCompanyName, isLoading, isInputEmpty, companyNameToShow  }) => {

    

  return (
    <div className="w-[60%] max-lg:w-full text-white pt-20 pb-20 max-xl:pb-12 max-w-2xl ">
      <div className="flex flex-col items-center justify-center gap-4 mb-8 max-xl:mb-8   bg-white  backdrop-blur-md   rounded-xl shadow-md shadow-gray-800/50  py-8 px-16 font-Inter">
        <span className="bg-red-500 text-white  text-[60px] rounded-full p-2  ">
          <RxCross2 />
        </span>

        <h2 className="text-3xl text-red-500  font-semibold ">{companyNameToShow}</h2>
        <h3 className="text-lg  text-gray-800 font-poppins max-w-xl text-center ">
        Unfortunately, this name is not available for registration. Please select another.
        </h3>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-1  ">


      <Form onSubmitHandler={onSubmitHandler} companyName={companyName} setCompanyName={setCompanyName} isLoading={isLoading} isInputEmpty={isInputEmpty}/>

        
      </div>
    </div>
  );
};

export default FailDiv;
