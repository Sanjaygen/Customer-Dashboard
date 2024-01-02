"use client";
import React, { ChangeEvent } from "react";
import { CheckBoxContainer, CheckBoxInput } from "./UpCheckbox.styled";
import { CheckboxProps } from "./types";

const UpCheckbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.checked );
  //   e.preventDefault();

  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      e.preventDefault();
      onChange;
    }
  };

  return (
    <CheckBoxContainer>
      <CheckBoxInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </CheckBoxContainer>
  );
};

export default UpCheckbox;
