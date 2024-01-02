"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { BoxStyled } from "./customerProfile.styled";

const CustomerProfile = (props: any) => {
  const { customer } = props;

  return (
    < BoxStyled >
      <h1>Customer Profile</h1>
      {customer ? (
        <>
          <Typography variant="h5">First Name: {customer.fname}</Typography>
          <Typography variant="h5">Last Name: {customer.lname}</Typography>
          <Typography variant="h5">Email: {customer.email}</Typography>
          <Typography variant="h5">Company Name: {customer.companyName}</Typography>

        </>
      ) : (
        <Typography>Customer not found</Typography>
      )}
    </ BoxStyled >
  );
};

export default CustomerProfile;
