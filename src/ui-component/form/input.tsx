"use client";
import { Controller } from "react-hook-form";
import UpInput from "../UpInput/UpInput";
import { UpInputFormProps} from "./type";

const FormInput = (props: UpInputFormProps) => {
  const {
    id,
    name = "UpInput",
    control,
    rules,
    errorText,
    placeholder,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field: { onChange, value, ref } }) => (
        <UpInput
          {...ref}
          id={id ? id : name}
          fullWidth
          onInputHandler={onChange}
          value={value}
          helperText={errorText}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default FormInput;
