import React from "react";
import { StyledInput } from "./styles";

export const Input = ({ type, placeholder, label, id, register }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        id={id}
        placeholder={placeholder}
        type={type}
        {...register}
      ></StyledInput>
    </>
  );
};
