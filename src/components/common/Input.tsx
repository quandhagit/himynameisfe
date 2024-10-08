import React, { useState } from "react";
import { InputBaseComponentProps, TextField, styled } from "@mui/material";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useFormContext,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import moment from "moment";

type InputProps<FieldValueType extends FieldValues> = {
  label: string;
  onValueChange?: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  register?: UseFormRegister<FieldValueType>;
  inputProps?: InputBaseComponentProps;
  isDisabled?: boolean;
  registerName?: string;
  validationErrorMessage?: string;
  pattern?: RegExp;
  errors?: FieldErrors<FieldValueType>;
  control?: Control<FieldValueType>;
};

function Input<FieldValueType extends FieldValues>(
  props: InputProps<FieldValueType>
) {
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

  const form = useFormContext();

  const {
    label,
    onValueChange,
    multiline,
    rows = 1,
    type = "text",
    placeholder,
    required = false,
    inputProps,
    isDisabled = false,
    registerName = "",
    validationErrorMessage = "",
    pattern = /()/,
    errors,
    control,
  } = props;

  const [isTyping, setIsTyping] = useState(false);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (typeof onValueChange === "function") {
      onValueChange(event.target.value);
    }
  };

  if (!control && !form?.control) {
    return (
      <div className="w-full">
        <div className="mb-1">
          {label}
          {required && <span className="text-red-600 ml-0.5">*</span>}
        </div>
        <Input
          name={registerName}
          disabled={isDisabled}
          fullWidth
          multiline={multiline}
          rows={rows}
          size="small"
          type={type}
          inputProps={inputProps}
          placeholder={placeholder}
          onChange={(event) => {
            handleOnChange(event);
          }}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-1">
        {label}
        {required && <span className="text-red-600 ml-0.5">*</span>}
      </div>
      <Controller
        control={form?.control || control}
        name={registerName}
        disabled={isDisabled}
        rules={{
          required: { value: required, message: `${label} is required!` },
          pattern: { value: pattern, message: validationErrorMessage },
          validate: (value) => {
            if (registerName !== "confirmPassword") {
              return true;
            }
            return (
              value === form.watch("password") || "Password does not match"
            );
          },
        }}
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              name={registerName}
              disabled={isDisabled}
              fullWidth
              multiline={multiline}
              rows={rows}
              size="small"
              value={
                type === "date" ? moment(value).format("YYYY-MM-DD") : value
              }
              type={type}
              inputProps={inputProps}
              placeholder={placeholder}
              onChange={(event) => {
                setIsTyping(true);
                onChange(event);
                handleOnChange(event);
              }}
              onBlur={() => {
                onBlur();
                setIsTyping(false);
              }}
              autoFocus={isTyping}
            />
          );
        }}
      />
      {!isTyping && (errors || form?.formState.errors) && (
        <ErrorMessage
          errors={errors || form.formState.errors}
          name={registerName}
          render={({ message }) => (
            <div className="text-red-600 mt-1">{message}</div>
          )}
        />
      )}
    </div>
  );
}

export default Input;
