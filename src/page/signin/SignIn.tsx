"use client";
import React from "react";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { SignInProps } from "@/types/auth";
import FormInput from "@/ui-component/form/input";
import { useSaveSignIn } from "@/hooks/useAuth";
import { UpButton } from "@/ui-component/UpButton/UpButton";
import { Container, StyledForm, StyledLabel } from "./SignIn.styled";

const defaultValue: SignInProps = {
  email: "",
  password: "",
};
const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: defaultValue,
    mode: "onChange",
    shouldFocusError: true,
  });

  const { mutate } = useSaveSignIn();
  const handleFormSubmit = (data: SignInProps) => {
    try {
      mutate(data);
    } catch (error) { 
      console.error("Signin failed", error);
    }
  };

  return (
    <>
      <Container>
        <h1>Sign In</h1>
        <StyledForm onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <Stack spacing={2} width={400}>
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
            <StyledLabel> Password</StyledLabel>
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
            <UpButton type="submit" variant="contained">
              Sign In
            </UpButton>
          </Stack>
        </StyledForm>
      </Container>
    </>
  );
};

export default SignIn;
