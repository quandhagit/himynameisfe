import Input from "@/components/common/Input";
import { Divider } from "@mui/material";
import React from "react";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

type SettingProps = {
  register: UseFormRegister<FieldValues>;
};

const ExternalLink: React.FC<SettingProps> = ({ register }) => {
  return (
    <div className="w-full">
      <h3 className="my-4">External Links</h3>
      <Divider />
      <div className="w-full py-8 flex flex-col gap-4">
        <Input
          register={register}
          registerName="facebookUrl"
          label="Facebook"
          placeholder="Enter your link here"
        />
        <Input
          register={register}
          registerName="linkedInUrl"
          label="LinkedIn"
          placeholder="Enter your link here"
        />
        <Input
          register={register}
          registerName="githubUrl"
          label="Github"
          placeholder="Enter your link here"
        />
      </div>
    </div>
  );
};

export default ExternalLink;
