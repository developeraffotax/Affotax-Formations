"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import AccountDetails from "./AccountDetails/AccountDetails";
import BillingDetails from "./BillingDetails/BillingDetails";
import CardDetails from "./CardDetails/CardDetails";
import { useForm } from "react-hook-form";
import SquareForm from "./CardDetails/SquareFrom/SquareForm";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { createClient } from "@/lib/supabase/client";
import { Spinner, Tab, Tabs } from "@heroui/react";
import LoginForm from "./LoginForm/LoginForm";
 
import { toast, ToastContainer } from "react-toastify";
import ReactDOM from "react-dom";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/(user)/layout";
import { countryToAlpha2 } from "country-to-iso";

const Form = ({ selectedPackages, mainPkg, mainPkgPrice, tPriceWithoutTax, addressObj, setAddressObj, orderRef, company_name}) => {
  const [selected, setSelected] = useState("signup");
  // const [user, setUser] = useState(null)

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const formRef = useRef();
  const { register, handleSubmit, watch, formState: { errors }, clearErrors, setValue, trigger, } = useForm();

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);





  const formSubmitHandler = async (form) => {
    const supabase = createClient();
    console.log(localStorage.getItem("payment_id"));
    console.log("FORM DATA: ", form);



    // -----------------------------------------------------FOR NEW USERS-----------------------------------------------------------------------
    if (!user) {
      //SIGNUP
      
      
      try {
        setIsLoading(true);
        const token = localStorage.getItem("payment_id");


        const response = await axios.post('/api/customer/create', {
          emailAddress: form.email,
          givenName: form.f_name
        })
  
        // if(response.status !== 201 || !response?.data?.success) {
        //   return setErrorMsg("Failed to create sq. customer!")
        // }




        




        const account_holder = {
          first_name: form.f_name,
          last_name: form.l_name,
          phone_number: form.phone,
          // email: form.email,
          square_customer_id: response?.data?.customer?.id,

          gender: 'Male',
          title: 'Mr',
          dob: '',
          middle_name: '',
        };
  
        const primary_address = addressObj;

        


        const { data: userData, error: userError } = await supabase.auth.signUp(
          {
            email: form.email,
            password: form.password,
            options: {
              data: {
                account_holder,
                
                primary_address,
              },
            },
          }
        );

        if (userError) {
          console.log(userError);
          return toast.error(
            userError.message || "Some error occured in creating user"
          );
        }



        const {data, status} = await axios.post('/api/cards/create', {

          sourceId: token,
          // card: token.details.card,
          
          cardholderName: `${form.f_name} ${form.l_name}`,
          billingAddress:{
            // ...cardHolder,
            postalCode: addressObj?.post_code,
            fullName: `${form.f_name} ${form.l_name}`,
            address:  form?.address,
            locality: addressObj?.locality,
            country: countryToAlpha2(addressObj?.country) ,
          },
        })

         




        //ORDER CREATION
        const { data: orderData, error: orderError } = await supabase
          .from("orders")
          .insert({
            user_id: userData.user.id,
            total: (+tPriceWithoutTax).toFixed(2).toString(),
            // total: ((20 / 100) * +tPriceWithoutTax + +tPriceWithoutTax) .toFixed(2) .toString(),
            status: "pending",
            order_ref: orderRef,
            payment_status: "pending",
            shipping_address: form?.address,
            company_name: company_name || null
          })
          .select("id");

        if (orderError) {
          return toast.error(
            orderError.message || "Some error occured in order creation"
          );
        }
        

        // Order items creations
        const mappedItems = selectedPackages.map((el) => {
          return {
            order_id: orderData[0].id,
            product_name: el.name,
            price: el.price,
            quantity: el.quantity ? el.quantity : 1,
          };
        });

        const order_items = [
          {
            order_id: orderData[0].id,
            product_name: mainPkg,
            price: mainPkgPrice,
            quantity: 1,
          },
          ...mappedItems,
        ];

        const { error: orderItemsError } = await supabase
          .from("order_items")
          .insert(order_items);

        if (orderItemsError) {
          return toast.error(
            orderItemsError.message ||
              "Some error occured in order items creation"
          );
        }

        console.log(form);

        
        const res = await axios.post("/api/payments/create-payment", {
          sourceId: data.card.id,  // save card id from square
          userId: userData.user.id,
          orderId: orderData[0].id,

          amount:  (+tPriceWithoutTax) .toFixed(2) .toString(),
          // amount:  ((20 / 100) * +tPriceWithoutTax + +tPriceWithoutTax) .toFixed(2) .toString(),
          buyerEmailAddress: userData.user.email
        });

        console.log(res);
// can be replaced with the webhook form the square
        if(res.status === 200 && res.data?.success) {
 
          // const emailRes = await axios.post('/api/email/send-email-to-customer', {
          //   recipientName: '',
          //   amount: ((20 / 100) * +tPriceWithoutTax + +tPriceWithoutTax) .toFixed(2) .toString(),
          //   orderRef: orderRef,
          //   ordersArr: '',
          //   recipientEmail: userData.user.email,



          // })

          router.replace(`/success-page?orderId=${orderData[0].id}`)
        }


      } catch (error) {
        console.log(error);
        toast.error(
          error.message || "Some error occured! Please try again later"
        );
      } finally {
        setIsLoading(false);
      }
    } else {
       
      // -----------------------------------------------------FOR ALREADY SIGNED-IN USERS-----------------------------------------------------------------------

      try {
        setIsLoading(true);

        //ORDER CREATION
        const { data: orderData, error: orderError } = await supabase
          .from("orders")
          .insert({
            user_id: user.id,
            total: (+tPriceWithoutTax) .toFixed(2) .toString(),
            // total: ((20 / 100) * +tPriceWithoutTax + +tPriceWithoutTax) .toFixed(2) .toString(),
            status: "pending",
            order_ref: orderRef,
            payment_status: "pending",
            shipping_address: form?.address,
            company_name: company_name || null
          })
          .select("id");

        if (orderError) {
          return toast.error(
            orderError.message || "Some error occured in order creation"
          );
        }

        // Order items creations
        const mappedItems = selectedPackages.map((el) => {
          return {
            order_id: orderData[0].id,
            product_name: el.name,
            price: el.price,
            quantity: el.quantity ? el.quantity : 1,
          };
        });

        const order_items = [
          {
            order_id: orderData[0].id,
            product_name: mainPkg,
            price: mainPkgPrice,
            quantity: 1,
          },
          ...mappedItems,
        ];

        const { error: orderItemsError } = await supabase
          .from("order_items")
          .insert(order_items);

        if (orderItemsError) {
          return toast.error(
            orderItemsError.message ||
              "Some error occured in order items creation"
          );
        }

        console.log(user)
        const token = localStorage.getItem("payment_id");
        const res = await axios.post("/api/payments/create-payment", {
          sourceId: token,
          userId: user.id,
          orderId: orderData[0].id,

          amount:  (+tPriceWithoutTax) .toFixed(2) .toString(),
          // amount:  ((20 / 100) * +tPriceWithoutTax + +tPriceWithoutTax) .toFixed(2) .toString(),
          buyerEmailAddress: user?.email

        });
        console.log(res)
        if(res.status === 200 && res.data?.success) {
          router.replace(`/success-page?orderId=${orderData[0].id}`)
        }

      } catch (error) {
        console.log(error);
        toast.error(
          error.message || "Some error occured! Please try again later"
        );
      } finally {
        setIsLoading(false);
      }
    }






    













  };







  const submitInputRef = useRef();


  const outerFormSubmitHandler = () => {
    
    submitInputRef.current.click();
    return;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter key press
    }
  };

  return (
    <>
      <section className="w-full  ">
        <div className="w-full flex flex-col justify-start items-start   ">
          {!user && (
            <div className="w-full   ">
              <Tabs
                className="font-poppins mb-3 w-full "
                key={"customer"}
                aria-label="customer"
                onSelectionChange={setSelected}
                selectedKey={selected}
                color={"secondary"}
                radius="lg"
              >
                <Tab key="signup" title="New Customer" />
                <Tab key="login" title="Returning Customer" />
              </Tabs>

              {selected === "login" && (
                <LoginForm setSelected={setSelected} setUser={setUser} />
              )}
            </div>
          )}

          <form
            onKeyDown={handleKeyDown}
            onSubmit={handleSubmit(formSubmitHandler)}
            className="w-full flex flex-col justify-start items-start gap-5  "
          >
            <div className="w-full   ">
              {selected === "signup" && (
                <AccountDetails
                  register={register}
                  errors={errors}
                  user={user}
                />
              )}
            </div>

            {selected === "signup" && (
              <>
                <div className="w-full   ">
                  <BillingDetails
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                    setValue={setValue}
                    setAddressObj={setAddressObj}
                  />
                </div>

                <div className="w-full   ">
                  <CardDetails
                  user={user}
                    register={register}
                    errors={errors}
                    outerFormSubmitHandler={outerFormSubmitHandler}
                  />
                </div>

                {/* <input key="token" name="token" ref={tokenInputRef} type="text"  {...register("token")}/> */}
                <input ref={submitInputRef} type="submit" hidden />
              </>
            )}
          </form>
        </div>
      </section>

      {isLoading && (
        <div className="fixed z-[9999] top-0 left-0 bg-gradient-to-b from-zinc-900 to-cyan-600/40 backdrop-opacity-20  w-[100vw] h-[100vh] flex justify-center items-center ">
          <div className=" ">
            <Spinner
              classNames={{
                label: "text-white",
              }}
              size="lg"
              color="white"
              label="Your transaction is being processed. Please hold on..."
              labelColor="#fffff"
            />
          </div>
        </div>
      )}



      




      <ToastContainer />
    </>
  );
};

export default Form;
