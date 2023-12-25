import Input from "@/components/common/Input";
import { Avatar } from "@mui/material";
import React from "react";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

type SettingProps = {
  register: UseFormRegister<FieldValues>;
};

const DefaultInformation: React.FC<SettingProps> = ({ register }) => {
  return (
    <div className="flex justify-between flex-wrap items-center py-8">
      <div className="flex justify-center px-16 mb-4 items-center lg:w-1/3 w-full">
        <Avatar sx={{ width: "200px", height: "200px" }} />
      </div>
      <div className="flex flex-col lg:w-2/3 w-full gap-4">
        <div className="flex gap-4 flex-col sm:flex-row">
          <Input
            register={register("lastName")}
            label="Last name"
            placeholder="Enter your last name"
            required
          />
          <Input
            register={register("FirstName")}
            label="First name"
            placeholder="Enter your first name"
            required
          />
        </div>
        <Input
          register={register("email")}
          label="Email"
          placeholder="Enter your email"
          required
        />
        <Input
          register={register("dateOfBirth")}
          label="Date of birth"
          type="date"
          placeholder="Enter your date of birth"
          required
        />
      </div>
    </div>
  );
};

export default DefaultInformation;
