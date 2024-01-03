import Input from "@/components/common/Input";
import { Divider } from "@mui/material";
import React from "react";
import { Control, FieldErrors, FieldValues } from "react-hook-form";

type SettingProps = {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const ExternalLink: React.FC<SettingProps> = ({ control, errors }) => {
  return (
    <div className="w-full">
      <h3 className="my-4">External Links</h3>
      <Divider />
      <div className="w-full py-8 flex flex-col gap-4">
        <Input
          control={control}
          registerName="facebookUrl"
          label="Facebook"
          placeholder="Enter your link here"
        />
        <Input
          control={control}
          registerName="linkedInUrl"
          label="LinkedIn"
          placeholder="Enter your link here"
        />
        <Input
          control={control}
          registerName="githubUrl"
          label="Github"
          placeholder="Enter your link here"
        />
      </div>
    </div>
  );
};

export default ExternalLink;
