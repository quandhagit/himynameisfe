import Input from "@/components/common/Input";
import { Divider } from "@mui/material";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const ExternalLink: React.FC = () => {
  return (
    <div className="w-full">
      <h3 className="my-4">External Links</h3>
      <Divider />
      <div className="w-full py-8 flex flex-col gap-4">
        <Input
          registerName="facebookUrl"
          label="Facebook"
          placeholder="Enter your link here"
        />
        <Input
          registerName="linkedInUrl"
          label="LinkedIn"
          placeholder="Enter your link here"
        />
        <Input
          registerName="githubUrl"
          label="Github"
          placeholder="Enter your link here"
        />
      </div>
    </div>
  );
};

export default ExternalLink;
