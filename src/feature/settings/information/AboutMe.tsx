import Input from "@/components/common/Input";
import SingleSelect from "@/components/common/SingleSelect";
import { Divider } from "@mui/material";
import React from "react";
import {
  Control,
  FieldValues,
  UseFormRegister,
  useForm,
} from "react-hook-form";

const testData = [
  {
    value: "1",
    label: "One",
  },
  {
    value: "2",
    label: "Two",
  },
  {
    value: "3",
    label: "Three",
  },
  {
    value: "4",
    label: "Four",
  },
  {
    value: "5",
    label: "Five",
  },
];

type SettingProps = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
};

const AboutMe: React.FC<SettingProps> = ({ register, control }) => {
  return (
    <div className="w-full">
      <h3 className="my-4">About Me</h3>
      <Divider />
      <div className="w-full py-8 flex flex-col gap-4">
        <Input
          register={register("phoneNumber")}
          label="Phone Number"
          placeholder="Enter your phone number"
          required
          type="number"
          inputProps={{ inputMode: "tel" }}
        />
        <Input
          register={register("address")}
          label="Address"
          placeholder="Enter your address"
          required
        />
        <SingleSelect
          options={testData}
          control={control}
          registerName="country"
          label="Address"
          placeholder="Enter your address"
          required
        />
        <Input
          register={register("role")}
          label="Role"
          placeholder="Enter your work role"
          required
        />
        <Input
          register={register("shortDescription")}
          label="Short description"
          multiline
          rows={3}
          placeholder="Enter something about you"
        />
        <Input
          register={register("description")}
          label="Description"
          multiline
          rows={5}
          placeholder="Enter something about you"
        />
      </div>
    </div>
  );
};

export default AboutMe;
