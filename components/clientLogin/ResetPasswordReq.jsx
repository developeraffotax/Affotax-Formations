import { Alert, Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, } from "@heroui/react";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { createClient } from "@/lib/supabase/client";
import { MailIcon } from "./Icons";



const ResetPasswordReq = ({ isFpModal, setIsFpModal }) => {


  const { register: registerForm2, handleSubmit: handleSubmitForm2, formState: { errors: errorsForm2 }, } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);



  const formSubmitHandler = async ({ email }) => {
    const supabase = createClient();

    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + "/reset-password",
      });

      if (!error) {
        setIsSuccess(true);
      }

      if (error) {
        setError(error?.message || "Some error occured!");
      }
    } catch (error) {
      setIsSuccess(false);
      setError(error?.message || "Some error occured!");
    } finally {
      setIsLoading(false);
    }
  };




  return (
    (<Modal
      backdrop="blur"
      isOpen={isFpModal}
      onClose={() => setIsFpModal(false)}
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Reset Your Password
            </ModalHeader>
            <ModalBody className=" ">
              {!isSuccess ? (
                <form
                  onSubmit={handleSubmitForm2(formSubmitHandler)}
                  className="w-full flex flex-col justify-center items-center gap-8 pb-8 "
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
                      {...registerForm2("email", {
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

                    {errorsForm2?.email && (
                      <p className="text-red-500 text-sm mt-1 font-poppins  px-2 py-2  ">
                        {errorsForm2.email.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full flex justify-end items-center gap-5 pr-4 font-poppins ">
                    <Button color="default" onPress={onClose}>
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      color="warning"
                      className="w-[40%] px-4 font-poppins  "
                    >
                      {isLoading ? (
                        <Spinner size="sm" color="white" />
                      ) : (
                        "Reset Password"
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <div
                  key="success"
                  className="w-full flex items-center my-3 font-poppins"
                >
                  {" "}
                  <Alert
                    color="success"
                    title={`Password reset link has been send to your email! Kindly check your email`}
                  />{" "}
                </div>
              )}
            </ModalBody>

            {error && (
              <ModalFooter>
                <p className="w-full text-sm font-poppins text-red-500 ">
                  {error}
                </p>
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>)
  );
};

export default ResetPasswordReq;
