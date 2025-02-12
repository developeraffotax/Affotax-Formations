"use client";

import { createClient } from "@/lib/supabase/client";
import {
  Box,
  Card,
  CircularProgress,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const OrderDetail = ({ slug }) => {
  console.log(slug);

  const [isLoading, setIsLoading] = useState(false);

  const [order, setOrder] = useState({
    id: "",
    order_ref: "",
    status: "",
    total: "",
    created_at: "",
  });

  const [orders_items_arr, set_order_items_arr] = useState([
     
  ])

  const getOrderByOrderRef = async () => {
    const supabase = createClient();
    setIsLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("id, order_ref, status, total, created_at")
      .eq("order_ref", slug);
    setIsLoading(false);
    if (!error && data) {
      setOrder(data[0]);
      getOrderItemsByOrderId(data[0].id)
    }
  };

  const getOrderItemsByOrderId = async (id) => {
    console.log(id, 'THE ID IS HIHIHIHI')
    const supabase = createClient();
    setIsLoading(true);
    const { data, error } = await supabase
      .from("order_items")
      .select("*")
      .eq("order_id",  +id);

      console.log(data, error)
    setIsLoading(false);
    if (!error && data) {
      set_order_items_arr(data);
    }
  };

  useEffect(() => {
    getOrderByOrderRef();
  }, []);

  return (
    <div className="w-full ">
      {isLoading && <CircularProgress />}

      {!isLoading && (
        <TableContainer  sx={{ maxWidth: 700 }}>
          <Table  size="small" sx={{ minWidth: 650, border: 'solid 1px #d3d3d3' }} aria-label="simple table" >
            <TableBody>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} > <TableCell sx={{ backgroundColor: "#edeff2", fontFamily: "poppins" }} component="th" scope="row" > {" "} Order Ref{" "} </TableCell> <TableCell align="left">#{order.order_ref}</TableCell> </TableRow>

              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} > <TableCell sx={{ backgroundColor: "#edeff2", fontFamily: "poppins" }} component="th" scope="row" > {" "} Status{" "} </TableCell> <TableCell align="left">{order.status}</TableCell> </TableRow>

              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} > <TableCell sx={{ backgroundColor: "#edeff2", fontFamily: "poppins" }} component="th" scope="row" > {" "} Total Price </TableCell> <TableCell align="left">£{order.total}</TableCell> </TableRow>

              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} > <TableCell sx={{ backgroundColor: "#edeff2", fontFamily: "poppins" }} component="th" scope="row" > {" "} Order Date{" "} </TableCell> <TableCell align="left"> {dayjs(order.created_at).format('MMMM D, YYYY h:mm A')}</TableCell> </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}



      <Box sx={{marginTop: '30px'}}>
      <TableContainer  sx={{ maxWidth: 1000 }}>
          <Table  size="small" sx={{ minWidth: 700,  border: 'solid 1px #d3d3d3', borderCollapse: 'collapse' }} aria-label="simple table">
          <TableHead sx={{backgroundColor: '#d3d3d3'}}>
            <TableRow>
              <TableCell align="left"   > Product </TableCell>
              <TableCell align="left"> Quantity </TableCell>
              <TableCell align="left"> Price </TableCell>
             
            </TableRow>
           
          </TableHead>

            <TableBody>

              {
                orders_items_arr?.map((el) => {
                  return <TableRow key={el.id}   > <TableCell sx={{ backgroundColor: "#edeff2", fontFamily: "poppins", border: '1px solid #d3d3d3' }} component="th" scope="row" > {el.product_name} </TableCell> <TableCell align="left" sx={{border: '1px solid #d3d3d3' }}>{el.quantity}</TableCell> <TableCell align="left" sx={{border: '1px solid #d3d3d3' }}>{el.price}</TableCell> </TableRow>

                })
              }

              <TableRow  > <TableCell sx={{ backgroundColor: "#edeff2", fontFamily: "poppins", border: '1px solid #d3d3d3' }} component="th" scope="row" >  </TableCell> <TableCell align="left" sx={{fontWeight: 600, border: '1px solid #d3d3d3'}}>Total Price</TableCell> <TableCell align="left" sx={{fontWeight: 600, border: '1px solid #d3d3d3'}}>£{order.total}</TableCell>  </TableRow>


              
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default OrderDetail;
