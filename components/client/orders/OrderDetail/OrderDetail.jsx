"use client"

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";

const OrderDetail = ({slug}) => {
    console.log(slug)

    
     


  return (
    <div>

<TableContainer component={Paper} sx={{ maxWidth: 700, }}>
      <Table   size="small" sx={{ minWidth: 650,   }} aria-label="simple table">
        
        <TableBody  >
        <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0,  },  }} >
              <TableCell sx={{backgroundColor: '#edeff2', fontFamily: 'poppins'}} component="th" scope="row"> Order id </TableCell>
              <TableCell align="left">1527537</TableCell>
              
            </TableRow>


            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell sx={{backgroundColor: '#edeff2', fontFamily: 'poppins'}} component="th" scope="row"> Status </TableCell>
              <TableCell align="left">	New</TableCell>
              
            </TableRow>


            <TableRow     sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell sx={{backgroundColor: '#edeff2', fontFamily: 'poppins'}} component="th" scope="row"> Order Date</TableCell>
              <TableCell align="left">	2022-12-23 10:43:48.000000</TableCell>
              
            </TableRow>


            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell sx={{backgroundColor: '#edeff2', fontFamily: 'poppins'}} component="th" scope="row"> Contact </TableCell>
              <TableCell align="left">	Rashid Hassan</TableCell>
              
            </TableRow>

            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell sx={{backgroundColor: '#edeff2', fontFamily: 'poppins'}} component="th" scope="row"> Telephone </TableCell>
              <TableCell align="left">	923124646260</TableCell>
              
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>



    </div>
  )
};

export default OrderDetail;
