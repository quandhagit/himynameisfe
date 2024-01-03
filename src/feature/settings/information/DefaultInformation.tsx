import Input from "@/components/common/Input";
import { Avatar } from "@mui/material";
import React from "react";

const DefaultInformation: React.FC = () => {
  return (
    <div className="flex justify-between flex-wrap items-center py-8 gap-y-6">
      <div className="flex justify-center px-16 items-center lg:w-1/3 w-full">
        <Avatar sx={{ width: "200px", height: "200px" }} />
      </div>
      <div className="flex flex-col lg:w-2/3 w-full gap-4">
        <div className="flex gap-4 flex-col sm:flex-row">
          <Input
            registerName="lastName"
            label="Last name"
            placeholder="Enter your last name"
            required
          />
          <Input
            registerName="firstName"
            label="First name"
            placeholder="Enter your first name"
            required
          />
        </div>
        <Input
          registerName="email"
          label="Email"
          placeholder="Enter your email"
          required
        />
        <Input
          registerName="dateOfBirth"
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
