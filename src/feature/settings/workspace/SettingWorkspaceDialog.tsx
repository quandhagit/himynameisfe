"use client";

import Dialog from "@/components/common/Dialog";
import Input from "@/components/common/Input";
import { Workspace } from "@/redux/home/workspace/workspaceSlice";
import { Button } from "@mui/material";
import React from "react";
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

  return (
    <Dialog
      isOpen={isOpen}
      imageUrl={image}
      onClose={onClose}
      footer={
        <div className="flex gap-5 justify-end px-8 py-4">
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
            onClick={handleSubmit((data) => {
              console.log(data);
              alert(JSON.stringify(data));
            })}
          >
            Save
          </Button>
        </div>
      }
    >
      <form id={id}>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex gap-4 flex-col sm:flex-row">
            <Input
              registerName="startDate"
              label="Start Date"
              type="date"
              placeholder="Enter your start date"
              control={control}
              required
            />
            <Input
              registerName="endDate"
              label="End Date"
              type="date"
              control={control}
              placeholder="Enter your end date"
            />
          </div>
          <Input
            registerName="company"
            label="Company"
            placeholder="Enter your company"
            control={control}
            required
          />
          <Input
            registerName="role"
            label="Role"
            placeholder="Enter your work role"
            control={control}
            required
          />
          <Input
            registerName="description"
            label="Description"
            multiline
            control={control}
            rows={5}
            placeholder="Enter something about you"
          />
        </div>
      </form>
    </Dialog>
  );
};

export default SettingWorkspaceDialog;
