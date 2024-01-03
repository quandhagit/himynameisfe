import React from "react";
import { Avatar, Button, Divider } from "@mui/material";
import Input from "@/components/common/Input";
import { FormProvider, useForm } from "react-hook-form";
import DefaultInformation from "./DefaultInformation";
import AboutMe from "./AboutMe";
import ExternalLink from "./ExternalLink";

const SettingInformation = () => {
  const form = useForm({ mode: "onBlur", reValidateMode: "onBlur" });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = form;

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <DefaultInformation />
          <AboutMe />
          <ExternalLink />
          <div className="flex mt-2 gap-5 justify-end">
            <Button
              variant="outlined"
              size="large"
              className="w-24"
              onClick={reset}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              size="large"
              className="w-24"
              type="submit"
              disabled={!isValid}
            >
              Save
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SettingInformation;
