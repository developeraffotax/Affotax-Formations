import { Body, Container, Head, Heading, Html, Img, Link, Section, Text, Button, } from "@react-email/components";
import * as React from "react";







const h4 = {
   
  margin: "0",
  padding: "4px 10px",
  textAlign: "start",
  width: "50%"

};

const h4Copy = {
   
  margin: "0",
  padding: "4px 10px",
  textAlign: "end",
  width: "50%"

}


const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  ContainerShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "0",
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase",
  textAlign: "center",
};

const secondary = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center",
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center",
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center",
};

const link = {
  color: "#444",
  textDecoration: "underline",
};

const footer = {
  color: "#000",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center",
  textTransform: "uppercase",
};













export const AdminEmailCompanyFormation = ({ recipientName, amount, orderRef, date, ordersArr, customerEmail  }) => {
 

  return (
    <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={{ padding: "20px", backgroundColor: "#f4f4f4", fontFamily: "Arial, sans-serif", }} >
          <Container style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", }} >
            <Heading style={{ textAlign: "center", width: "100%"   }} ><Img
  alt="Affotax Logo"
  style={{
    maxWidth: "150px",
    width: "100%",
    margin: "auto"
  }}
   
  
  src="https://buw4lzuktl6dhwoc.public.blob.vercel-storage.com/logo-PBvxeK1sAedXtdEzFwyO7y1mpDG2bA.png"
/> </Heading>
            <Heading style={{ textAlign: "center", color: "#4CAF50" }}> New Order Received </Heading>
            <Text style={{ fontSize: "16px", color: "#333", marginTop: "20px" }} > Dear Rashid Hassan, </Text>
            <Text style={{ fontSize: "16px", color: "#333" }}> Affotax Formations have received a new order from {recipientName} </Text>
            <Text style={{ fontSize: "16px", color: "#333", marginTop: "10px", marginBottom: '4px' }} > <strong>Transaction Details:</strong> </Text>
            <ul key={'ul-1'} style={{ paddingLeft: "20px", fontSize: "16px", color: "#333", margin: "0",  }} >
              <li key={'li-15'}> <strong>Customer Name:</strong> {recipientName} </li>
              <li key={'li-15'}> <strong>Customer Email:</strong> {customerEmail} </li>
              <li key={'li-11'}> <strong>Amount Paid:</strong> £{amount} </li>
              <li key={'li-12'}> <strong>Order Ref ID:</strong>  #{orderRef} </li>
              <li key={'li-13'}> <strong>Date:</strong> {date} </li>
            </ul>



{/* 
            <Text style={{ fontSize: "16px", color: "#333", marginTop: "10px", marginBottom: '4px' }} > <strong>Order Details:</strong> </Text> */}



 














{/* 
            <ul key={'ul-2'} style={{ width: "100%", fontSize: "16px", color: "#333",   padding: '0',  margin: "0",  }} >


              <li key={'li-1'} style={{ width: "100%", color: 'white', backgroundColor: "#000000", display: "flex",  margin: "0", padding: "0px" }}> <strong style={h4}>Product</strong> <strong style={h4Copy}>Price</strong> </li>



             {
              Array.from(ordersArr).map((el) => {


                return (
                  <li key={el.name} style={{
                    borderBottom : "solid 1px",
                    borderColor: "#000000",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: "4px",
                    
                     
                    backgroundColor: "#F3F3F3",
                     
                    margin: '0'
                    
                  }}>
                    <h4 style={h4}>{el.product_name}</h4> <h4 style={h4Copy}>£{el.price}</h4>
                  </li>
                )
               })
             }




<li key={'li-2'} style={{ width: "100%", color: 'black', backgroundColor: "#F3F3F3",   display: "flex",  margin: "0", padding: "0px" }}> <strong style={h4}>Total Price</strong> <strong style={h4Copy}>£{amount}</strong> </li>
              
            </ul> */}














            <Text style={{ fontSize: "16px", color: "#333", marginTop: "20px" }} > If you have any questions or need assistance, feel free to contact our support team. </Text>











          </Container>
        </Section>
      </Container>
      <Text style={footer}>Securely powered by Affotax.</Text>
    </Body>
  </Html>
  )
}

export default AdminEmailCompanyFormation;


