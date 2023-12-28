import React from "react";
import { InputBaseComponentProps, TextField, styled } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label: string;
  onValueChange?: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  inputProps?: InputBaseComponentProps;
  isDisabled?: boolean;
};

const Input: React.FC<InputProps> = (props) => {
  const Input = styled(TextField)(() => ({
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "& input::placeholder": {
      color: "#9ca3af",
    },
    background: "white",
    "& input:disabled": {
      background: "#f3f4f6",
    },
    borderColor: "#c4c2c2",
  }));

  const {
    label,
    onValueChange,
    multiline,
    rows = 1,
    type = "text",
    placeholder,
    required = false,
    register = {},
    inputProps,
    isDisabled = false,
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
      <Input
        disabled={isDisabled}
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

export default Input;
