"use client"

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRef, useState } from "react";
import AddressModal from "./AddressModal";
import CountrySelect from "./CountrySelect";







const BillingDetails = ({register, errors, clearErrors, setValue, setAddressObj} ) => {




  const addressInputRef = useRef()

  const [address, setAddress] = useState("");


  const [modalForm, setModalForm] = useState({
        "name_or_number": '',
        "street": '',
        "locality": '',
        "town": '',
        "county": '',
        "postcode": '',
        "country": ''
  })

  const [inValidArr, setInValidArr] = useState([])


  const setAddressBtnHandler = (onClose) => {

    let inValidArray = [];
    if (modalForm.name_or_number.length === 0) {
      inValidArray.push('name_or_number') 
    }

    if (modalForm.street.length === 0) {
      inValidArray.push('street') 
    }

   

    if (modalForm.town.length === 0) {
      inValidArray.push('town') 
    }


    if (modalForm.country.length === 0) {
      inValidArray.push('country') 
    }
  

    if(inValidArray.length > 0) {
      return setInValidArr(inValidArray)
    }
    
    const _address = `${modalForm.name_or_number}, ${modalForm.street}, ${modalForm.locality ? modalForm.locality + ", " : ""} ${modalForm.town}, ${modalForm.county ? modalForm.county + ", " : "" } ${modalForm.postcode ?  modalForm.postcode + ", " : ""} ${modalForm.country}.`

    setAddressObj(modalForm);
    
    clearErrors("address")
    setValue('address', _address )
    //addressInputRef.current.value = _address;
    
    
      //console.log(errors )
    
    onClose();
    setAddress(_address)
    
    
  }


 


  const modalFormHandler = (e) => {

        const inputName = e.target.name;
        const inputValue = e.target.value;


        setInValidArr((prev) => { return  prev.filter(el => el !== inputName) })
          return setModalForm(prev => ({...prev, [inputName]: inputValue})); 


        // switch (e.target.name) {
        //   case "name_or_number": 

          


        //   case "street": return setModalForm(prev => ({...prev, street: e.target.value}))
        //   case "locality": return setModalForm(prev => ({...prev, locality: e.target.value}))
        //   case "town": return setModalForm(prev => ({...prev, town: e.target.value}))
        //   case "county": return setModalForm(prev => ({...prev, county: e.target.value}))
        //   case "postcode": return setModalForm(prev => ({...prev, postcode: e.target.value}))
        //   case "country": return setModalForm(prev => ({...prev, country: e.target.value}))
            
        // }




  }

  







  return (
    <div className="w-full flex flex-col justify-start items-start gap-3 p-4 border ">
      <div className="w-full bg-gray-100 px-4 py-3  ">
        <h2 className="w-full text-2xl font-poppins text-cyan-500  ">
          Billing Details
        </h2>
      </div>

      <div className="w-full mt-2 ">
        <Select className="max-w-sm  rounded-xl  font-poppins" radius="lg"  label="Select a title" size="sm">
          <SelectItem className="  font-poppins">MR.</SelectItem>
          <SelectItem className="  font-poppins">MS.</SelectItem>
        </Select>
      </div>

      <div className="w-full flex flex-row justify-between items-center gap-8">
        <div className="w-full ">
          <Input
            
            className="max-w-sm font-poppins "
            label="First Name"
            isInvalid={false}
            labelPlacement="outside"
            type="text"
            {
              ...register('f_name', { required: {value: true, message: "First name is required!"},  })
            }
          />

          {errors?.f_name && <p  className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">{errors.f_name.message}</p>}
        </div>

        <div className="w-full ">
          <Input
            className="max-w-sm font-poppins "
            label="Last Name"
            isInvalid={false}
            labelPlacement="outside"
            type="text"
            {
              ...register('l_name', { required: {value: true, message: "Last name is required!"},  })
            }
          />

          {errors?.l_name && <p  className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">{errors.l_name.message}</p>}
        </div>



      </div>



      <div className="w-full ">
          <Input
            className="max-w-sm font-poppins "
            label="Phone Number"
            isInvalid={false}
            labelPlacement="outside"
            type="text"
            {
              ...register('phone', { required: {value: true, message: "Phone Number is required!"}, pattern: {value: /^(\+?\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, message: "Please Enter a valid phone numner!"} })
            }
          />

          {errors?.phone && <p  className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">{errors.phone.message}</p>}
        </div>

            

        <div className="w-full flex flex-col justify-start items-start gap-2 font-poppins mt-3 ">
          <input ref={(e) => {
          // Register the input with React Hook Form
          
          register("address", { required: { value: true, message: "Address is required! Please select an address by clicking below!" } })
          addressInputRef.current = e; // Assign to the ref for direct DOM access
        }}  type="text" name="address"  hidden /> 


          <p>Billing Address (where card is registered) </p>
          {errors?.address && <p  className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">{errors.address.message}</p>}
          {address && <p className="text-sm bg-cyan-100 rounded-md p-2 text-cyan-600 font-poppins   ">{address}</p>}

          

          <AddressModal    modalForm={modalForm} modalFormHandler={modalFormHandler}  setAddressBtnHandler={setAddressBtnHandler} inValidArr={inValidArr}  />
        </div>

        

    </div>
  );
};

export default BillingDetails;
