"use client";
import React, { useState } from "react";
import {  Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { UpButton } from "@/ui-component/UpButton/UpButton";
import FormInput from "@/ui-component/form/input";
import { SignUpProps } from "@/types/auth";
import UpCheckbox from "@/ui-component/UpCheckbox/UpCheckbox";
import { useSignUpData } from "@/hooks/useAuth";
import { Container, StyledForm, StyledLabel } from "./SignUp.styled";

const defaultValue: SignUpProps = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  checkbox: false,
};
const SignUp = () => {
  const {
    control,
    formState: {  errors },
    handleSubmit,
  } = useForm({
    defaultValues: defaultValue,
    mode: "onChange",
    shouldFocusError: true,
  });
  const { mutate: addData } = useSignUpData();
  const onSubmit = (data: SignUpProps) => {
    addData(data);
    alert("SignUp SuccussFully :)");
  };
  const [isChecked, setIsChecked] = useState(false);

  // const handleCheckBoxChange = (checked: boolean) => {
  //   setIsChecked(checked);
  // };
  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
    <Container>
      <h1>Sign UP</h1>
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <StyledLabel>Name</StyledLabel>
          <FormInput
            placeholder="Enter the Name"
            name="name"
            control={control}
            rules={{
              pattern: {
                message: "Please enter the valid Name",
              },
              required: {
                value: true,
                message: "Enter the Name",
              },
            }}
            errorText={errors?.name?.message}
          />
          <StyledLabel>Email</StyledLabel>
          <FormInput
            placeholder="Enter the Email"
            name="email"
            control={control}
            rules={{
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter the valid Email ID",
              },
              required: {
                value: true,
                message: "Enter the Email",
              },
            }}
            errorText={errors?.email?.message}
          />
          <StyledLabel>Create Password</StyledLabel>
          <FormInput
            placeholder="Enter the Password"
            name="password"
            control={control}
            rules={{
              pattern: {
                message: "Please enter the valid password",
              },
              required: {
                value: true,
                message: "Enter the password",
              },
            }}
            errorText={errors?.password?.message}
          />
          <StyledLabel>Phone Number</StyledLabel>
          <FormInput
            placeholder="Enter the Phone Number"
            name="phoneNumber"
            control={control}
            rules={{
              pattern: {
                message: "Please enter the valid phoneNumber",
              },
              required: {
                value: true,
                message: "Enter the phoneNumber",
              },
            }}
            errorText={errors?.phoneNumber?.message}
          />

          <UpCheckbox
            label="please accept terms and conditions"
            checked={isChecked}
            onChange={handleCheckBoxChange}
            testid="yourTestId" 
            name="checkbox"
          />

          <UpButton type="submit" variant="contained">
            Sign Up
          </UpButton>
        </Stack>
      </StyledForm>
      </Container>
    </>
  );
};

export default SignUp;
