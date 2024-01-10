import React from "react";
import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import DefaultInformation from "./DefaultInformation";
import AboutMe from "./AboutMe";
import ExternalLink from "./ExternalLink";

const SettingInformation: React.FC = () => {
  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      country: "",
      city: undefined,
      address: undefined,
      role: "",
      shortDescription: "",
      description: "",
      facebookUrl: "",
      linkedInUrl: "",
      githubUrl: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = form;

  return (
    <div>
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            alert(JSON.stringify(data));
          })}
        >
          <DefaultInformation />
          <AboutMe />
          <ExternalLink />
          <div className="flex mt-2 gap-5 justify-end">
            <Button
              variant="outlined"
              size="large"
              className="w-24"
              onClick={() => {
                reset();
              }}
              disabled={!isDirty}
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
