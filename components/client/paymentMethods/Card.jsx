import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const CardComponent = ({last4, cardholderName, expMonth, expYear, cardBrand, deletCardHandler }) => {













  let logoSrc = '';
  switch (cardBrand) {
    case 'VISA':
      logoSrc = '/visa2.png';
      break;
    case 'MASTERCARD':
      logoSrc = '/master2.png';
      break;
    // Add other cases for different card types if needed
    default:
      logoSrc = '';
  }



  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2} >
    <Card
      sx={{
        width: 350,
        height: 150,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#2c3e50',
        color: '#fff',
        position: 'relative',
      }}
    >
      {/* Card Logo or Bank Brand */}
      <CardMedia
        component="img"
        
        
         
        image={logoSrc}
        alt="Bank Logo"
        sx={{ position: 'absolute', top: 15, left: 15, width: "12%" }}
      />
      
      {/* Card Number */}
      <CardContent sx={{ position: 'absolute', bottom: 50, left: 10 }}>
        <Typography variant="h6">**** **** **** {last4}</Typography>
      </CardContent>

      {/* Card Holder Name */}
      <CardContent sx={{ position: 'absolute', bottom: 20, left: 10 }}>
        <Typography variant="body2">{cardholderName}</Typography>
      </CardContent>

      {/* Expiry Date */}
      <CardContent sx={{ position: 'absolute', bottom: 20, right: 10 }}>
        <Typography variant="body2">{expMonth
        }/{expYear
}</Typography>
      </CardContent>
    </Card>


    <Box>
      <span onClick={deletCardHandler}>
        <DeleteOutlineIcon   className="text-red-500 cursor-pointer transition-none hover:scale-105 active:scale-95 "/>
      </span>
    </Box>
  </Box>
  );
};

export default CardComponent;
