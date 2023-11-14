import React from "react";
import { TextField } from "@mui/material";

type CommonInput = {
  label: string;
  onValueChange?: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
};

const CommonInput: React.FC<CommonInput> = (props) => {
  const {
    label,
    onValueChange,
    multiline,
    rows = 1,
    type = "text",
    placeholder,
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
      <div className="mb-1">{label}</div>
      <TextField
        fullWidth
        multiline={multiline}
        rows={rows}
        size="small"
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default CommonInput;
