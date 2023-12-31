import { ErrorMessage } from "@hookform/error-message";
import React, { ReactNode, useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ReactSelect, { SingleValue, StylesConfig } from "react-select";

type OptionTypeBase = {
  value: unknown;
  label: ReactNode;
};

type SingleSelectProps<OptionType> = {
  label: string;
  onValueChange?: (value: SingleValue<OptionType>) => void;
  registerName: string;
  defaultValue?: unknown;
  options: readonly OptionType[];
  placeholder?: string;
  required?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
};

function SingleSelect<OptionType extends OptionTypeBase>(
  props: SingleSelectProps<OptionType>
) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    label,
    onValueChange,
    options,
    placeholder,
    required = false,
    registerName,
    isDisabled = false,
    isLoading = false,
    defaultValue,
  } = props;

  const selectId = useId();

  const handleOnChange = (value: SingleValue<OptionType> | null) => {
    if (typeof onValueChange === "function") {
      onValueChange(value);
    }
  };

  const colourStyles: StylesConfig<OptionType> = useMemo(() => {
    const optionsCommon = {
      padding: "8.5px 14px",
      fontSize: "14px",
      lineHeight: "20px",
    };
    return {
      control: (styles, { isFocused, isDisabled }) => ({
        ...styles,
        backgroundColor: isDisabled ? "#f3f4f6" : "white",
        borderColor: isFocused ? "#ee1042" : "#c4c2c2", // Border/Primary or Border/Secondary
        outline: "#ee1042",
        boxShadow: isFocused ? "0px 0px 0px 1px #ee1042" : "none",
        ":hover": {
          borderColor: isFocused ? "#ee1042" : "black",
        },
      }),
      valueContainer: (styles) => ({
        ...styles,
        padding: "3px 12px",
      }),
      option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        ...optionsCommon,
        backgroundColor: isFocused || isSelected ? "#EFF6FF" : "transparent",
        color: "#1F2937",
      }),
      placeholder: (styles) => ({
        ...styles,
        color: "#9ca3af",
        fontWeight: "200",
        fontSize: "16px",
        opacity: "0.4",
      }),
      indicatorSeparator: () => ({
        display: "none",
      }),
      indicatorsContainer: (styles) => ({
        ...styles,
        transform: "scale(0.88)",
      }),
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mb-1">
        {label}
        {required && <span className="text-red-600 ml-0.5">*</span>}
      </div>
      <Controller
        control={control}
        name={registerName}
        defaultValue={defaultValue}
        disabled={isDisabled}
        rules={{
          required: { value: required, message: `${label} is required!` },
        }}
        render={({ field: { onChange, value } }) => {
          return (
            <ReactSelect<OptionType>
              isLoading={isLoading}
              isDisabled={isDisabled}
              instanceId={selectId}
              value={options.find((option) => value === option.value) || null}
              options={options}
              placeholder={placeholder}
              onChange={(value) => {
                onChange(value?.value);
                handleOnChange(value);
              }}
              styles={colourStyles}
            />
          );
        }}
      />
      {errors && (
        <ErrorMessage
          errors={errors}
          name={registerName}
          render={({ message }) => (
            <div className="text-red-600 mt-1">{message}</div>
          )}
        />
      )}
    </div>
  );
}

export default SingleSelect;
