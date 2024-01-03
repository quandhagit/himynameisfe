import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import DefaultInformation from "./DefaultInformation";
import AboutMe from "./AboutMe";
import ExternalLink from "./ExternalLink";

const SettingInformation = () => {
  const {
    handleSubmit,
    watch,
    control,
    reset,
    trigger,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onBlur", reValidateMode: "onBlur" });

  return (
    <div>
      <form
        name="informationForm"
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <DefaultInformation
          control={control}
          errors={errors}
          trigger={trigger}
        />
        <AboutMe
          control={control}
          watch={watch}
          errors={errors}
          trigger={trigger}
        />
        <ExternalLink control={control} errors={errors} />
        <div className="flex mt-2 gap-5 justify-end">
          <Button
            variant="outlined"
            size="large"
            className="w-24"
            onClick={reset}
            // disabled={!isDirty}
          >
            Cancel
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
    </div>
  );
};

export default SettingInformation;
