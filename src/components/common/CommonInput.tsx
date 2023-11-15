import React from "react";
import { InputBaseComponentProps, TextField } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type CommonInput = {
  label: string;
  onValueChange?: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  name?: string;
  register?: UseFormRegisterReturn;
  inputProps?: InputBaseComponentProps;
};

const CommonInput: React.FC<CommonInput> = (props) => {
  const {
    label,
    onValueChange,
    multiline,
    rows = 1,
    type = "text",
    placeholder,
    required = false,
    register,
    inputProps,
  } = props;

  const handleOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (typeof onValueChange === "function") {
      onValueChange(event.target.value);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-1">
        {label}
        {required && <span className="text-red-600 ml-0.5">*</span>}
      </div>
      <TextField
        {...register}
        fullWidth
        multiline={multiline}
        rows={rows}
        size="small"
        type={type}
        inputProps={inputProps}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default CommonInput;
