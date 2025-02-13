import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const CardComponent = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" >
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
        
        
         
        image="/visa2.png"
        alt="Bank Logo"
        sx={{ position: 'absolute', top: 15, left: 15, width: "12%" }}
      />
      
      {/* Card Number */}
      <CardContent sx={{ position: 'absolute', bottom: 50, left: 10 }}>
        <Typography variant="h6">**** **** **** 5432</Typography>
      </CardContent>

      {/* Card Holder Name */}
      <CardContent sx={{ position: 'absolute', bottom: 20, left: 10 }}>
        <Typography variant="body2">JOHN DOE</Typography>
      </CardContent>

      {/* Expiry Date */}
      <CardContent sx={{ position: 'absolute', bottom: 20, right: 10 }}>
        <Typography variant="body2">12/24</Typography>
      </CardContent>
    </Card>
  </Box>
  );
};

export default CardComponent;
