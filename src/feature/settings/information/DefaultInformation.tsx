import Input from "@/components/common/Input";
import { Avatar } from "@mui/material";
import React from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormTrigger,
} from "react-hook-form";

type SettingProps = {
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  control: Control<FieldValues>;
};

const DefaultInformation: React.FC<SettingProps> = ({
  control,
  errors,
  trigger,
}) => {
  return (
    <div className="flex justify-between flex-wrap items-center py-8 gap-y-6">
      <div className="flex justify-center px-16 items-center lg:w-1/3 w-full">
        <Avatar sx={{ width: "200px", height: "200px" }} />
      </div>
      <div className="flex flex-col lg:w-2/3 w-full gap-4">
        <div className="flex gap-4 flex-col sm:flex-row">
          <Input
            control={control}
            registerName="lastName"
            label="Last name"
            placeholder="Enter your last name"
            required
            errors={errors}
          />
          <Input
            control={control}
            registerName="firstName"
            label="First name"
            placeholder="Enter your first name"
            required
            errors={errors}
          />
        </div>
        <Input
          control={control}
          registerName="email"
          label="Email"
          placeholder="Enter your email"
          required
          errors={errors}
        />
        <Input
          control={control}
          registerName="dateOfBirth"
          label="Date of birth"
          type="date"
          placeholder="Enter your date of birth"
          required
          errors={errors}
        />
      </div>
    </div>
  );
};

export default DefaultInformation;
