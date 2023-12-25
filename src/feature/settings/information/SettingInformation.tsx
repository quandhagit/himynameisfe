import React from "react";
import { Avatar, Button, Divider } from "@mui/material";
import Input from "@/components/common/Input";
import { useForm } from "react-hook-form";
import DefaultInformation from "./DefaultInformation";
import AboutMe from "./AboutMe";
import ExternalLink from "./ExternalLink";

const SettingInformation = () => {
  const { handleSubmit, register, control } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <DefaultInformation register={register} />
        <AboutMe register={register} control={control} />
        <ExternalLink register={register} />
        <div className="flex mt-2 gap-5 justify-end">
          <Button variant="outlined" size="large" className="w-24">
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            className="w-24"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingInformation;
