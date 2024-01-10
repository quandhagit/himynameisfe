"use client";

import Dialog from "@/components/common/Dialog";
import Input from "@/components/common/Input";
import { Workspace } from "@/redux/home/workspace/workspaceSlice";
import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";

type SettingWorkspaceDialogProps = {
  workspace: Workspace;
  isOpen?: boolean;
  onClose?: () => void;
};

const SettingWorkspaceDialog: React.FC<SettingWorkspaceDialogProps> = (
  props
) => {
  const { workspace, isOpen = false, onClose } = props;

  const { startDate, endDate, company, role, description, image, id } =
    workspace;

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      startDate,
      endDate,
      company,
      role,
      description,
      image,
    },
  });

  const workDateRange = useMemo(() => {
    if (!startDate && !endDate) return "";

    if (!endDate) {
      return startDate + " - present";
    }

    return startDate + " - " + endDate;
  }, [startDate, endDate]);

  return (
    <Dialog isOpen={isOpen} imageUrl={image} onClose={onClose}>
      <form
        id={id}
        onSubmit={handleSubmit((data) => {
          console.log(data);
          alert(JSON.stringify(data));
        })}
      >
        <div className="flex gap-5 w-full mt-4">
          <div className="text-yellow-600">{workDateRange}</div>
          <div className="">{company}</div>
        </div>
        <div className="text-xl mt-2 text-blue-950 font-semibold">{role}</div>
        <Input
          registerName="description"
          label="Description"
          multiline
          control={control}
          rows={5}
          placeholder="Enter something about you"
        />
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
    </Dialog>
  );
};

export default SettingWorkspaceDialog;
