import { Card, CardContent, FormControlLabel, Radio, Typography, } from "@mui/material"; import React from "react";




const SavedCard = ({last4, cardholderName, expMonth, expYear, cardBrand, id, value}) => {
  return (
    <FormControlLabel
      sx={{ width: "100%", marginBottom: 2 }}
      value={id}
      control={<Radio />}
      label={
        <Card
          variant="outlined"
          sx={{
            width: 500,
            border: value === id ? "2px solid #1C78D3" : "1px solid gray",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              width: "100%",
            }}
          >
            <Typography component="div">**** **** **** {last4}</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>{cardholderName}</span>
              <span>{expMonth}/{expYear}</span>
            </Typography>
          </CardContent>
        </Card>
      }
    />
  );
};

export default SavedCard;
