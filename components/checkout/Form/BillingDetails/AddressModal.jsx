import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  useDraggable,
  Input,
} from "@heroui/react";
import React, { forwardRef, useRef } from "react";
import CountrySelect from "./CountrySelect";
import { useForm, useFormContext } from "react-hook-form";
import ModalForm from "./ModalForm";

const AddressModal = ({
  modalForm,
  modalFormHandler,
  setAddressBtnHandler,
  inValidArr,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const targetRef = useRef();

  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

  return (
    <>
      <Button onPress={onOpen} className="bg-cyan-400 text-white ">
        Enter Address
      </Button>
<div className="z-[9999] fixed top-0  ">

  
<Modal backdrop="blur"

        classNames={{
          wrapper: "z-[9999]",
          backdrop: "bg-gradient-to-b from-zinc-900 to-cyan-600/40 backdrop-opacity-20  z-[8888]",
        }} isDismissable={false}   ref={targetRef} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent  >
          {(onClose) => (
            <>
              <ModalHeader
                {...moveProps}
                className="flex flex-col justify-start items-start  gap-1 w-full bg-cyan-500  font-poppins text-white  text-xl"
              >
                Choose Address
              </ModalHeader>
              <ModalBody>
                <div className="w-full flex flex-col justify-start items-start gap-3 ">
                  <div className="w-full flex flex-row-reverse  gap-1 justify-start items-center ">
                    {" "}
                    {inValidArr.includes("name_or_number") && (
                      <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2 animate-pulse   ">
                        {"Required*"}
                      </p>
                    )}{" "}
                    <Input
                      name="name_or_number"
                      value={modalForm.name_or_number}
                      onChange={modalFormHandler}
                      className="max-w-md font-poppins "
                      label="Building Name / Number:*"
                      isInvalid={inValidArr.includes("name_or_number")}
                      labelPlacement="outside"
                      type="text"
                    />{" "}
                   
                  </div>
                  <div className="w-full flex flex-row-reverse  gap-1 justify-start items-center ">
                    {" "}
                    {inValidArr.includes("street") && (
                      <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2 animate-pulse   ">
                        {"Required*"}
                      </p>
                    )}{" "}
                    <Input
                      name="street"
                      value={modalForm.street}
                      onChange={modalFormHandler}
                      className="max-w-md font-poppins "
                      label="Street:*"
                      isInvalid={inValidArr.includes("street")}
                      labelPlacement="outside"
                      type="text"
                    />{" "}
                    
                  </div>
                  <div className="w-full flex flex-row-reverse  gap-1 justify-start items-center ">
                    {" "}
                    {inValidArr.includes("locality") && (
                      <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2 animate-pulse   ">
                        {"Required*"}
                      </p>
                    )}{" "}
                    <Input
                      name="locality"
                      value={modalForm.locality}
                      onChange={modalFormHandler}
                      className="max-w-md font-poppins "
                      label="Locality:"
                      isInvalid={inValidArr.includes("locality")}
                      labelPlacement="outside"
                      type="text"
                    />{" "}
                  
                  </div>
                  <div className="w-full flex flex-row-reverse  gap-1 justify-start items-center ">
                    {" "}
                    {inValidArr.includes("town") && (
                      <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2 animate-pulse   ">
                        {"Required*"}
                      </p>
                    )}{" "}
                    <Input
                      name="town"
                      value={modalForm.town}
                      onChange={modalFormHandler}
                      className="max-w-md font-poppins "
                      label="Town:*"
                      isInvalid={inValidArr.includes("town") }
                      labelPlacement="outside"
                      type="text"
                    />{" "}
                  
                  </div>
                  <div className="w-full flex flex-row-reverse  gap-1 justify-start items-center ">
                    {" "}
                    {inValidArr.includes("county") && (
                      <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2 animate-pulse   ">
                        {"Required*"}
                      </p>
                    )}{" "}
                    <Input
                      name="county"
                      value={modalForm.county}
                      onChange={modalFormHandler}
                      className="max-w-md font-poppins "
                      label="County:"
                      isInvalid={inValidArr.includes("county")}
                      labelPlacement="outside"
                      type="text"
                    />{" "}
                    
                  </div>
                  <div className="w-full flex flex-row-reverse  gap-1 justify-start items-center ">
                    {" "}
                    {inValidArr.includes("postcode") && (
                      <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2 animate-pulse   ">
                        {"Required*"}
                      </p>
                    )}{" "}
                    <Input
                      name="postcode"
                      value={modalForm.postcode}
                      onChange={modalFormHandler}
                      className="max-w-md font-poppins "
                      label="Postcode:"
                      isInvalid={inValidArr.includes("postcode")}
                      labelPlacement="outside"
                      type="text"
                    />{" "}
                    
                  </div>
                  <CountrySelect
                    modalForm={modalForm}
                    modalFormHandler={modalFormHandler}
                    isCountryInvalid={inValidArr.includes("country")}
                  />

                  <Button
                    className="w-full mt-3 font-poppins text-white "
                    onPress={() => {
                      setAddressBtnHandler(onClose);
                    }}
                    color="primary"
                  >
                    {" "}
                    Submit Address{" "}
                  </Button>
                </div>
              </ModalBody>

              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
</div>
    </>
  );
};

export default AddressModal;
