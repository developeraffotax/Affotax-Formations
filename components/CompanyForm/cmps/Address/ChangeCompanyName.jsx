import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Form, } from "@heroui/react";
import axios from "axios";
import { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import { createClient } from "@/lib/supabase/client";
import { useSearchParams } from "next/navigation";

export default function ChangeCompanyName({ companyInfo, setCompanyInfo, isOpen, onOpen, onOpenChange, onClose, orderId }) {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
  const [companyName, setCompanyName] = useState(companyInfo?.companyName);

  const [isCompanyName, setIsCompanyName] = useState(false);

  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    // Create a new FormData object from the form element
    const formData = new FormData(e.target);

    // Access the 'company_name' input value using FormData's get method
    const companyName = formData.get("company_name");
    setIsLoading(true);
    setError('')
    try {
            const res = await axios.post("/api/search-company-name", {
            companyName: companyName,
          });
          
          if (res.status === 200 && res?.data?.isCompanyNameAvailable) {
            setIsCompanyName(true);
            setCompanyName(companyName);
            formRef.current.reset();
          }
          
          if(!res?.data?.isCompanyNameAvailable) {
              setError('Company Name is not available!')
          }
      
    } catch (error) {
        console.log(error)
        if (error.status === 429 ) {
            
            return setError("Too many Requests! Please try again after 1 minute.")
           
          }
            setError(error?.message || "Some error occured! Please try again")
    } finally {
        setIsLoading(false)
    }


  };

  


  const changeCompanyNameHandler = async () => {

    const supabase = createClient();

    const { error } = await supabase
  .from('orders')
  .update({ company_name: companyName })
  .eq('id', orderId)

    if(!error) {
      setCompanyInfo((prev) => {
        return {
            ...prev,
            company_name: companyName,
        }
    })

    onClose()
    }





   
  }




  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        {!isCompanyName ? (
          <ModalContent className="p-8">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 font-poppins text-xl">
                  Search Company Name
                </ModalHeader>
                <ModalBody className="">
                  <Form
                    ref={formRef}
                    className="w-full   "
                    validationBehavior="native"
                    onSubmit={onSubmit}
                  >
                    <Input
                        classNames={{
                            base: 'font-poppins',

                        }}
                         
                       
                      errorMessage="Please enter a valid company name"
                    isRequired
                      label="Company Name"
                      labelPlacement="outside"
                      name="company_name"
                      placeholder=" "
                      type="text"
                       
                    />
                    {error && <p className="text-base font-poppins text-red-500 py-2  ">{error}</p>}
                    <Button isLoading={isLoading} className="font-poppins bg-cyan-500 text-white w-full" type="submit" variant="flat" endContent={<IoIosSearch className="text-lg " />}>
                      Search
                    </Button>
                  </Form>
                </ModalBody>

                {/* <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter> */}
              </>
            )}
          </ModalContent>
        ) : (
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Search Company Name
                </ModalHeader>
                <ModalBody>



                    <h2 className="w-full text-2xl font-poppins flex justify-center items-center gap-1">{companyName} <span><FaCircleCheck className="text-xl text-green-500 "/></span></h2>

                   <div className="w-full flex justify-between items-center gap-8 py-4 font-poppins  ">
                   <Button  className="bg-gray-400 text-white" variant="solid" color="default" onPress={() => {setIsCompanyName(false); setError('')}}>
                      Search Again
                    </Button>
                    <Button  className="bg-cyan-500 text-white" variant="solid" color="success" onPress={changeCompanyNameHandler}>
                      Continue with this Name <span><GrFormNextLink className="text-xl text-white"/></span>
                    </Button>
                   </div>
                  
                </ModalBody>

               
              </>
            )}
          </ModalContent>
        )}
      </Modal>
    </>
  );
}
